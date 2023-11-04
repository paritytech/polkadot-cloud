// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import {
  ReactNode,
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import TransportWebHID from "@ledgerhq/hw-transport-webhid";
import { newSubstrateApp } from "@zondax/ledger-substrate";
import { u8aToBuffer } from "@polkadot/util";
import { localStorageOrDefault, setStateWithRef } from "@polkadot-cloud/utils";
import type { LedgerAccount } from "../../../../connect/types";
import type {
  AnyFunction,
  AnyJson,
  MaybeString,
} from "../../../../utils/types";
import {
  getLocalLedgerAccounts,
  getLocalLedgerAddresses,
  isLocalNetworkAddress,
} from "./Utils";
import {
  LEDGER_DEFAULT_ACCOUNT,
  LEDGER_DEFAULT_CHANGE,
  LEDGER_DEFAULT_INDEX,
  TOTAL_ALLOWED_STATUS_CODES,
  defaultFeedback,
  defaultLedgerHardwareContext,
} from "./defaults";
import type {
  FeedbackMessage,
  LedgerAddress,
  LedgerHardwareContextInterface,
  LedgerResponse,
  LedgerStatusCode,
  LedgerTask,
  PairingStatus,
} from "./types";
import { useConnectConfig } from "../ConnectConfigProvider";

export type FeedbackMessages = {
  ledgerRequestTimeout?: FeedbackMessage;
  missingNesting?: FeedbackMessage;
  queuedTransactionRejected?: FeedbackMessage;
  connectLedgerToContinue?: FeedbackMessage;
  transactionRejectedPending?: FeedbackMessage;
  openAppOnLedger?: FeedbackMessage;
  gettingAddress?: FeedbackMessage;
  successfullyFetchedAddress?: FeedbackMessage;
  signedTransactionSuccessfully?: FeedbackMessage;
  approveTransactionLedger?: FeedbackMessage;
  unlockLedgerToContinue?: FeedbackMessage;
};

// Default (fallback) Feedback Messages
const dfm = {
  ledgerRequestTimeout: ["Ledger Request Timeout", "Ledger Request Timeout"],
  missingNesting: ["Missing Nesting"],
  queuedTransactionRejected: ["Wrong Transaction", "Wrong Transaction"],
  connectLedgerToContinue: ["Please connect Ledger to continue"],
  transactionRejectedPending: [
    "Ledger Rejected Transaction",
    "Ledger Rejected Transaction",
  ],
  openAppOnLedger: ["Open App On Ledger", "Open App On Ledger"],
  gettingAddress: ["Getting address", "Getting address"],
  successfullyFetchedAddress: ["Successfully fetched address"],
  signedTransactionSuccessfully: ["Signed transaction successfully"],
  approveTransactionLedger: ["Approve transaction ledger"],
  unlockLedgerToContinue: ["Unlock Ledger to continue"],
  UnknownStatusCode2816: ["Unknown Status Code 2816"],
  genericError: ["Generic Error"],
};

export const LedgerHardwareProvider = ({
  children,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  fbm,
}: {
  children: ReactNode;
  fbm?: FeedbackMessages;
}) => {
  const { network } = useConnectConfig();

  const [ledgerAccounts, setLedgerAccountsState] = useState<LedgerAccount[]>(
    getLocalLedgerAccounts(network)
  );
  const ledgerAccountsRef = useRef(ledgerAccounts);

  // Store whether the device has been paired.
  const [isPaired, setIsPairedState] = useState<PairingStatus>("unknown");
  const isPairedRef = useRef(isPaired);

  // Store whether an import is in process.
  const [isExecuting, setIsExecutingState] = useState(false);
  const isExecutingRef = useRef(isExecuting);

  // Store status codes received from Ledger device.
  const [statusCodes, setStatusCodes] = useState<LedgerResponse[]>([]);
  const statusCodesRef = useRef(statusCodes);

  // Get the default message to display, set when a failed loop has happened.
  const [feedback, setFeedbackState] =
    useState<FeedbackMessage>(defaultFeedback);

  const feedbackRef = useRef(feedback);

  // Store the latest successful response from an attempted `executeLedgerLoop`.
  const [transportResponse, setTransportResponse] = useState<AnyJson>(null);

  // Whether pairing is in progress: protects against re-renders & duplicate attempts.
  const pairInProgress = useRef(false);

  // Whether a ledger-loop is in progress: protects against re-renders & duplicate attempts.
  const ledgerLoopInProgress = useRef(false);

  // The ledger transport interface.
  const ledgerTransport = useRef<AnyJson>(null);

  // Refresh imported ledger accounts on network change.
  useEffect(() => {
    setStateWithRef(
      getLocalLedgerAccounts(network),
      setLedgerAccountsState,
      ledgerAccountsRef
    );
  }, [network]);

  // Handles errors that occur during `executeLedgerLoop` and `pairDevice` calls.
  const handleErrors = (appName: string, err: AnyJson) => {
    // reset any in-progress calls.
    ledgerLoopInProgress.current = false;
    pairInProgress.current = false;

    // execution failed - no longer executing.
    setIsExecuting(false);

    // close any open device connections.
    if (ledgerTransport.current?.device?.opened) {
      ledgerTransport.current?.device?.close();
    }

    // format error message.
    err = String(err);
    if (err === "Error: Timeout") {
      // only set default message here - maintain previous status code.
      feedBackMsg("ledgerRequestTimeout");
      handleNewStatusCode("failure", "DeviceTimeout");
    } else if (err.startsWith("Error: Call nesting not supported")) {
      feedBackMsg("missingNesting");
      handleNewStatusCode("failure", "NestingNotSupported");
    } else if (
      err.startsWith("Error: TransportError: Invalid channel") ||
      err.startsWith("Error: InvalidStateError")
    ) {
      // occurs when tx was approved outside of active channel.
      feedBackMsg("queuedTransactionRejected");
      handleNewStatusCode("failure", "WrongTransaction");
    } else if (
      err.startsWith("TransportOpenUserCancelled") ||
      err.startsWith("Error: Ledger Device is busy")
    ) {
      // occurs when the device is not connected.
      feedBackMsg("connectLedgerToContinue");
      handleNewStatusCode("failure", "DeviceNotConnected");
    } else if (err.startsWith("Error: LockedDeviceError")) {
      // occurs when the device is connected but not unlocked.
      feedBackMsg("unlockLedgerToContinue");
      handleNewStatusCode("failure", "DeviceLocked");
    } else if (err.startsWith("Error: Transaction rejected")) {
      // occurs when user rejects a transaction.
      feedBackMsg("transactionRejectedPending");
      handleNewStatusCode("failure", "TransactionRejected");
    } else if (err.startsWith("Error: Unknown Status Code: 28161")) {
      // occurs when the required app is not open.
      feedBackMsg("UnknownStatusCode2816");
      handleNewStatusCode("failure", "AppNotOpenContinue");
    } else {
      // miscellanous errors - assume app is not open or ready.
      feedBackMsg("genericError");
      handleNewStatusCode("failure", "AppNotOpen");
    }
  };

  // Timeout function for hanging tasks. Used for tasks that require no input from the device, such
  // as getting an address that does not require confirmation.
  const withTimeout = (millis: AnyFunction, promise: AnyFunction) => {
    const timeout = new Promise((_, reject) =>
      setTimeout(async () => {
        ledgerTransport.current?.device?.close();
        reject(Error("Timeout"));
      }, millis)
    );
    return Promise.race([promise, timeout]);
  };

  // Attempt to pair a device.
  //
  // Trigger a one-time connection to the device to determine if it is available. If the device
  // needs to be paired, a browser prompt will open. If cancelled, an error will be thrown.
  const pairDevice = async () => {
    try {
      // return `paired` if pairing is already in progress.
      if (pairInProgress.current) {
        return isPairedRef.current === "paired";
      }
      // set pairing in progress.
      pairInProgress.current = true;

      // remove any previously stored status codes.
      resetStatusCodes();

      // close any open connections.
      if (ledgerTransport.current?.device?.opened) {
        await ledgerTransport.current?.device?.close();
      }
      // establish a new connection with device.
      ledgerTransport.current = await TransportWebHID.create();

      setIsPaired("paired");
      pairInProgress.current = false;
      return true;
    } catch (err) {
      pairInProgress.current = false;
      handleErrors("", err);
      return false;
    }
  };

  // Connects to a Ledger device to perform a task. This is the main execute function that handles
  // all Ledger tasks, along with errors that occur during the process.
  const executeLedgerLoop = async (
    appName: string,
    tasks: LedgerTask[],
    options?: AnyJson
  ) => {
    try {
      // do not execute again if already in progress.
      if (ledgerLoopInProgress.current) {
        return;
      }

      // set ledger loop in progress.
      ledgerLoopInProgress.current = true;

      // test for tasks and execute them. This is designed such that `result` will only store the
      // result of one task. This will have to be refactored if we ever need to execute multiple
      // tasks at once.
      let result = null;
      if (tasks.includes("get_address")) {
        result = await handleGetAddress(appName, options?.accountIndex || 0);
      } else if (tasks.includes("sign_tx")) {
        const uid = options?.uid || 0;
        const index = options?.accountIndex || 0;
        const payload = options?.payload || "";

        result = await handleSignTx(appName, uid, index, payload);
      }

      // a populated result indicates a successful execution. Set the transport response state for
      // other components to respond to via useEffect.
      if (result) {
        setTransportResponse({
          ack: "success",
          options,
          ...result,
        });
      }
      ledgerLoopInProgress.current = false;
    } catch (err) {
      handleErrors(appName, err);
    }
  };

  // Gets an app address on device.
  const handleGetAddress = async (appName: string, index: number) => {
    const substrateApp = newSubstrateApp(ledgerTransport.current, appName);
    const { deviceModel } = ledgerTransport.current;
    const { id, productName } = deviceModel;

    setTransportResponse({
      ack: "success",
      statusCode: "GettingAddress",
      body: null,
    });
    feedBackMsg("gettingAddress");

    if (!ledgerTransport.current?.device?.opened) {
      await ledgerTransport.current?.device?.open();
    }
    const result: AnyJson = await withTimeout(
      3000,
      substrateApp.getAddress(
        LEDGER_DEFAULT_ACCOUNT + index,
        LEDGER_DEFAULT_CHANGE,
        LEDGER_DEFAULT_INDEX + 0,
        false
      )
    );

    await ledgerTransport.current?.device?.close();

    const error = result?.error_message;
    if (error) {
      if (!error.startsWith("No errors")) {
        throw new Error(error);
      }
    }

    if (!(result instanceof Error)) {
      feedBackMsg("successfullyFetchedAddress");

      return {
        statusCode: "ReceivedAddress",
        device: { id, productName },
        body: [result],
      };
    }
    return undefined;
  };

  // Signs a payload on device.
  const handleSignTx = async (
    appName: string,
    uid: number,
    index: number,
    payload: AnyJson
  ) => {
    const substrateApp = newSubstrateApp(ledgerTransport.current, appName);
    const { deviceModel } = ledgerTransport.current;
    const { id, productName } = deviceModel;

    setTransportResponse({
      ack: "success",
      statusCode: "SigningPayload",
      body: null,
    });

    feedBackMsg("approveTransactionLedger");

    if (!ledgerTransport.current?.device?.opened) {
      await ledgerTransport.current?.device?.open();
    }
    const result = await substrateApp.sign(
      LEDGER_DEFAULT_ACCOUNT + index,
      LEDGER_DEFAULT_CHANGE,
      LEDGER_DEFAULT_INDEX + 0,
      u8aToBuffer(payload.toU8a(true))
    );

    feedBackMsg("signedTransactionSuccessfully");
    await ledgerTransport.current?.device?.close();

    const error = result?.error_message;
    if (error) {
      if (!error.startsWith("No errors")) {
        throw new Error(error);
      }
    }

    if (!(result instanceof Error)) {
      return {
        statusCode: "SignedPayload",
        device: { id, productName },
        body: {
          uid,
          sig: result.signature,
        },
      };
    }
    return undefined;
  };

  // Handle an incoming new status code and persist to state.
  const handleNewStatusCode = (ack: string, statusCode: LedgerStatusCode) => {
    const newStatusCodes = [{ ack, statusCode }, ...statusCodes];

    // Remove last status code if there are more than allowed number of status codes.
    if (newStatusCodes.length > TOTAL_ALLOWED_STATUS_CODES) {
      newStatusCodes.pop();
    }
    setStateWithRef(newStatusCodes, setStatusCodes, statusCodesRef);
  };

  // Check if a Ledger address exists in imported addresses.
  const ledgerAccountExists = (address: string) =>
    !!getLocalLedgerAccounts().find((a) =>
      isLocalNetworkAddress(network, a, address)
    );

  const addLedgerAccount = (address: string, index: number) => {
    let newLedgerAccounts = getLocalLedgerAccounts();

    const ledgerAddress = getLocalLedgerAddresses().find((a) =>
      isLocalNetworkAddress(network, a, address)
    );

    if (
      ledgerAddress &&
      !newLedgerAccounts.find((a) => isLocalNetworkAddress(network, a, address))
    ) {
      const account = {
        address,
        network,
        name: ledgerAddress.name,
        source: "ledger",
        index,
      };

      // update the full list of local ledger accounts with new entry.
      newLedgerAccounts = [...newLedgerAccounts].concat(account);
      localStorage.setItem(
        "ledger_accounts",
        JSON.stringify(newLedgerAccounts)
      );

      // store only those accounts on the current network in state.
      setStateWithRef(
        newLedgerAccounts.filter((a) => a.network === network),
        setLedgerAccountsState,
        ledgerAccountsRef
      );

      return account;
    }
    return null;
  };

  const removeLedgerAccount = (address: string) => {
    let newLedgerAccounts = getLocalLedgerAccounts();

    newLedgerAccounts = newLedgerAccounts.filter((a) => {
      if (a.address !== address) {
        return true;
      }
      if (a.network !== network) {
        return true;
      }
      return false;
    });
    if (!newLedgerAccounts.length) {
      localStorage.removeItem("ledger_accounts");
    } else {
      localStorage.setItem(
        "ledger_accounts",
        JSON.stringify(newLedgerAccounts)
      );
    }
    setStateWithRef(
      newLedgerAccounts.filter((a) => a.network === network),
      setLedgerAccountsState,
      ledgerAccountsRef
    );
  };

  // Gets an imported address along with its Ledger metadata.
  const getLedgerAccount = (address: string) => {
    const localLedgerAccounts = getLocalLedgerAccounts();

    if (!localLedgerAccounts) {
      return null;
    }
    return (
      localLedgerAccounts.find((a) =>
        isLocalNetworkAddress(network, a, address)
      ) ?? null
    );
  };

  // Renames an imported ledger account.
  const renameLedgerAccount = (address: string, newName: string) => {
    let newLedgerAccounts = getLocalLedgerAccounts();

    newLedgerAccounts = newLedgerAccounts.map((a) =>
      isLocalNetworkAddress(network, a, address)
        ? {
            ...a,
            name: newName,
          }
        : a
    );
    renameLocalLedgerAddress(address, newName);
    localStorage.setItem("ledger_accounts", JSON.stringify(newLedgerAccounts));
    setStateWithRef(
      newLedgerAccounts.filter((a) => a.network === network),
      setLedgerAccountsState,
      ledgerAccountsRef
    );
  };

  // Renames a record from local ledger addresses.
  const renameLocalLedgerAddress = (address: string, name: string) => {
    const localLedger = (
      localStorageOrDefault("ledger_addresses", [], true) as LedgerAddress[]
    )?.map((i) =>
      !(i.address === address && i.network === network)
        ? i
        : {
            ...i,
            name,
          }
    );

    if (localLedger) {
      localStorage.setItem("ledger_addresses", JSON.stringify(localLedger));
    }
  };

  const getTransport = () => {
    return ledgerTransport.current;
  };

  const getIsExecuting = () => {
    return isExecutingRef.current;
  };

  const getStatusCodes = () => {
    return statusCodesRef.current;
  };

  const getFeedback = () => {
    return feedbackRef.current;
  };

  const feedBackMsg = (key: string): void => {
    // TODO: Fix feedback messages
    setFeedback(dfm[key][0], dfm[key][1]);
    // (fbm && Object.keys(fbm).length && fbm[key] && fbm[key][0]) ||
    //   dfm[key][0],
    // (fbm && Object.keys(fbm).length && fbm[key][1]) || dfm[key][1]
  };

  const setFeedback = (message: MaybeString, helpKey: MaybeString = null) => {
    setStateWithRef({ message, helpKey }, setFeedbackState, feedbackRef);
  };

  const resetFeedback = () => {
    setStateWithRef(defaultFeedback, setFeedbackState, feedbackRef);
  };

  const setIsPaired = (p: PairingStatus) => {
    setStateWithRef(p, setIsPairedState, isPairedRef);
  };

  const setIsExecuting = (val: boolean) => {
    setStateWithRef(val, setIsExecutingState, isExecutingRef);
  };

  const resetStatusCodes = () => {
    setStateWithRef([], setStatusCodes, statusCodesRef);
  };

  const handleUnmount = () => {
    // reset refs
    ledgerLoopInProgress.current = false;
    pairInProgress.current = false;
    // reset state
    resetStatusCodes();
    setIsExecuting(false);
    resetFeedback();
    // close transport
    if (getTransport()?.device?.opened) {
      getTransport().device.close();
    }
  };

  return (
    <LedgerHardwareContext.Provider
      value={{
        pairDevice,
        transportResponse,
        executeLedgerLoop,
        setIsPaired,
        setIsExecuting,
        handleNewStatusCode,
        resetStatusCodes,
        getIsExecuting,
        getStatusCodes,
        getTransport,
        ledgerAccountExists,
        addLedgerAccount,
        removeLedgerAccount,
        renameLedgerAccount,
        getLedgerAccount,
        getFeedback,
        setFeedback,
        resetFeedback,
        handleUnmount,
        isPaired: isPairedRef.current,
        ledgerAccounts: ledgerAccountsRef.current,
      }}
    >
      {children}
    </LedgerHardwareContext.Provider>
  );
};

export const LedgerHardwareContext =
  createContext<LedgerHardwareContextInterface>(defaultLedgerHardwareContext);

export const useLedgerHardware = () => useContext(LedgerHardwareContext);
