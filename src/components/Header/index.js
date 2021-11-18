import React, { useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { createApi } from "unsplash-js";

const Header = (props) => {
  const { setSearchResults } = props;
  const [searchText, setSearchText] = useState("");

  const unsplash = new createApi({
    accessKey: "ikCcOOSUO28c0x8ec48KC1DZdT5GckI6VET5hJoYKpw",
  });

  async function searchPhotos() {
    try {
      await unsplash.search
        .getPhotos({
          query: searchText,
          page: 1,
          perPage: 10,
        })
        .then((data) => setSearchResults(data.response.results));
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
