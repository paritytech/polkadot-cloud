// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { useRef, useState } from "react";
import { setStateWithRef } from "@polkadotcloud/utils";
import { defaultNotificationsContext } from "./defaults";
import {
  NotificationInterface,
  NotificationItem,
  NotificationsContextInterface,
} from "./types";

export const NotificationsContext =
  React.createContext<NotificationsContextInterface>(
    defaultNotificationsContext
  );

export const useNotifications = () => React.useContext(NotificationsContext);

export const NotificationsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [index, _setIndex] = useState(0);
  const [notifications, setNotifications] = useState<NotificationInterface[]>(
    []
  );

  const indexRef = useRef(index);
  const notificationsRef = useRef(notifications);

  const setIndex = (_index: number) => {
    indexRef.current = _index;
    _setIndex(_index);
  };

  const addNotification = (_n: NotificationItem) => {
    const _notifications: NotificationInterface[] = [
      ...notificationsRef.current,
    ];

    const newIndex: number = indexRef.current + 1;

    _notifications.push({
      index: newIndex,
      item: {
        ..._n,
        index: newIndex,
      },
    });

    setIndex(newIndex);
    setStateWithRef(_notifications, setNotifications, notificationsRef);
    setTimeout(() => {
      removeNotification(newIndex);
    }, 3000);

    return newIndex;
  };

  const removeNotification = (_index: number) => {
    const _notifications = notificationsRef.current.filter(
      (item: NotificationInterface) => item.index !== _index
    );
    setStateWithRef(_notifications, setNotifications, notificationsRef);
  };

  return (
    <NotificationsContext.Provider
      value={{
        addNotification,
        removeNotification,
        notifications: notificationsRef.current,
      }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};
