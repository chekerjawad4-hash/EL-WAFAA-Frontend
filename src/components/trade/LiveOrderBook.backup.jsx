import { useEffect, useState } from "react";

function LiveOrderBook({symbol}){

const [asks,setAsks]=useState([]);
const [bids,setBids]=useState([]);

useEffect(()=>{

const ws=new WebSocket(
`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@depth20`
);

ws.onmessage=(event)=>{

const data=JSON.parse(event.data);

setBids(data.bids.slice(0,10));
setAsks(data.asks.slice(0,10));

};

return ()=>{
ws.close();
};

},[symbol]);


return(
<div className="order-book">

<h3>Order Book</h3>

<div>
{asks.map((a,i)=>(
<p key={i}>
🔴 {a[0]} | {a[1]}
</p>
))}
</div>


<hr/>


<div>
{bids.map((b,i)=>(
<p key={i}>
🟢 {b[0]} | {b[1]}
</p>
))}
</div>


</div>
);

}

export default LiveOrderBook;
