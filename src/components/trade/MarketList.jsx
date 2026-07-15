import { useEffect, useState } from "react";

export default function MarketList({markets,onSelect}){

const [prices,setPrices]=useState({});

useEffect(()=>{

async function load(){

const res=await fetch("https://api.binance.com/api/v3/ticker/24hr");

const data=await res.json();

const obj={};

data.forEach(item=>{
obj[item.symbol]=item;
});

setPrices(obj);

}

load();

const id=setInterval(load,5000);

return()=>clearInterval(id);

},[]);

return(

<>

{
markets.map(symbol=>{

const item=prices[symbol];

return(

<div
key={symbol}
className="market"
onClick={()=>onSelect(symbol)}
>

<div>

<strong>{symbol}</strong>

</div>

<div>

<div>
{item?Number(item.lastPrice).toFixed(4):"--"}
</div>

<div
style={{
color:item&&Number(item.priceChangePercent)>=0?"#0ecb81":"#f6465d",
fontSize:"12px"
}}
>

{item?
`${Number(item.priceChangePercent).toFixed(2)}%`
:"--"}

</div>

</div>

</div>

);

})

}

</>

);

}
