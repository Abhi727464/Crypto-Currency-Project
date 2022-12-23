// import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoinInfo from "../components/Coin/CoinInfo";
import PriceToggle from "../components/Coin/PriceToggle/PriceToggle";
import Header from "../components/Common/Header";
import List from "../components/Dashboard/List/List";
import LineChart from "../components/LineChart/LineChart";

import Loader from "../components/Loader/Loader";
import SelectDays from "../components/SelectDays/SelectDays";
import { coinObject } from "../functions/coinObject";
// import { convertDate } from "../functions/convertDate";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import { settingChartData } from "../functions/settingChartData";

const Coin = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const [loading, setLoading] = useState(false);
  const [days, setDays] = useState(120);
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  const handleDaysChange = async (event) => {
    setDays(event.target.value);
    // getPrices(event.target.value)
    const prices = await getCoinPrices(id, event.target.value,priceType);
    if (prices) {
      settingChartData(setChartData, prices,coin);
    }
  };

  const handlePriceTypeChange = async (event) => {
    setPriceType(event.target.value);
    const prices = await getCoinPrices(id, days, event.target.value);
    if (prices) {
      settingChartData(setChartData, prices,coin);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  const getData = async () => {
    setLoading(true);
    const data = await getCoinData(id);
    if (data) {
      setLoading(false);
      coinObject(setCoin, data); //for coin object being passed in the list
      const prices = await getCoinPrices(id, days,priceType);
      if (prices) {
        settingChartData(setChartData, data, prices);
        setLoading(false);
      }
    }
  };

  return (
    <div>
      {loading || !coin?.id ? (
        <Loader />
      ) : (
        <>
          <Header />
          <div className="gray-wrapper">
            <List coin={coin} delay={0.1} />
          </div>
          <div className="gray-wrapper">
            <SelectDays days={days} handleDaysChange={handleDaysChange} />
            <PriceToggle
              handlePriceTypeChange={handlePriceTypeChange}
              priceType={priceType}
            />
            <LineChart chartData={chartData} priceType={priceType}/>
          </div>

          <CoinInfo name={coin.name} desc={coin.desc} />
        </>
      )}
    </div>
  );
};

export default Coin;
