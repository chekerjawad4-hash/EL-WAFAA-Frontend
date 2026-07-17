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

const timer=setInterval(load,10000);

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
{market ? market.price : "..."}
</div>

<div className={
market?.change >= 0
? "change positive"
: "change negative"
}>
{market ? market.change+"%" : "..."}
</div>

</div>


<div className="stats">

<div>
<span>24h High</span>
<strong>{market?.high || "--"}</strong>
</div>

<div>
<span>24h Low</span>
<strong>{market?.low || "--"}</strong>
</div>

<div>
<span>Volume</span>
<strong>{market?.volume || "--"}</strong>
</div>

</div>


</div>

);

}

export default TradeHeader;
