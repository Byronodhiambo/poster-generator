import React from "react";
import poster from "../images/poster1.jpg";

import Data from "../components/Data";

export default function Main() {
  const image = Data[Math.floor(Math.random() * Data.length)].url;
  function changeImage() {
    const image = Data[Math.floor(Math.random() * Data.length)].url;
    console.log(image);
  }

  const array = ["michael 1", "michael 2", "michael 3"];

  function append() {
    const newAItem = `michael ${array.length + 1}`;
    array.push(newAItem);
    console.log(array);
  }

  return (
    <div className="main">
      <div className="form">
        <input className="inputs" type="text" placeholder="title "></input>
        <input className="inputs" type="text" placeholder="content"></input>
        <button onClick={changeImage} className="button">
          Generate Poster
        </button>
      </div>

      <img className="poster" src={image} />

      <button onClick={append}>click</button>
    </div>
  );
}
