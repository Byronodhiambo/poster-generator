import React from "react";

export default function Box(props) {
  const [status, setStatus] = React.useState(props.on);
  function changeOn() {
    setStatus((status) => !status);
  }
  const styles = {
    backgroundColor: status ? "#222222" : "transparent",
  };
  return (
    <>
      <div className="box" style={styles} onClick={changeOn}></div>
    </>
  );
}
