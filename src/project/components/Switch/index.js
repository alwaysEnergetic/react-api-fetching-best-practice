import React, { useEffect } from "react";
import Switch from "@material-ui/core/Switch";

export default function Switches(props) {
  const { onChange, name, value } = props;
  const [state, setState] = React.useState({
    checked: value,
  });

  const handleChange = (event) => {
    onChange({
      [event.target.name]: event.target.checked,
      open: event.target.checked,
    });
  };

  useEffect(() => {
    setState({ ...state, checked: value });
  }, [value]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Switch
        checked={state.checked}
        onChange={handleChange}
        color="primary"
        name={name}
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      {state.checked ? (
        <div>Enable</div>
      ) : (
        <div style={{ color: "gray" }}>Disable</div>
      )}
    </div>
  );
}
