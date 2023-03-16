import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">1</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">1</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Leucanthemum_vulgare_%27Filigran%27_Flower_2200px.jpg/1126px-Leucanthemum_vulgare_%27Filigran%27_Flower_2200px.jpg" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
