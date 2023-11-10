import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Circle,
  getCircleXY,
  outerCircle,
  renderCircle,
  Z,
  getColors,
  ChainName,
} from "./utils";
import { isValidAddress } from "@polkadot-cloud/utils";

interface PolkiconProps {
  size?: number | string;
  address: string;
  copy?: boolean;
  colors?: string[];
  outerColor?: string;
  copyTimeout?: number;
}

const copyPopup = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.1,
    },
  },
  exit: {
    opacity: 0,
  },
};

export const Polkicon = ({
  size = "2rem",
  address,
  copy = false,
  colors: initialColors,
  outerColor,
  copyTimeout = 500,
}: PolkiconProps) => {
  const [colors, setColors] = useState<string[]>([]);
  const [xy, setXy] = useState<[number, number][] | undefined>();
  const [copySuccess, setCopySuccess] = useState(false);
  const [message, setMessage] = useState<string>("Copied!");

  const [s, setS] = useState<string | number>();
  const [f, setF] = useState<string>();
  const [p, setP] = useState<string>();

  useEffect(() => {
    const InfoText = (type: string, value: string | number) =>
      console.warn(
        `Polkicon: 'Size' expressed in '${type}' cannot be less than ${value}. Will be resized to minimum size.`
      );

    if (
      typeof size === "string" &&
      !size.includes("px") &&
      !size.includes("rem")
    ) {
      throw new Error(
        "Providing a string for 'size' in Polkicon should be expressed either in 'px', 'rem' or 'em'"
      );
    }

    let sizeNumb: number;
    let fontType: string;
    if (typeof size === "string") {
      fontType = size.replace(/[0-9.]/g, "");
      switch (fontType) {
        case "px":
          sizeNumb = parseFloat(size);
          break;
        case "rem":
          sizeNumb = parseFloat(size) * 10;
          break;
      }
    } else if (typeof size === "number") {
      sizeNumb = size;
    }

    setS(
      fontType
        ? `${fontType === "px" ? sizeNumb + "px" : sizeNumb / 10 + "rem"}`
        : sizeNumb
    );
    if (sizeNumb < 12) {
      InfoText(
        fontType || "number",
        fontType === "px" ? "12px" : fontType === "rem" ? "1.2rem" : 12
      );
    }

    if (sizeNumb < 32) {
      setP("0rem 0.5rem");
      setF("0.5rem");
    } else if (sizeNumb >= 32 && sizeNumb < 64) {
      setP("1rem 0.5rem");
      setF("1rem");
    } else if (sizeNumb >= 64 && sizeNumb < 100) {
      setP("2rem 1rem");
      setF("1.5rem");
    } else if (sizeNumb >= 100) {
      setP("3rem 1rem");
      setF("2rem");
    }
  }, [size]);

  useEffect(() => {
    // TODO: look closer into this approach
    let ch = "generic";
    // Polkadot
    if (address) {
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
    } else {
      ch = "polkadot";
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
    const deactiveColors = new Array<string>(circleXy.length).fill(
      "var(--background-invert)"
    );

    setXy(circleXy);
    setColors(
      isValidAddress(address)
        ? initialColors || getColors(address) || defaultColors
        : deactiveColors
    );
  }, [address]);

  const handleClick = useCallback(() => {
    const copyText = async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        setCopySuccess(true);
        setMessage("Copied!");
      } catch (err) {
        setCopySuccess(true);
        setMessage("Failed!");
      }
    };
    copy && copyText(address);
  }, [copy, address]);

  useEffect(() => {
    if (copy && copySuccess) {
      setTimeout(() => {
        setCopySuccess(false);
      }, copyTimeout);
    }
  }, [copy, copySuccess]);

  return (
    xy && (
      <div
        onClick={copy ? handleClick : undefined}
        style={
          copy
            ? {
                cursor: copySuccess ? "none" : "copy",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }
            : {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }
        }
      >
        <svg
          viewBox="0 0 64 64"
          id={address}
          name={address}
          width={s}
          height={s}
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
        {copy && (
          <AnimatePresence>
            {copySuccess && (
              <motion.div
                variants={copyPopup}
                initial={"initial"}
                animate={"animate"}
                exit={"exit"}
                style={{
                  position: "absolute",
                  padding: p,
                  borderRadius: "100%",
                  backgroundColor: "var(--background-default)",
                  fontWeight: "bold",
                }}
              >
                <p style={{ fontSize: f, fontWeight: "bold" }}>{message}</p>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    )
  );
};
