import { useEffect, useState } from "react";
import "./LiveOrderBook.css";

function LiveOrderBook({symbol}){

const [asks,setAsks]=useState([]);
const [bids,setBids]=useState([]);

useEffect(()=>{

const ws=new WebSocket(
`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@depth20`
);

ws.onmessage=(e)=>{

const data=JSON.parse(e.data);

setAsks(data.asks.slice(0,10));
setBids(data.bids.slice(0,10));

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
<span>{a[0]}</span>
<span>{a[1]}</span>
</div>
))
}

</div>

<div className="last-price">
Market
</div>

<div className="ob-buy">

{
bids.map((b,i)=>(
<div key={i} className="row buy">
<span>{b[0]}</span>
<span>{b[1]}</span>
</div>
))
}

</div>

</div>

);

}

export default LiveOrderBook;
