import React from "react";
import Box from "../components/Box";
import Boxes from "../components/Boxes";
export default function App(props) {
  const [boxes, setBoxes] = React.useState([...Boxes]);

  const box = boxes.map((box) => <Box on={box.on} key={box.id} />);

  return <>{box}</>;
}
