import React, { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";
import Button from "../components/Common/Button/Button";
import Header from "../components/Common/Header";
import Tabs from "../components/Dashboard/Tabs/Tabs";
import { get100Coins } from "../functions/get100Coins";

const WishList = () => {
  const coins = JSON.parse(localStorage.getItem("watchlist"));
  const [myWatchlist, setMyWatchlist] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    console.log("COINS>>>", coins);
    const allCoins = await get100Coins();
    console.log("ALLCOINS>>>", allCoins);
    if (coins) {
      setMyWatchlist(allCoins.filter((item) => coins.includes(item.id)));
    }
    setLoading(false);
  };

  return (
    <div>
      {loading || !coins ? (
        <Loader />
      ) : (
        <>
          {myWatchlist?.length == 0 || !coins ? (
            <div style={{ minHeight: "90vh" }}>
              <Header />
              <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
                No Items in the Watchlist
              </h1>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <a href="/dashboard">
                  <Button text={"Dashboard"} />
                </a>
              </div>
            </div>
          ) : (
            <>
              <Header />
              <Tabs coins={myWatchlist} isWatchlistPage={true} />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default WishList;
