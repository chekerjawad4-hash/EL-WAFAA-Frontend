import { useState,useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import LivePrice from "../components/trade/LivePrice";
import TradingChart from "../components/trade/TradingChart";
import LiveOrderBook from "../components/trade/LiveOrderBook";
import RecentTrades from "../components/trade/RecentTrades";
import BuySellPanel from "../components/trade/BuySellPanel";
import WalletBox from "../components/trade/WalletBox";

import "../styles/Trade.css";


function Trade(){

const [searchParams]=useSearchParams();
const symbolFromUrl=searchParams.get("symbol") || "BTCUSDT";

const [pair,setPair]=useState(symbolFromUrl);
const [markets,setMarkets]=useState([]);
const [search,setSearch]=useState("");


useEffect(()=>{

fetch("https://el-wafaa-backend.onrender.com/api/markets")
.then(res=>res.json())
.then(data=>{
setMarkets(data.markets.map(m=>m.symbol));
})
.catch(err=>console.log(err));

},[]);


console.log("BINANCE MARKETS:", markets.length);
const filteredMarkets = markets.filter(item =>
item.toLowerCase().includes(search.toLowerCase())
);


return(

<div className="binance-layout">

<header className="top-bar">

<div>
<h2>{pair}</h2>
<LivePrice symbol={pair}/>
</div>

<div className="stats">
<span>24h Change</span>
<span>High</span>
<span>Low</span>
<span>Volume</span>
</div>

</header>


<div className="main-area">


<aside className="market-list">

<h3>Markets ({filteredMarkets.length})</h3>
<p>{markets.length} coins loaded</p>

<input
placeholder="Search..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>


{filteredMarkets.slice(0,200).map(item=>(

<div
className="market-row"
key={item}
onClick={()=>setPair(item)}
>
{item}
</div>

))}


</aside>



<section className="center-panel">

<div className="chart-container">

<TradingChart symbol={pair}/>

</div>


<div className="bottom-trade">
<BuySellPanel pair={pair} />
</div>




</section>



<aside className="right-panel">

<div className="orderbook">
<LiveOrderBook symbol={pair}/>
</div>


<div className="recent">
<RecentTrades symbol={pair}/>
</div>

<div className="wallet">
<WalletBox/>
</div>


</aside>


</div>

</div>

)

}


export default Trade;
