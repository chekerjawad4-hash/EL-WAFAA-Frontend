import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMarkets } from "../services/http";
import "../styles/Markets.css";

function Markets(){

  const [coins,setCoins]=useState([]);
  const [search,setSearch]=useState("");

  useEffect(()=>{
    loadMarkets();
    const timer=setInterval(loadMarkets,2000);
    return ()=>clearInterval(timer);
  },[]);

  async function loadMarkets(){

    const data=await getMarkets();

    if(data?.success){

      const sorted=[...data.markets].sort(
        (a,b)=>Number(b.volume)-Number(a.volume)
      );

      setCoins(sorted);

    }

  }

  const filtered=coins.filter(c=>
    c.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return(

    <div className="markets-page">

      <h1>📊 الأسواق</h1>

      <input
        className="search"
        placeholder="بحث عن عملة..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />

      <div className="market-list">

        {filtered.map((coin,index)=>{

          const positive=Number(coin.change24h)>=0;

          return(

            <Link
              key={index}
              to={`/trade-new?symbol=${coin.symbol}`}
              className="market-card"
            >

              <div>

                <h3>{coin.symbol}</h3>

                <p>
                  {Number(coin.price).toLocaleString(undefined,{maximumFractionDigits:12})}
                  {" "}USDT
                </p>

              </div>

              <span
                className={
                  positive
                  ? "positive"
                  : "negative"
                }
              >
                {positive?"+":""}
                {(Number(coin.change24h)*100).toFixed(2)}%
              </span>

            </Link>

          );

        })}

      </div>

    </div>

  );

}

export default Markets;
