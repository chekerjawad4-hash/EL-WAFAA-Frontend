import { useEffect, useState } from "react";
import "./TradeHeader.css";

function TradeHeader({ pair, onOpen }){

  const [market,setMarket] = useState(null);

  useEffect(()=>{

    async function loadMarket(){

      const res = await fetch(
        "https://el-wafaa-backend.onrender.com/api/markets"
      );

      const data = await res.json();

      if(data.success){

        const symbol = pair.replace("/","");

        const found = data.markets.find(
          m => m.symbol === symbol
        );

        setMarket(found);

      }

    }

    loadMarket();

    const timer = setInterval(loadMarket,10000);

    return ()=>clearInterval(timer);

  },[pair]);


  return(
    <div className="trade-header">

      <div className="pair">

        <button
          className="pair-button"
          onClick={onOpen}
        >
          {pair} ▼
        </button>

        <div className={market?.change >= 0 ? "change positive" : "change negative"}>
          {market ? `${market.change}%` : "..."}
        </div>

        <div className="price">
          {market ? market.price : "..."} USDT
        </div>

      </div>


      <div className="market-stats">

        <div className="stat">
          <span>السعر</span>
          <strong>
            {market ? market.price : "..."}
          </strong>
        </div>

        <div className="stat">
          <span>التغير</span>
          <strong>
            {market ? market.change+"%" : "..."}
          </strong>
        </div>

        <div className="stat">
          <span>السوق</span>
          <strong>LIVE</strong>
        </div>

      </div>

    </div>
  );

}

export default TradeHeader;
