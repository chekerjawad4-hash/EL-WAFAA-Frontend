import { useEffect, useState } from "react";
import "./TradeHeader.css";

function TradeHeader({ pair, onOpen }){

const [market,setMarket]=useState(null);

useEffect(()=>{

async function load(){

try{

const res=await fetch(
"https://el-wafaa-backend.onrender.com/api/markets"
);

const data=await res.json();

if(data.success){

const symbol=pair.replace("/","");

const found=data.markets.find(
m=>m.symbol===symbol
);

setMarket(found);

}

}catch(err){

console.log(err);

}

}

load();

const timer=setInterval(load,2000);

return()=>clearInterval(timer);

},[pair]);


return(

<div className="trade-header">

<div className="top-pair">

<button
className="pair-button"
onClick={onOpen}
>
← {pair}
</button>

<button className="favorite">
☆
</button>

</div>


<div className="main-price">

<div className="price">
{market ? Number(market.price).toLocaleString(undefined,{maximumFractionDigits:8}) : "..."} 
</div>

<div className={
market?.change >= 0
? "change positive"
: "change negative"
}>
{market ? `${Number(market.change).toFixed(2)}%` : "..."} 
</div>

</div>


<div className="stats">

<div>
<span>24h High</span>
<strong>{market ? Number(market.high).toLocaleString() : "--"}</strong>
</div>

<div>
<span>24h Low</span>
<strong>{market ? Number(market.low).toLocaleString() : "--"}</strong>
</div>

<div>
<span>Volume</span>
<strong>{market ? Number(market.volume).toLocaleString() : "--"}</strong>
</div>

</div>


</div>

);

}

export default TradeHeader;
