import React from "react";
import "../../App.css";
import ViewAgendaIcon from "@mui/icons-material/ViewAgenda";
import Icon from "@mui/material/Icon";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="logo-details">
        <ViewAgendaIcon
          style={{
            fontSize: "28px",
            fontWeight: 500,
            color: "#3c0e66",
            minWidth: "60px",
            textAlign: "center",
          }}
        />
        <span className="logo_name">bluecode</span>
      </div>
      <ul className="nav-links">
        <li>
          <a href="https://github.com/dolahimself" className="active">
            <Icon
              className="links_icon"
              sx={{ fontSize: 22, color: "#a6a6a6" }}
            >
              home
            </Icon>
            <span className="links_name">Home</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/dolahimself">
            <Icon
              className="links_icon"
              sx={{ fontSize: 25, color: "#a6a6a6" }}
            >
              message
            </Icon>
            <span className="links_name">Message</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/dolahimself">
            <Icon
              className="links_icon"
              sx={{ fontSize: 25, color: "#a6a6a6" }}
            >
              equalizer
            </Icon>
            <span className="links_name">Ranking</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/dolahimself">
            <Icon
              className="links_icon"
              sx={{ fontSize: 25, color: "#a6a6a6" }}
            >
              stream
            </Icon>
            <span className="links_name">Challenge</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/dolahimself">
            <Icon
              className="links_icon"
              sx={{ fontSize: 25, color: "#a6a6a6" }}
            >
              surfing
            </Icon>
            <span className="links_name">Party</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/dolahimself">
            <Icon
              className="links_icon"
              sx={{ fontSize: 25, color: "#a6a6a6" }}
            >
              account_tree
            </Icon>
            <span className="links_name">Connect</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/dolahimself">
            <Icon
              className="links_icon"
              sx={{ fontSize: 25, color: "#a6a6a6" }}
            >
              accessibility
            </Icon>
            <span className="links_name">Parade</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/dolahimself">
            <Icon
              className="links_icon"
              sx={{ fontSize: 25, color: "#a6a6a6" }}
            >
              groups
            </Icon>
            <span className="links_name">Group</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
