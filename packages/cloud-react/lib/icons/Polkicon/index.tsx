/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { useRef, useEffect, useState } from "react";
import "./index.scss";
import { drawDots, drawHex, drawSpace } from "./fns";

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
  animate = true,
  copy = true,
}: Props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [cursor, setCursor] = useState({
    x: innerWidth / 2,
    y: innerHeight / 2,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMouseMove = (ev: { pageX: any; pageY: any }) => {
    console.log("ev.page", ev.pageX, ev.pageY);
    setCursor({ x: ev.pageX, y: ev.pageY });
  };

  useEffect(() => {
    const canvas: HTMLCanvasElement = canvasRef.current;
    canvas.height = innerWidth;
    canvas.width = innerWidth;
    const context: CanvasRenderingContext2D = canvas.getContext("2d");
    let animationFrameId;

    canvas.style.background = "#c9c9c9";
    if (type === "dots") {
      const sizeX = side / 2;
      const sizeY = side / 2;
      canvas.height = innerWidth / 2;
      canvas.width = innerWidth / 2;
      drawDots(context, sizeX, sizeY);
    } else if (type === "hexagon") {
      //hexagon
      canvas.height = innerWidth / 5;
      canvas.width = innerWidth / 5;
      drawHex(0, 0, side, context);
    } else {
      // animate

      const particlesArray = drawSpace(context, cursor);

      // setSize(canvas);

      const anim = () => {
        requestAnimationFrame(anim);

        context.fillStyle = "rgba(0,0,0,0.05)";
        context.fillRect(0, 0, canvas.width, canvas.width);

        particlesArray.forEach((particle) => particle());
      };

      animationFrameId = window.requestAnimationFrame(anim);
      anim();
    }
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [drawDots, drawHex, cursor]);

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
        onMouseMove={(ev) => animate && handleMouseMove(ev)}
        style={{ border: `0.5rem solid #999` }}
        ref={canvasRef}
        className="mask"
        width={side || "100"}
        height={side || "100"}
      ></canvas>
    </div>
  );
};
