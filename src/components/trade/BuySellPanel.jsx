import { useState,useEffect } from "react";
import "./BuySellPanel.css";

export default function BuySellPanel({pair}){

const [type,setType]=useState("LIMIT");
const [side,setSide]=useState("BUY");

const [price,setPrice]=useState("");
const [marketPrice,setMarketPrice]=useState(0);
const [amount,setAmount]=useState("");
const [total,setTotal]=useState("");
const [percent,setPercent]=useState(0);
const [wallet,setWallet]=useState({usdt:0,dzc:0});


useEffect(()=>{

if(price && amount){
setTotal((Number(price)*Number(amount)).toFixed(2));
}

},[price,amount]);


useEffect(()=>{

const token=localStorage.getItem("token");

fetch("https://el-wafaa-backend.onrender.com/api/wallet",{
headers:{
"Authorization":`Bearer ${token}`
}
})
.then(res=>res.json())
.then(data=>{
if(data.success){
setWallet(data.wallet);
}
})
.catch(err=>console.log(err));

},[]);

useEffect(()=>{

async function loadPrice(){

try{
const res=await fetch("https://el-wafaa-backend.onrender.com/api/markets");
const data=await res.json();
if(data.success){
const symbol=pair.replace("/","");
const coin=data.markets.find(m=>m.symbol===symbol);
if(coin){
setMarketPrice(Number(coin.price));
if(type==="MARKET"){
setPrice(String(coin.price));
}
}
}
}catch(e){}
}

loadPrice();
const timer=setInterval(loadPrice,2000);
return()=>clearInterval(timer);

},[pair,type]);



const fillPercent=(percent)=>{
setPercent(percent);
console.log("Slider:",percent);
console.log("DATA:",wallet,price,side);

if(side==="BUY"){
if(price && Number(price)>0){
setAmount(((wallet.usdt*percent)/100/Number(price)).toFixed(6));
}
}else{
setAmount(((wallet.dzc*percent)/100).toFixed(6));
}

};


const sendOrder = async()=>{

try{

const token=localStorage.getItem("token");

await fetch(
"https://el-wafaa-backend.onrender.com/api/trade/order",
{
method:"POST",
headers:{
"Content-Type":"application/json",
"Authorization":`Bearer ${token}`
},
body:JSON.stringify({
symbol:pair,
side,
type,
price:Number(price),
amount:Number(amount)
})
});

alert("Order sent");

}catch(err){

console.error(err);

}

};


return(

<div className="trade-panel">


<div style={{color:"#f0b90b",fontWeight:"bold",marginBottom:"10px"}}>
Current Price: {marketPrice}
</div>
<div className="trade-type">

<button
className={type==="LIMIT"?"active":""}
onClick={()=>setType("LIMIT")}
>
Limit
</button>


<button
className={type==="MARKET"?"active":""}
onClick={()=>setType("MARKET")}
>
Market
</button>

</div>



<div className="trade-side">

<button
className={side==="BUY"?"buy-active":""}
onClick={()=>setSide("BUY")}
>
Buy
</button>


<button
className={side==="SELL"?"sell-active":""}
onClick={()=>setSide("SELL")}
>
Sell
</button>


</div>



<input
placeholder="Price"
disabled={type==="MARKET"}
value={price}
onChange={e=>setPrice(e.target.value)}
/>


<input
placeholder="Amount"
value={amount}
onChange={e=>setAmount(e.target.value)}
/>


<input
placeholder="Total"
value={total}
readOnly
/>



<div className="percent-bar">

<button onClick={()=>fillPercent(25)}>25%</button>
<button onClick={()=>fillPercent(50)}>50%</button>
<button onClick={()=>fillPercent(75)}>75%</button>
<button onClick={()=>fillPercent(100)}>100%</button>

</div>
<input
className="percent-slider"
type="range"
min="0"
max="100"
value={percent}
onChange={(e)=>fillPercent(Number(e.target.value))}
/>
<div>{percent}%</div>



<div style={{color:"#fff",fontSize:"12px",marginBottom:"10px"}}>
USDT: {wallet.usdt} | DZC: {wallet.dzc} | Price: {price} | Amount: {amount} | Percent: {percent}
</div>

<div className="trade-info">

<div>
<span>Available</span>
<span>{side==="BUY" ? wallet.usdt : wallet.dzc}</span>
</div>

</div>



<button
onClick={sendOrder}
className={side==="BUY"?"buy-btn":"sell-btn"}
>

{side==="BUY" ? `Buy ${pair.replace("/USDT","")}` : `Sell ${pair.replace("/USDT","")}`}

</button>


</div>

);

}
