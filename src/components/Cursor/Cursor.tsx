import "./styles.css";

const Cursor = ({ hidden = false }) => {
  return <span className={`cursorBlink ${hidden ? "hidden" : ""}`}>|</span>;
};

export { Cursor };
