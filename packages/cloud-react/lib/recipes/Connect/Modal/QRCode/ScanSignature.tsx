// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { memo, ReactElement, useCallback } from "react";
import { QrScan } from "./Scan";
import type { ScanSignatureProps } from "./types";

const ScanSignature = ({
  className,
  onError,
  onScan,
  size,
  style,
}: ScanSignatureProps): ReactElement<ScanSignatureProps> => {
  const onScanCallback = useCallback(
    (signature: string | null) =>
      signature && onScan({ signature: `0x${signature}` }),
    [onScan]
  );

  return (
    <QrScan
      className={className}
      onError={onError}
      onScan={onScanCallback}
      size={size}
      style={style}
    />
  );
};

export const QrScanSignature = memo(ScanSignature);
