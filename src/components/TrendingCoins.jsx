import "../styles/TrendingCoins.css";

function TrendingCoins(){

  const coins = [
    {name:"BTC", price:"118350 USDT", change:"+2.4%"},
    {name:"ETH", price:"3200 USDT", change:"+1.8%"},
    {name:"BNB", price:"690 USDT", change:"+3.1%"},
    {name:"DZC", price:"0.12 USDT", change:"+5.6%"}
  ];

  return(
    <section className="trending">

      <h2>🔥 العملات الرائجة</h2>

      <div className="coin-list">

        {coins.map((coin,index)=>(

          <div className="coin-card" key={index}>

            <h3>{coin.name}</h3>

            <p>{coin.price}</p>

            <span>{coin.change}</span>

          </div>

        ))}

      </div>

    </section>
  );

}

export default TrendingCoins;
