import { useState } from "react";
import "./FuturesTradePanel.css";

export default function FuturesTradePanel({price,onLong,onShort}){

const [mode,setMode]=useState("Cross");
const [type,setType]=useState("Market");
const [lev,setLev]=useState(10);
const [amount,setAmount]=useState("");

return(

<div className="trade-panel">

<div className="trade-top">
<button onClick={()=>setMode(mode==="Cross"?"Isolated":"Cross")}>
{mode}
</button>

<button onClick={()=>{
const x=prompt("Leverage",lev);
if(x) setLev(Number(x));
}}>
{lev}x
</button>
</div>

<div className="trade-types">
<button className={type==="Limit"?"active":""} onClick={()=>setType("Limit")}>Limit</button>
<button className={type==="Market"?"active":""} onClick={()=>setType("Market")}>Market</button>
<button className={type==="Stop"?"active":""} onClick={()=>setType("Stop")}>Stop</button>
</div>

<input value={price} readOnly />

<input
placeholder="Amount"
value={amount}
onChange={(e)=>setAmount(e.target.value)}
/>

<div className="percent-row">
<button>25%</button>
<button>50%</button>
<button>75%</button>
<button>100%</button>
</div>

<button className="buy-btn" onClick={()=>onLong(amount,lev)}>
Buy / Long
</button>

<button className="sell-btn" onClick={()=>onShort(amount,lev)}>
Sell / Short
</button>

</div>

);

}
