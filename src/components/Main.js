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

  const [form, setForm] = React.useState({ title: "", content: "" });
  console.log(form);
  function changeForm(event) {
    setForm((prevForm) => {
      return {
        ...prevForm,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(form);
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
  //   array.push(newAItem);{/* <button onClick={append}>{array}</button> */}

  {
    /* <br></br>
      <div>
        <button onClick={subtract}>-</button>
        <div>
          <h1>{count}</h1>
        </div>
        <button onClick={add}>+</button>
      </div> */
  }
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
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="inputs"
          type="text"
          placeholder="title "
          name="title"
          value={form.title}
          onChange={changeForm}
        ></input>
        <input
          className="inputs"
          type="text"
          placeholder="content"
          name="content"
          value={form.content}
          onChange={changeForm}
        ></input>
        <button onClick={getImage} className="button">
          Generate Poster
        </button>
      </form>

      <div className="poster">
        <img className="poster-img" src={poster.image} />
        <h1 className="top">{form.title}</h1>
        <h1 className="bottom">{form.content}</h1>
      </div>

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
