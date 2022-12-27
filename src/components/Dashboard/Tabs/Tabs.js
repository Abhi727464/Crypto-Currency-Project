import React from "react";
import "./style.css";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme, ThemeProvider } from "@mui/material";
import Grid from "../Grid/Grid";
import List from "../List/List";
import Button from "../../Common/Button/Button";
const Tabs = ({ coins, isWatchlistPage, setSearch }) => {
  const [value, setValue] = React.useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#23BDE0",
      },
    },
  });

  const style = {
    color: "var(--white)",
    width: "50vw",
    fontSize: "1.2rem",
    fontWeight: 600,
    fontFamily: "Inter",
    textTransform: "capitalize",
  };
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box>
            <TabList variant="fullWidth" onChange={handleChange}>
              <Tab label="Grid" value="grid" sx={style} />
              <Tab label="List" value="list" sx={style} />
            </TabList>
          </Box>
          <TabPanel value="grid" className="tabPanel">
            <div className="grid-flex">
              {coins.length == 0 ? (
                <div>
                  <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
                    No Items Found
                  </h1>
                  <br />
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      text={"Clear Search"}
                      onClick={(e) => {
                        setSearch("");
                      }}
                    />
                  </div>
                </div>
              ) : (
                coins.map((coin, i) => (
                  <Grid
                    coin={coin}
                    key={i}
                    delay={((i + 4) % 4) * 0.1}
                    isWatchlistPage={isWatchlistPage}
                  />
                ))
              )}
            </div>
          </TabPanel>
          <TabPanel value="list" className="tabPanel">
            <table className="list-flex">
              {coins.length == 0 ? (
                <div>
                  <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
                    No Items Found
                  </h1>
                  <br />
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      text={"Clear Search"}
                      onClick={(e) => {
                        setSearch("");
                      }}
                    />
                  </div>
                </div>
              ) : (
                coins.map((coin, i) => (

                    <List
                      coin={coin}
                      key={i}
                      delay={(i % 6) * 0.1}
                      isWatchlistPage={isWatchlistPage}
                    />
                ))
              )}
            </table>
          </TabPanel>
        </TabContext>
      </Box>
    </ThemeProvider>
  );
};

export default Tabs;
