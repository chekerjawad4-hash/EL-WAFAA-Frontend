import { useEffect, useState } from "react";

function LivePrice({symbol}){

const [price,setPrice]=useState("0.00");

useEffect(()=>{

const ws=new WebSocket(
`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@ticker`
);

ws.onerror=()=>{
console.log("Price websocket error:",symbol);
};

ws.onmessage=(event)=>{

const data=JSON.parse(event.data);
setPrice(Number(data.c).toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2}));

};

return ()=>{
ws.close();
};

},[symbol]);


return(
<div className="live-price">
{price} USDT
</div>
);

}

export default LivePrice;
