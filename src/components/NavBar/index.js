import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const NavBar = () => {
  return (
    <div className="home-section" id="home-section">
      <div className="home-content">
        <div className="overview-boxes">
          <div className="box">
            <div className="right-side">
              <div className="box-topic">World</div>
            </div>
            <KeyboardArrowDownIcon className="cart" />
          </div>

          <div className="box">
            <div className="right-side">
              <div className="box-topic">Following</div>
            </div>
            <KeyboardArrowDownIcon className="cart" />
          </div>

          <div className="box">
            <div className="right-side">
              <div className="box-topic">Popular</div>
            </div>
            <KeyboardArrowDownIcon className="cart" />
          </div>

          <div className="box">
            <div className="right-side">
              <div className="box-topic">Post</div>
            </div>
            <KeyboardArrowDownIcon className="cart" />
          </div>

          <div className="box">
            <div className="right-side">
              <div className="box-topic">Gender</div>
            </div>
            <KeyboardArrowDownIcon className="cart" />
          </div>

          <div className="box">
            <div className="right-side">
              <div className="box-topic">Location</div>
            </div>
            <KeyboardArrowDownIcon className="cart" />
          </div>

          <div className="box">
            <div className="right-side">
              <div className="box-topic">Profession</div>
            </div>
            <KeyboardArrowDownIcon className="cart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
