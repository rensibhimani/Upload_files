import React from "react";
import "./first.css";
import logo from "./images/logo.png";
import Button from "react-bootstrap/Button";
import { HiDotsHorizontal } from "react-icons/hi";

const Start = () => {
  return (
    <>
      <div class="app">
        <div class="form">
          <div id="dot">
            <HiDotsHorizontal />
          </div>
          <h2 className="header">FastByte</h2>
          <Button className="btn" variant="warning">
            Receiver
          </Button>
        <div className="">
        <a href="/upload">
          <img src={logo} alt="logo" />
        </a></div>
        </div>
<div className="click">
<label className="click">Press lightning bolt to Start</label>

</div>
        
      </div>
    </>
  );
};

export default Start;
