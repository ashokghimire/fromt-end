import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import HomeIcon from "@material-ui/icons/Home";
import SignalCellular4BarIcon from "@material-ui/icons/SignalCellular4Bar";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/loginImage/network.jpg"

const Header = () => {
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <img src={logo} alt="NIDS"></img>
        </div>

        <div className="menu">
          <NavLink to="/" className="menu-list">
            <HomeIcon />
            <span>Home</span>
          </NavLink>
          <NavLink to="/network-log" className="menu-list">
            <SignalCellular4BarIcon />
            <span>Network Logs</span>
          </NavLink>
          <NavLink to="/visaulization" className="menu-list">
            <TrendingUpIcon /> <a>Visualisations</a>
          </NavLink>

          <NavLink to="/notification" className="menu-list">
            <NotificationsIcon /> <a>Notifications</a>
          </NavLink>

          <NavLink to="/sign-in" className="menu-list">
            <ExitToAppIcon />
            <a>Logout</a>
          </NavLink>
        </div>

        <div className="menu">
          <div className="social-media-desktop">
            <a href="https://www.facebook.com/" target="_facebook">
              <FaFacebookSquare className="facebook" />
            </a>
          </div>

          <div className="social-media-desktop">
            <a href="https://www.Instagram.com/" target="_instagram">
              <FaInstagramSquare className="instagram" color="ffa500" />
            </a>
          </div>

          <div className="social-media-desktop">
            <a href="https://www.youtube.com/" target="_youtube">
              <FaYoutubeSquare className="youtube" color="red" />
            </a>
          </div>
        </div>
      </nav>

      {/*Home*/}
    </>
  );
};

export default Header;
