import { useEffect, useState } from "react";
import "./RecentTrades.css";

function RecentTrades({symbol}){

const [trades,setTrades]=useState([]);

useEffect(()=>{

const ws=new WebSocket(
`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@trade`
);

ws.onmessage=(e)=>{

const data=JSON.parse(e.data);

setTrades(prev=>[
{
price:data.p,
amount:data.q,
side:data.m ? "SELL" : "BUY",
time:new Date().toLocaleTimeString()
},
...prev
].slice(0,20));

};

return ()=>ws.close();

},[symbol]);


return(

<div className="recent-box">

<div className="recent-title">
آخر الصفقات
</div>

<div className="recent-head">
<span>Price</span>
<span>Amount</span>
<span>Time</span>
</div>


{
trades.map((t,i)=>(

<div className={`trade-row ${t.side === "SELL" ? "sell" : "buy"}`} key={i}>

<span>{Number(t.price).toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2})}</span>

<span>{Number(t.amount).toLocaleString(undefined,{minimumFractionDigits:4,maximumFractionDigits:4})}</span>

<span>{t.time}</span>

</div>

))
}


</div>

);

}

export default RecentTrades;
