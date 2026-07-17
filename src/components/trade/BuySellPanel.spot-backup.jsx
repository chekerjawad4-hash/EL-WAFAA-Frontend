import { useState,useEffect } from "react";
import "./BuySellPanel.css";

export default function BuySellPanel({pair}){

const [type,setType]=useState("LIMIT");
const [side,setSide]=useState("BUY");

const [price,setPrice]=useState("");
const [amount,setAmount]=useState("");
const [total,setTotal]=useState("");


useEffect(()=>{

if(price && amount){
setTotal((Number(price)*Number(amount)).toFixed(2));
}

},[price,amount]);


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

<button>25%</button>
<button>50%</button>
<button>75%</button>
<button>100%</button>

</div>



<div className="trade-info">

<div>
<span>Available</span>
<span>1000 USDT</span>
</div>

</div>



<button
onClick={sendOrder}
className={side==="BUY"?"buy-btn":"sell-btn"}
>

{side==="BUY"?"Buy":"Sell"}

</button>


</div>

);

}
