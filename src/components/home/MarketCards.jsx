import {useEffect,useState} from "react";
import {useNavigate} from "react-router-dom";
import {getMarkets,getCandles} from "../../services/api";
import "./MarketCards.css";
import Sparkline from "./Sparkline";

import btc from "cryptocurrency-icons/svg/color/btc.svg";
import eth from "cryptocurrency-icons/svg/color/eth.svg";
import bnb from "cryptocurrency-icons/svg/color/bnb.svg";
import sol from "cryptocurrency-icons/svg/color/sol.svg";

const icons={
BTCUSDT:btc,
ETHUSDT:eth,
BNBUSDT:bnb,
SOLUSDT:sol
};

const chartData={
BTCUSDT:[98,100,101,99,102,104,105],
ETHUSDT:[70,72,71,74,75,77,79],
BNBUSDT:[90,89,88,89,90,91,90],
SOLUSDT:[50,54,53,56,58,60,63]
};

export default function MarketCards(){

const navigate=useNavigate();
const [markets,setMarkets]=useState([]);
const [charts,setCharts]=useState({});

useEffect(()=>{

async function load(){

try{

const data=await getMarkets();

setMarkets(
data
.filter(c=>["BTCUSDT","ETHUSDT","BNBUSDT","SOLUSDT"].includes(c.symbol))
);

const graph={};

for(const coin of data.filter(c=>["BTCUSDT","ETHUSDT","BNBUSDT","SOLUSDT"].includes(c.symbol))){
try{
const candles=await getCandles(coin.symbol,"1h");
graph[coin.symbol]=candles.map(c=>Number(c.close));
}catch{
graph[coin.symbol]=[];
}
}

setCharts(graph);


}catch(err){

console.error(err);

}

}

load();

const timer=setInterval(load,10000);

return()=>clearInterval(timer);

},[]);

return(

<div className="market-section">

<div className="market-header">
<h3>الأسواق</h3>
<span>عرض الكل</span>
</div>

<div className="market-list">

{markets.map((coin)=>(

<div
key={coin.symbol}
className="market-card"
onClick={()=>navigate("/trade")}
>

<div className="market-left">

<img
src={icons[coin.symbol]}
alt={coin.symbol}
className="coin-icon"
/>

<div>

<h4>{coin.symbol.replace("USDT","/USDT")}</h4>

<p>{coin.baseAsset}</p>

<Sparkline
data={charts[coin.symbol] || []}
color={Number(coin.change24h)>=0?"#0ecb81":"#f6465d"}
/>

</div>

</div>

<div className="market-right">

<strong>
{Number(coin.price).toLocaleString()}
</strong>

<div
className={
Number(coin.change24h)>=0
?"green"
:"red"
}
>

{Number(coin.change24h)>=0?"▲ ":"▼ "}{Math.abs(Number(coin.change24h)).toFixed(2)}%

</div>

</div>

</div>

))}

</div>

</div>

);

}
