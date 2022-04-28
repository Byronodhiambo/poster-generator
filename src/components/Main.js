import React from "react";

import Data from "../components/Data";

export default function Main() {
  const [poster, setImage] = React.useState({
    topText: "",
    bottomText: "",
    image: "images/poster1.jpg",
  });

  function getImage() {
    const randomNum = Math.floor(Math.random() * Data.length);
    const img = Data[randomNum].url;
    setImage((prevPoster) => ({ ...prevPoster, image: img }));
    // Data[Math.floor(Math.random() * Data.length)].url
  }

  // const [array, setArray] = React.useState([
  //   "michael 1",
  //   "michael 2",
  //   "michael 3",
  // ]);

  // function append() {
  //   setArray((prevArray) => [...prevArray, `michael ${array.length}`]); //Spread syntax (...)
  // }

  // function append() {
  //   const newAItem = `michael ${array.length + 1}`;
  //   array.push(newAItem);
  //   console.log(array);
  // }
  // const [count, setCount] = React.useState(0);
  // function add() {
  //   setCount(function (prevCount) {
  //     return prevCount + 1;
  //   });
  // }
  // function subtract() {
  //   setCount((prevCount) => prevCount - 1);
  // }

  return (
    <div className="main">
      <div className="form">
        <input className="inputs" type="text" placeholder="title "></input>
        <input className="inputs" type="text" placeholder="content"></input>
        <button onClick={getImage} className="button">
          Generate Poster
        </button>
      </div>

      <img className="poster" src={poster.image} />
      {/* <button onClick={append}>{array}</button> */}

      {/* <br></br>
      <div>
        <button onClick={subtract}>-</button>
        <div>
          <h1>{count}</h1>
        </div>
        <button onClick={add}>+</button>
      </div> */}
    </div>
  );
}
