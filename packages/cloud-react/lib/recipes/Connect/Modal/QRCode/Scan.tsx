// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { ReactElement, memo, useCallback, useMemo } from "react";
import QrReader from "react-qr-reader";
import type { ScanProps } from "./types";
import { createImgSize } from "./util";

const DEFAULT_DELAY = 150;

const DEFAULT_ERROR = (error: Error): void => {
  throw new Error(error.message);
};

const Scan = ({
  className = "",
  delay = DEFAULT_DELAY,
  onError = DEFAULT_ERROR,
  onScan,
  size,
  style = {},
}: ScanProps): ReactElement<ScanProps> => {
  const containerStyle = useMemo(() => createImgSize(size), [size]);

  const onErrorCallback = useCallback(
    (error: Error) => onError(error),
    [onError]
  );

  const onScanCallback = useCallback(
    (data: string | null) => data && onScan(data),
    [onScan]
  );

  return (
    <div className={"scan-wrapper " + className} style={containerStyle}>
      <QrReader
        className="ui-qr-scan"
        delay={delay}
        onError={onErrorCallback}
        onScan={onScanCallback}
        style={style}
      />
    </div>
  );
};

export const QrScan = memo(Scan);
