import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Common/Header";
import List from "../components/Dashboard/List/List";

import Loader from "../components/Loader/Loader";
import { coinObject } from "../functions/coinObject";

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
        setCoin({
          id: response.data.id,
          name: response.data.name,
          symbol: response.data.symbol,
          image: response.data.image.large,
          desc: response.data.description.en,
          price_change_percentage_24h:
            response.data.market_data.price_change_percentage_24h,
          total_volume: response.data.market_data.total_volume.usd,
          current_price: response.data.market_data.current_price.usd,
          market_cap: response.data.market_data.market_cap.usd,
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
          <List coin={coin} delay={0.1} />
        </>
      )}
    </div>
  );
};

export default Coin;
