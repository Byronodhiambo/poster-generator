import React from "react";
import logo from "../images/logo.jpg";

export default function Header() {
  return (
    <>
      <nav className="nav">
        <img src={logo} className="logo" />
        <div className="tittle">
          <h2>Poster Maker</h2>
        </div>
        <div className="side-title">
          <h3>Your best event partner</h3>
        </div>
      </nav>
    </>
  );
}
