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

  const [messages, setMessages] = React.useState(["a", "b"]);
  function changeMsg() {
    setMessages(["3", "uy", "rtre"]);
  }

  const box = boxes.map((box) => (
    <Box on={box.on} key={box.id} clickHandler={() => toogle(box.id)} />
  ));

  const [count, setcount] = React.useState(1);
  React.useEffect(() => console.log("hello"), []);

  return (
    <>
      {box}
      <div>
        <h3>
          {messages.length < 1 ? (
            <p> You are all caught up!</p>
          ) : (
            <p>
              you have {messages.length} unread{" "}
              {messages.length > 1 ? "messages" : "message"}
            </p>
          )}
        </h3>
        <button onClick={changeMsg}>set messages</button>
      </div>

      <h3>hello person {count}</h3>
      <button
        onClick={() => {
          setcount((prevCount) => (prevCount += 1));
        }}
      >
        Add
      </button>
    </>
  );
}
