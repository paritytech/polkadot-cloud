import { useCallback, useEffect, useState } from "react";
import {
  Circle,
  getCircleXY,
  outerCircle,
  renderCircle,
  Z,
  getColors,
  ChainName,
} from "./utils";

interface PolkadotIconProps {
  size?: number;
  address: string;
  nocopy?: boolean;
  colors?: string[];
  outerColor?: string;
  dark?: boolean;
}

// TODO think of a better way for theming
const chainTheme = {
  light: "#f1f0f0",
  dark: "rgb(36 32 36)",
};

export const PolkadotIcon = ({
  size = 60,
  address,
  nocopy = false,
  colors: initialColors,
  outerColor,
  dark,
}: PolkadotIconProps) => {
  const [colors, setColors] = useState<string[]>([]);
  const [xy, setXy] = useState<[number, number][] | undefined>();

  useEffect(() => {
    // TODO: look closer into this approach
    let ch = "generic";
    // Polkadot
    if (address.startsWith("1")) {
      ch = "polkadot";
    } else if (
      address.startsWith("E") ||
      address.startsWith("D") ||
      address.startsWith("G")
    ) {
      ch = "kusama";
    } else if (address.startsWith("5")) {
      ch = "westend";
    }
    const circleXy = getCircleXY(ch as ChainName);
    if (initialColors && initialColors?.length < circleXy.length) {
      let initColIdx = 0;
      for (let i = 0; i < circleXy.length; i++) {
        if (!initialColors[i]) {
          initialColors[i] = initialColors[initColIdx++];
        }
        if (initColIdx == initialColors.length) initColIdx = 0;
      }
    }
    const defaultColors = new Array<string>(circleXy.length).fill("#ddd");

    setXy(circleXy);
    setColors(initialColors || getColors(address) || defaultColors);
  }, []);

  const copyToClipboard = useCallback(() => {
    if (nocopy) {
      return;
    }
    navigator && navigator.clipboard.writeText(address);
  }, [address]);

  return (
    xy && (
      <div
        onClick={copyToClipboard}
        style={!nocopy ? { cursor: "pointer" } : {}}
      >
        <svg
          height={size}
          id={address}
          name={address}
          viewBox="0 0 64 64"
          width={size}
        >
          {[
            outerColor
              ? outerCircle(outerColor)
              : outerCircle(dark ? chainTheme.dark : chainTheme.light),
          ]
            .concat(
              xy.map(([cx, cy], index): Circle => {
                return {
                  cx,
                  cy,
                  fill: colors[index],
                  r: Z,
                };
              })
            )
            .map(renderCircle)}
        </svg>
      </div>
    )
  );
};
