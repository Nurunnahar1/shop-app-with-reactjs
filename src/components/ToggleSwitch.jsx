
import "./ToggleSwitch.css";
const ToggleSwitch = () => {
  return (
    <>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </>
  );
};

export default ToggleSwitch;
