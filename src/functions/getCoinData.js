import axios from "axios";

export const geetCoinData = (id)=>{
   const coinData =  axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((response) => {
      console.log("RESPONSE>>>", response.data);
      return response.data
    })
    .catch((error) => {
      console.log("ERROR>>>", error);
    });
    if(coinData)return coinData;
    return;
    
}