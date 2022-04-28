import React from "react";
import Box from "../components/Box";
import Boxes from "../components/Boxes";
export default function App(props) {
  const [boxes, setBoxes] = React.useState(Boxes);
  function toogle(id) {
    console.log(id);
    setBoxes((prevBox) => {
      return Boxes.map((box) => {
        return box.id === id ? { ...box, on: !box.on } : box;
      });
    });
  }

  const box = boxes.map((box) => (
    <Box on={box.on} key={box.id} clickHandler={() => toogle(box.id)} />
  ));

  return <>{box}</>;
}
