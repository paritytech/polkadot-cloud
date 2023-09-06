import "@polkadot-cloud/core/css/base/inputs/Switch/index.css";

export const Switch = () => {
  return (
    <>
      <input
        className="base-inputs-switch-checkbox"
        id={`base-inputs-switch-new`}
        type="checkbox"
      />
      <label
        className="base-inputs-switch-label"
        htmlFor={`base-inputs-switch-new`}
      >
        <span className={`base-inputs-switch-button`} />
      </label>
    </>
  );
};
