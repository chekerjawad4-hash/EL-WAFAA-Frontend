import { useEffect, useState } from "react";
import "./LiveOrderBook.css";

function LiveOrderBook({symbol}){

const [asks,setAsks]=useState([]);
const [bids,setBids]=useState([]);
const [lastPrice,setLastPrice]=useState("0.00");

useEffect(()=>{

const ws=new WebSocket(
`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@depth20`
);

ws.onerror=()=>{
console.log("OrderBook websocket error:",symbol);
};

ws.onmessage=(e)=>{

const data=JSON.parse(e.data);

setAsks(data.asks.slice(0,10));
setBids(data.bids.slice(0,10));
setLastPrice(data.bids[0]?.[0] || "0.00");

};

return ()=>ws.close();

},[symbol]);

return(

<div className="ob">

<div className="ob-title">
Order Book
</div>

<div className="ob-head">
<span>Price</span>
<span>Amount</span>
</div>

<div className="ob-sell">

{
asks.map((a,i)=>(
<div key={i} className="row sell">
<span>{Number(a[0]).toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2})}</span>
<span>{a[1]}</span>
</div>
))
}

</div>

<div className="last-price">
{lastPrice} USDT
</div>

<div className="ob-buy">

{
bids.map((b,i)=>(
<div key={i} className="row buy">
<span>{Number(b[0]).toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2})}</span>
<span>{b[1]}</span>
</div>
))
}

</div>

</div>

);

}

export default LiveOrderBook;
