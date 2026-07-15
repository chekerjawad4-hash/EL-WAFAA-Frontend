import { useState, useEffect } from "react";

import FuturesHeader from "../components/mobiletrade/FuturesHeader";
import MobileTabs from "../components/mobiletrade/MobileTabs";

import TradingChart from "../components/trade/TradingChart";
import LiveOrderBook from "../components/trade/LiveOrderBook";
import OpenPositions from "../components/trade/OpenPositions";
import BuySellPanel from "../components/trade/BuySellPanel";

import BottomNav from "../components/mobiletrade/BottomNav";
import "../styles/mobiletrade/MobileTrade.css";

export default function MobileTrade(){

const [pair,setPair]=useState("BTCUSDT");
const [markets,setMarkets]=useState([]);
const [prices,setPrices]=useState([]);
const [favorites,setFavorites]=useState([]);
const [tab,setTab]=useState("chart");
const toggleFavorite=(symbol)=>{
if(favorites.includes(symbol)){
setFavorites(favorites.filter(x=>x!==symbol));
}else{
setFavorites([...favorites,symbol]);
}
};
const [search,setSearch]=useState("");
const [marketOpen,setMarketOpen]=useState(false);
const filteredMarkets=markets.filter(m=>m.toLowerCase().includes(search.toLowerCase()));

useEffect(()=>{
fetch("https://el-wafaa-backend.onrender.com/api/markets")
.then(res=>res.json())
.then(data=>{
console.log(data.markets.slice(0,5));
setMarkets(data.markets.filter(m=>m.quoteAsset==="USDT").map(m=>m.symbol));
fetch("https://el-wafaa-backend.onrender.com/api/prices")
.then(res=>res.json())
.then(data=>setPrices(data));
})
.catch(console.error);
},[]);


return(

<div className="mobile-trade">

<FuturesHeader/>

<div className="market-selector">
<button className="pair-button" onClick={()=>setMarketOpen(true)}>
{pair} ▼
</button>
</div>
<MobileTabs
tab={tab}
setTab={setTab}
/>

{marketOpen && (
<div className="market-modal">
<div className="market-box">
<input
type="text"
placeholder="Search..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>
<div className="market-list">
{filteredMarkets.map(symbol=>(
<div
key={symbol}
className="market-item"
onClick={()=>{setPair(symbol);setMarketOpen(false);}}
>
<div className="coin-row">
<button className="star-btn" onClick={(e)=>{e.stopPropagation();toggleFavorite(symbol)}}>
{favorites.includes(symbol) ? "⭐" : "☆"}
</button>
<div>{symbol}</div>
<div className="coin-price">
{prices.find(p=>p.symbol===symbol)?.price || "--"} USDT
</div>
<div className={prices.find(p=>p.symbol===symbol)?.change >= 0 ? "up" : "down"}>
{prices.find(p=>p.symbol===symbol)?.change || 0}%
</div>
</div>
</div>
))}
</div>
<button onClick={()=>setMarketOpen(false)}>Close</button>
</div>
</div>
)}
<div className="mobile-content">

{tab==="chart" && (
<TradingChart symbol={pair}/>
)}

{tab==="book" && (
<LiveOrderBook symbol={pair}/>
)}

{tab==="trades" && (
<OpenPositions/>
)}

<BottomNav/>
</div>

<div className="mobile-buy">

<BuySellPanel
userId={1}
/>

<BottomNav/>
</div>

<BottomNav/>
</div>

);

}
