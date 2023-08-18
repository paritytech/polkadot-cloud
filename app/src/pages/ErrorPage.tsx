import { useGlitch } from "react-powerglitch";
import { ReactComponent as IconSVG } from "../svg/icon.svg";

export const ErrorPage = () => {
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
      <div className="oops" style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
        Oops!
      </div>
      <div>You are not supposed to be here.</div>
      <a href="/">Go back!</a>
    </div>
  );
};
