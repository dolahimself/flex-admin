import React from "react";
import "../../App.css";
import Header from "../Header";
import NavBar from "../NavBar";
import PictureBody from "../PictureBody";

const MainBody = () => {
  return (
    <div className="main-body">
      <Header />
      <NavBar />
      <PictureBody />
    </div>
  );
};

export default MainBody;
