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

interface PolkiconProps {
  size?: number | string;
  address: string;
  copy?: boolean;
  colors?: string[];
  outerColor?: string;
}

export const Polkicon = ({
  size = "2rem",
  address,
  copy = false,
  colors: initialColors,
  outerColor,
}: PolkiconProps) => {
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

  const handleClick = useCallback(() => {
    navigator && navigator.clipboard.writeText(address);
  }, [address]);

  return (
    xy && (
      <div
        onClick={copy ? handleClick : undefined}
        style={copy ? { cursor: "pointer" } : {}}
      >
        <svg
          viewBox="0 0 64 64"
          id={address}
          name={address}
          width={size}
          height={size}
        >
          {[
            outerColor
              ? outerCircle(outerColor)
              : outerCircle("var(--background-default"),
          ]
            .concat(
              xy.map(
                ([cx, cy], index): Circle => ({
                  cx,
                  cy,
                  fill: colors[index],
                  r: Z,
                })
              )
            )
            .map(renderCircle)}
        </svg>
      </div>
    )
  );
};
