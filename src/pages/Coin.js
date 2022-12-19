import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoinInfo from "../components/Coin/CoinInfo";
import Header from "../components/Common/Header";
import List from "../components/Dashboard/List/List";
import LineChart from "../components/LineChart/LineChart";

import Loader from "../components/Loader/Loader";
import SelectDays from "../components/SelectDays/SelectDays";
import { coinObject } from "../functions/coinObject";
import { convertDate } from "../functions/convertDate";

const Coin = () => {
  const { id } = useParams();
  const [coinData, setCoinData] = useState();
  const [coin, setCoin] = useState();
  const [loading, setLoading] = useState(false);
  const [days, setDays] = useState(120);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  const handleDaysChange = async (event) => {
    setDays(event.target.value);
    getPrices(event.target.value)
    }


  useEffect(() => {
    getData();
  }, [id]);

  const getData = () => {
    setLoading(true);
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((response) => {
        console.log("RESPONSE>>>", response.data);
        setCoinData(response.data);
        setLoading(false);
        getPrices(days) 
        coinObject(setCoin, response.data)
      })
      .catch((error) => {
        console.log("ERROR>>>", error);
        setLoading(false);
      });
  };
  const getPrices = (days) => {
    setLoading(false);
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
      )
      .then((response) => {
        console.log("PRICES>>>>", response.data.prices);
        setChartData({
          labels: response.data.prices.map((data) => convertDate(data[0])),
          datasets: [
            {
              label: coin?.name ?? "",
              data: response.data.prices.map((data) => data[1]),
              borderWidth: 1.5,
              fill: true,
              tension: 0.25,
              backgroundColor: "rgba(53, 177, 206,0.2)",
              borderColor: "#35b1ce",
              pointRadius: 0,
            },
          ],
        });
      })
      .catch((error) => {
        console.log("ERROR>>>", error);
        setLoading(false);
      });
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
            <SelectDays days={days} handleDaysChange={handleDaysChange
            }/>
            <LineChart chartData={chartData} />
          </div>

          <CoinInfo name={coin.name} desc={coin.desc} />
        </>
      )}
    </div>
  );
}

export default Coin;
