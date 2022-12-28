import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import MobileDrawer from "./Drawer";
import { createTheme, Switch, ThemeProvider } from "@mui/material";
import { toast } from "react-toastify";
import "./style.css";
const Header = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") == "dark" ? true : false
  );
  useEffect(() => {
    if (localStorage.getItem("theme") == "dark") {
      setDark();
    } else {
      setLight();
    }
  }, []);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#23BDE0",
      },
    },
  });

  const changeMode = () => {
    setDarkMode(!darkMode);
    toast.success("Theme Changed!");
    const mode = localStorage.getItem("theme");
    if (mode == "dark") {
      setLight();
    } else {
      setDark();
    }
  };

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  return (
    <div className="header">
      <h1>
        CryptoMania <span style={{ color: "var(--blue)" }}>.</span>
      </h1>
      <div className="links-flex">
        <ThemeProvider theme={theme}>
          <Switch
            checked={darkMode}
            onClick={() => {
              changeMode();
            }}
          />
        </ThemeProvider>

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
