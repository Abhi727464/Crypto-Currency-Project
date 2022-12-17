import { getAccordionDetailsUtilityClass } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import Search from "../components/Dashboard/Search/Search";
import Tabs from "../components/Dashboard/Tabs/Tabs";
import Loader from "../components/Loader/Loader";
// import BackToTop from '../components/Common/BackToTop'
import TopButton from "../components/Common/BackToTop/BackToTop";
import Pagination from "../components/Dashboard/Pagination/Pagination";
import PaginationComponent from "../components/Dashboard/Pagination/Pagination";

const DashboardPage = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState([]);
  const onChange = (e) => setSearch(e.target.value);
  useEffect(() => {
    getData();
  }, []);

  var filteredCoins = coins.filter((coin) => {
    if (
      coin.name.toLowerCase().includes(search) ||
      coin.symbol.toLowerCase().includes(search)
    ) {
      return coin;
    }
  });
  const getData = () => {
    setLoading(true);
    //Call the API and get the data here
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          setCoins(response.data);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log("ERROR>>>", error);
      });
  };
  return (
    <>
     <TopButton/>
      {loading ? (
        <><Loader/></>
      ) : (
        <div>
          <Header />
          <Search search={search} onChange={onChange} />
          <Tabs coins={search ? filteredCoins : coins} />
          <PaginationComponent/>
         
        </div>
      )}
    </>
  );
};

export default DashboardPage;
