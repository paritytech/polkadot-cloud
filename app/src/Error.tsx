import { useGlitch } from "react-powerglitch";
import "./styles/app.scss";
import IconSVG from "./svg/icon.svg?react";

export const Error = () => {
  const glitch = useGlitch({
    timing: {
      duration: 5000,
    },
    glitchTimeSpan: {
      start: 0.5,
      end: 0.65,
    },
    shake: {
      velocity: 2,
      amplitudeX: 0.2,
      amplitudeY: 0.2,
    },
  });

  return (
    <div className="error-page">
      <div className="icon" ref={glitch.ref}>
        <IconSVG />
      </div>
      <h2 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Oops!</h2>
      <h4>Something went wrong! You are not supposed to be here.</h4>
      <a href="/">Go Back</a>
    </div>
  );
};
