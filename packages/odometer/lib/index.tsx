import { type HTMLProps, useEffect, useRef, type FC } from "react";
import Odometer from "odometer";

export interface ReactOdometerProps extends HTMLProps<HTMLDivElement> {
  /**
   * Count is a simpler animation method which just increments the value, use it when you're looking for something more
   * subtle.
   */
  animation?: "count";
  /**
   * Change how long the javascript expects the CSS animation to take.
   * @default 2000
   */
  duration?: number;
  format?: string;
  /**
   * Specify the theme (if you have more than one theme css file on the page).
   * Will add CSS class .odometer-theme-{prop value} to wrapper `div`.
   */
  theme?: string;
  /**
   * Current value. Change it to run animation.
   */
  value: number;
}

export const ReactOdometer: FC<ReactOdometerProps> = ({ duration, value }) => {
  const node = useRef<HTMLDivElement>(null);
  const odometer = useRef<any>();

  useEffect(() => {
    odometer.current = new Odometer({
      el: node.current,
      value,
      duration,
      format: "",
      theme: "minimal",
    });
  }, []);

  useEffect(() => {
    odometer.current?.update(value);
  }, [value]);

  return <div ref={node} />;
};
