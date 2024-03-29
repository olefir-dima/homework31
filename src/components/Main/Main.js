import React from "react";
import Description from "./Description";
import { Outlet } from "react-router-dom";
import Logo from "./Logo";
import "./Main.css";

function Main() {
  return (
    <div className="main">
      <div className="text-block">
        <Outlet />
      </div>
      <div className="logo-block">
        <Logo />
      </div>
    </div>
  );
}

export default Main;
