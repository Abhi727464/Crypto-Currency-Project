import React from "react";
import "./style.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { convertNumbers } from "../../../functions/convertNumbers";
import { motion } from "framer-motion";
const List = ({ coin,delay }) => {
  return (
    <a href={`/coin/${coin.id}`}>
    <motion.tr
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: delay }}
    className="list-row">
      <td>
        <img src={coin.image} alt="" className="coin-image" />
      </td>
      <td className="td-info-flex">
        <div className="coin-name-flex">
          <h3 className="coin-symbol coin-symbol-list">{coin.symbol}</h3>
          <p className="coin-name coin-name-list">{coin.name}</p>
        </div>
      </td>
      <td>
        {coin.price_change_percentage_24h > 0 ? (
          <div className="info-flex" style={{ marginBottom: 0 }}>
            <div className="price-chip price-chip-list">
              {coin.price_change_percentage_24h.toFixed(2)} %
            </div>
            <TrendingUpRoundedIcon className="trending-icon trending-icon-list" />
          </div>
        ) : (
          <div className="info-flex" style={{ marginBottom: 0 }}>
            <div className="price-chip price-chip-list red">
              {coin.price_change_percentage_24h.toFixed(2)} %
            </div>
            <TrendingDownRoundedIcon className="trending-icon red trending-icon-list" />
          </div>
        )}
      </td>
      <td>
            <p
              className={`coin-price coin-price-list ${
                coin.price_change_percentage_24h < 0 && "coin-price-red"
              }`}
            >
              ${coin.current_price.toLocaleString()}
            </p>
          </td>
          <td className="td-mkt-cap">
            <span className="coin-total_volume">
              {coin.total_volume.toLocaleString()}
            </span>
          </td>
          <td className="td-mkt-cap">
            <span className="coin-total_volume">
              ${coin.market_cap.toLocaleString()}
            </span>
          </td>
          <td className="mobile-td-cap">
            <span className="coin-total_volume coin-total_volume-list">
              ${convertNumbers(parseInt(coin.market_cap))}
            </span>
          </td>
    </motion.tr>
    </a>
  );
};

export default List;
