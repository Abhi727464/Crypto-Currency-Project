import React, { useState } from "react";
import "./style.css";

const CoinInfo = ({ name, desc }) => {
  const [flag, setFlag] = useState(false);
  const smallDesc =
    desc.slice(0, 400) +
    "<p style='color:var(--grey); cursor:pointer;'>Read More...</p>";
  const fullDesc =
    desc + "<p style='color:var(--grey);cursor:pointer;'>Read Less...</p>";

  return ( 
    <div className="gray-wrapper">
      <h1 className="coin-heading">{name}</h1>
      <p 
       onClick={() => setFlag(!flag)}
       className="coin-para" dangerouslySetInnerHTML={{__html:flag ? fullDesc : smallDesc}}/>
    </div>
  );
};

export default CoinInfo;
