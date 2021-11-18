import React from "react";
import Icon from "@mui/material/Icon";
import "../../App.css";

const SideItem = (props) => {
  const { iconName, name } = props;
  return (
    <div>
      <Icon
        className="sidebar-item-icon"
        sx={{ fontSize: 25, color: "#a6a6a6" }}
      >
        {iconName ? iconName : ""}
      </Icon>
      <p className="links_name">{name ? name : ""}</p>
    </div>
  );
};

export default SideItem;
