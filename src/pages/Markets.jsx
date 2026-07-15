import { Link } from "react-router-dom";
import "../styles/Markets.css";

function Markets(){

  const coins = [
    {name:"BTC/USDT", price:"118350", change:"+2.4%"},
    {name:"ETH/USDT", price:"3200", change:"+1.8%"},
    {name:"BNB/USDT", price:"690", change:"+3.1%"},
    {name:"DZC/USDT", price:"0.12", change:"+5.6%"}
  ];

  return(

    <div className="markets-page">

      <h1>📊 الأسواق</h1>

      <input
        className="search"
        placeholder="بحث عن عملة..."
      />

      <div className="market-list">

        {coins.map((coin,index)=>(

          <Link to="/trade" className="market-card" key={index}>

            <h3>{coin.name}</h3>

            <p>{coin.price} USDT</p>

            <span>{coin.change}</span>

          </Link>

        ))}

      </div>

    </div>

  );

}

export default Markets;
