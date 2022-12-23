

import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import Search from "../components/Dashboard/Search/Search";
import Tabs from "../components/Dashboard/Tabs/Tabs";
import Loader from "../components/Loader/Loader";
import TopButton from "../components/Common/BackToTop/BackToTop";
import PaginationComponent from "../components/Dashboard/Pagination/Pagination";
import { get100Coins } from "../functions/get100Coins";

const DashboardPage = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const [pageNumber, setPageNumber] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const handlePageChange = (event, value) => {
    console.log(value);
    setPageNumber(value);
    var startingIndex = (value - 1) * 12;
    setPaginatedCoins(coins.slice(startingIndex, startingIndex + 12));
  };



  const onChange = (e) => setSearch(e.target.value);
  useEffect(() => {
    getData();
  }, []);

  var filteredCoins = coins.filter((coin) => {
    if (
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      
      coin.symbol.toLowerCase().includes(search.toLowerCase())
    ) 
      return coin;
  });
  const getData = async () => {
    setLoading(true);
    //Call the API and get the data here
    const data = await get100Coins();
    if(data){
      setCoins(data);
      setPaginatedCoins(data.slice(0,12));
      setLoading(false);
    }
  };
  return (
    <>
      <TopButton />
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <div>
          <Header />
          <Search search={search} onChange={onChange} />
          <Tabs coins={search ? filteredCoins : paginatedCoins} />
         {
          !search && (
            <PaginationComponent
            pageNumber={pageNumber}
            handleChange={handlePageChange}
          />
          )
         }
        </div>
      )}
    </>
  );
};

export default DashboardPage;
