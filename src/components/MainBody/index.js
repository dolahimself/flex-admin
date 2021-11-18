import React, { useState } from "react";
import "../../App.css";
import Header from "../Header";
import NavBar from "../NavBar";
import PictureBody from "../PictureBody";

const MainBody = () => {
  const [searchResults, setSearchResults] = useState([]);
  console.log(searchResults);
  return (
    <div className="main-body">
      <Header setSearchResults={setSearchResults} />
      <NavBar />
      <PictureBody searchResults={searchResults} />
    </div>
  );
};

export default MainBody;
