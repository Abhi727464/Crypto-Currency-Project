import React from "react";
import Button from "../Button/Button";
import MobileDrawer from "./Drawer";

import "./style.css";
const Header = () => {
  return (
    <div className="header">
      <h1>
        CryptoMania <span style={{ color: "var(--blue)" }}>.</span>
      </h1>
      <div className="links-flex">
        <a href="/">
          <p className="link">Home</p>
        </a>
        <a href="/compare">
          <p className="link">Compare</p>
        </a>
        <a href="/watchlist">
          <p className="link">Watchlist</p>
        </a>
        <a href="/dashboard">
          <Button text="Dashboard" onClick={() => console.log("btn clicked")} />
        </a>
      </div>
      <MobileDrawer />
    </div>
  );
};

export default Header;
