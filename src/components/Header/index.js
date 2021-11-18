import React, { useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { createApi } from "unsplash-js";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const unsplash = new createApi({
    accessKey: process.env.API_KEY,
  });

  async function searchPhotos() {
    try {
      await unsplash.search
        .getPhotos({
          query: searchText,
          page: 1,
          perPage: 10,
        })
        .then((data) => console.log(data.response.results));
    } catch (err) {
      throw err;
    }
  }

  return (
    <div className="home-section">
      <nav>
        <div className="search-box">
          <input
            type="text"
            placeholder="Find Something..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <i className="bx bx-search" onClick={searchPhotos}></i>
          {/* <SearchIcon className="search" onClick={searchPhotos} /> */}
        </div>
        <NotificationsIcon className="notification-bell" />
        <div className="profile-details">
          <img src="images/profile.jpg" alt="" />
          <span className="admin_name">Abigail</span>
          <KeyboardArrowDownIcon style={{ color: "#cccccc" }} />
        </div>
      </nav>
    </div>
  );
};

export default Header;
