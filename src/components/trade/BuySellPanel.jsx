import { useState } from "react";
import "./BuySellPanel.css";

export default function BuySellPanel(){

const [type,setType]=useState("LIMIT");
const [side,setSide]=useState("BUY");
const [price,setPrice]=useState("");
const [amount,setAmount]=useState("");
const [marginMode,setMarginMode]=useState("Cross");
const [leverage,setLeverage]=useState(5);
const [takeProfit,setTakeProfit]=useState("");
const [stopLoss,setStopLoss]=useState("");

const openPosition = async () => {
try {
await fetch("https://el-wafaa-backend.onrender.com/api/futures/open",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
symbol:"BTCUSDT",
side,
type,
price:Number(price),
amount:Number(amount)
})
});
}catch(err){
console.error(err);
}
};

return(

<div className="trade-panel">

<div className="trade-settings">
<button onClick={()=>setMarginMode(marginMode==="Cross"?"Isolated":"Cross")}>{marginMode}</button>
<button onClick={()=>{const x=prompt("Leverage",leverage);if(x)setLeverage(Number(x));}}>{leverage}x</button>
</div>
<div className="trade-type">

<button className={type==="LIMIT"?"active":""} onClick={()=>setType("LIMIT")}>Limit</button>

<button className={type==="MARKET"?"active":""} onClick={()=>setType("MARKET")}>Market</button>

<button className={type==="STOP"?"active":""} onClick={()=>setType("STOP")}>Stop</button>

</div>

<div className="trade-side">

<button className={side==="BUY"?"buy-active":""} onClick={()=>setSide("BUY")}>
Buy
</button>

<button className={side==="SELL"?"sell-active":""} onClick={()=>setSide("SELL")}>
Sell
</button>

</div>

<input value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Price"/>

<input value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Amount"/>

<input value={takeProfit} onChange={(e)=>setTakeProfit(e.target.value)} placeholder="Take Profit"/>
<input value={stopLoss} onChange={(e)=>setStopLoss(e.target.value)} placeholder="Stop Loss"/>
<input placeholder="Total"/>

<div className="percent-bar">

<button>25%</button>
<button>50%</button>
<button>75%</button>
<button>100%</button>

</div>

<div className="trade-info">
<div><span>Available</span><span>1000.00 USDT</span></div>
<div><span>Margin</span><span>--</span></div>
<div><span>Liq. Price</span><span>--</span></div>
</div>
<button onClick={openPosition} className={side==="BUY"?"buy-btn":"sell-btn"}>

{side==="BUY"?"Buy":"Sell"}

</button>

</div>

);

}
