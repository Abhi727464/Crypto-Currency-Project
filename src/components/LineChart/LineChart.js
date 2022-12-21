import React from "react";
import "./style.css";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { convertNumbers } from "../../functions/convertNumbers";

const LineChart = ({ chartData, priceType}) => {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      y: {
        ticks: {
          callback: function (value) {
            if(priceType=="total_volumes"){
              return convertNumbers(value);
            }
            else if(priceType=="market_caps"){
              return "$" + convertNumbers(value);
            }
            else{
              return "$" + value.toLocaleString();
            }
            
          },
        },
      },
    },
  };
  return <Line data={chartData} options={options} />;
};

export default LineChart;
