/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { decodeAddress, encodeAddress } from "@polkadot/keyring";
import { hexToU8a, isHex, u8aToString, u8aUnwrapBytes } from "@polkadot/util";
import BigNumber from "bignumber.js";
import type { MutableRefObject, RefObject } from "react";
import { AnyJson } from "./types";

/**
 * IMPORTANT: Rollup treats this file as the entry point for the package, the build of which is
 * configured with a separate tsconfig.json file that treats `lib` as the `baseUrl` of the project.
 * This is to build `lib` files at the top-level of the final bundled package.
 *
 * Because of this relative file paths should be used in this directory.
 */

/**
 * @name clipAddress
 * @description Clips an address to the first 6 and last 6 characters.
 */
export const clipAddress = (val: string) => {
  if (typeof val !== "string") {
    return val;
  }
  return `${val.substring(0, 6)}...${val.substring(
    val.length - 6,
    val.length
  )}`;
};

/**
 * @name remToUnit
 * @description Converts a rem string to a number.
 */
export const remToUnit = (rem: string) =>
  Number(rem.slice(0, rem.length - 3)) *
  parseFloat(getComputedStyle(document.documentElement).fontSize);

/**
 * @name planckToUnit
 * @description
 * Converts an on chain balance value in BigNumber planck to a decimal value in token unit.
 * (1 token = 10^units planck).
 * @summary convert planck to the token unit
 */
export const planckToUnit = (val: BigNumber, units: number) =>
  new BigNumber(
    val.dividedBy(new BigNumber(10).exponentiatedBy(units)).toFixed(units)
  );

/**
 * @name unitToPlanck
 * @description
 * Converts a balance in token unit to an equivalent value in planck by applying
 * the chain decimals point. (1 token = 10^units planck).
 * @summary Convert the token unit to planck
 */
export const unitToPlanck = (val: string, units: number): BigNumber =>
  new BigNumber(!val.length || !val ? "0" : val)
    .multipliedBy(new BigNumber(10).exponentiatedBy(units))
    .integerValue();

/**
 * @name rmCommas
 * @description Removes the commas from a number
 */
export const rmCommas = (val: string): string => val.replace(/,/g, "");

/**
 * @name greaterThanZero
 * @description Verify whether the number is greater than zero
 */
export const greaterThanZero = (val: BigNumber) => val.isGreaterThan(0);

/**
 * @name isNotZero
 * @description Verify whether the number is zero
 */
export const isNotZero = (val: BigNumber) => !val.isZero();

/**
 * @name shuffle
 * @description Shuffle a set of objects
 */
export const shuffle = <T>(array: Array<T>) => {
  let currentIndex = array.length;
  let randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

/**
 * @name pageFromUri
 * @description Use url variables to load the default components upon the first page visit
 */
export const pageFromUri = (pathname: string) => {
  const lastUriItem = pathname.substring(pathname.lastIndexOf("/") + 1);
  const page = lastUriItem.trim() === "" ? "overview" : lastUriItem;
  return page;
};

/**
 * @name capitalizeFirstLetter
 * @description Capitalize the first letter of a string
 */
export const capitalizeFirstLetter = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

/**
 * @name setStateWithRef
 * @description Synchronize the current state and its reference state with the same value
 */
export const setStateWithRef = <T>(
  value: T,
  setState: (_state: T) => void,
  ref: MutableRefObject<T>
): void => {
  setState(value);
  ref.current = value;
};

/**
 * @name localStorageOrDefault
 * @description Retrieve the local stroage value with the key, return defult value if it is not found
 */
export const localStorageOrDefault = <T>(
  key: string,
  _default: T,
  parse = false
): T | string => {
  const val: string | null = localStorage.getItem(key);

  if (val === null) {
    return _default;
  }

  if (parse) {
    return JSON.parse(val) as T;
  }
  return val;
};

/**
 * @name isValidAddress
 * @description Whether the address is valid in Substrate chain
 */
export const isValidAddress = (address: string) => {
  try {
    encodeAddress(isHex(address) ? hexToU8a(address) : decodeAddress(address));
    return true;
  } catch (e) {
    return false;
  }
};

/**
 * @name determinePoolDisplay
 * @description A pool will be displayed with either its super identitiy or its address
 */
export const determinePoolDisplay = (adddress: string, batchItem: AnyJson) => {
  // default display value
  const defaultDisplay = clipAddress(adddress);

  // fallback to address on empty metadata string
  let display = batchItem ?? defaultDisplay;

  // check if super identity has been byte encoded
  const displayAsBytes = u8aToString(u8aUnwrapBytes(display));
  if (displayAsBytes !== "") {
    display = displayAsBytes;
  }
  // if still empty string, default to clipped address
  if (display === "") {
    display = defaultDisplay;
  }

  return display;
};

/**
 * @name extractUrlValue
 * @description Extracts a URL value from a URL string
 */
export const extractUrlValue = (key: string, url?: string) => {
  if (typeof url === "undefined") url = window.location.href;
  const match = url.match(`[?&]${key}=([^&]+)`);
  return match ? match[1] : null;
};

/**
 * @name camelize
 * @description Converts a string of text to camelCase
 */
export const camelize = (str: string) =>
  str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
      index === 0 ? word.toLowerCase() : word.toUpperCase()
    )
    .replace(/\s+/g, "");

/**
 * @name varToUrlHash
 * @description
 * Since url variables are added to the hash and are not treated as URL params,
 * the params are split and parsed into a `URLSearchParams`.
 * @summary Puts a variable into the URL hash as a param.
 */
export const varToUrlHash = (
  key: string,
  val: string,
  addIfMissing: boolean
) => {
  const hash = window.location.hash;
  const [page, params] = hash.split("?");
  const searchParams = new URLSearchParams(params);

  if (searchParams.get(key) === null && !addIfMissing) {
    return;
  }
  searchParams.set(key, val);
  window.location.hash = `${page}?${searchParams.toString()}`;
};

/**
 * @name removeVarFromUrlHash
 * @description
 * Removes a variable `key` from the URL hash if it exists.
 * Removes dangling `?` if no URL variables exist.
 */
export const removeVarFromUrlHash = (key: string) => {
  const hash = window.location.hash;
  const [page, params] = hash.split("?");
  const searchParams = new URLSearchParams(params);
  if (searchParams.get(key) === null) {
    return;
  }
  searchParams.delete(key);
  const paramsAsStr = searchParams.toString();
  window.location.hash = `${page}${paramsAsStr ? `?${paramsAsStr}` : ``}`;
};

/**
 * @name sortWithNull
 * @description Sorts an array with nulls last.
 */
export const sortWithNull =
  (ascending: boolean) => (a: AnyJson, b: AnyJson) => {
    // equal items sort equally
    if (a === b) {
      return 0;
    }
    // nulls sort after anything else
    if (a === null) {
      return 1;
    }
    if (b === null) {
      return -1;
    }
    // otherwise, if we're ascending, lowest sorts first
    if (ascending) {
      return a < b ? -1 : 1;
    }
    // if descending, highest sorts first
    return a < b ? 1 : -1;
  };

/**
 * @name applyWidthAsPadding
 * @description Applies width of subject to paddingRight of container
 */
export const applyWidthAsPadding = (
  subjectRef: RefObject<HTMLDivElement>,
  containerRef: RefObject<HTMLDivElement>
) => {
  if (containerRef.current && subjectRef.current) {
    containerRef.current.style.paddingRight = `${
      subjectRef.current.offsetWidth + remToUnit("1rem")
    }px`;
  }
};

/**
 * @name unescape
 * @description Replace \” with “
 */
export const unescape = (val: string) => val.replace(/\\"/g, '"');

/**
 * @name inChrome
 * @description Whether the application is rendering in Chrome
 */
export const inChrome = () => {
  const isChromium = (window as AnyJson)?.chrome || null;
  const winNav = (window as AnyJson)?.navigator || null;
  const isOpera = typeof (window as AnyJson)?.opr !== "undefined";
  const isIEedge = winNav?.userAgent.indexOf("Edg") > -1 || false;
  const isIOSChrome = winNav?.userAgent.match("CriOS") || false;

  if (isIOSChrome) {
    return true;
  }
  if (
    isChromium !== null &&
    typeof isChromium !== "undefined" &&
    isOpera === false &&
    isIEedge === false
  ) {
    return true;
  }
  return false;
};
