/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { useRef, useEffect } from "react";
import "./index.scss";
import { drawDots, drawHex } from "./fns";

interface Props {
  account: string;
  side?: number;
  type?: "dots" | "hexagon" | "space";
  animate?: boolean;
  copy?: boolean;
}

export const Polkicon = ({
  account,
  side = 200,
  type = "dots",
  copy = true,
}: Props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas: HTMLCanvasElement = canvasRef.current;
    canvas.style.background = "#343434";
    canvas.height = innerWidth;
    canvas.width = innerWidth;
    const context: CanvasRenderingContext2D = canvas.getContext("2d");

    if (type === "dots") {
      const sizeX = side / 2;
      const sizeY = side / 2;
      canvas.height = innerWidth / 5;
      canvas.width = innerWidth / 5;
      drawDots(context, sizeX, sizeY);
    } else if (type === "hexagon") {
      //hexagon
      canvas.height = innerWidth / 10;
      canvas.width = innerWidth / 10;
      drawHex(0, 0, side, context);
    }
  }, [drawDots, drawHex]);

  console.log("ref", canvasRef.current);
  return (
    <div
      className={`${copy && "copyable"} fit`}
      onClick={
        copy
          ? () => {
              navigator.clipboard.writeText(account);
            }
          : null
      }
    >
      <canvas
        style={{ border: `0.5rem solid #999` }}
        ref={canvasRef}
        className="mask"
        width={side || "100"}
        height={side || "100"}
      ></canvas>
    </div>
  );
};
