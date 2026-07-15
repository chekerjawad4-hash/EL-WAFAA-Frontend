import { useState } from "react";
import "./BuySellPanel.css";

function BuySellPanel(){

const [side,setSide]=useState("BUY");
const [amount,setAmount]=useState("");

return(

<div className="trade-box">


<div className="tabs">

<button
className={side==="BUY" ? "active-buy":""}
onClick={()=>setSide("BUY")}
>
شراء
</button>


<button
className={side==="SELL" ? "active-sell":""}
onClick={()=>setSide("SELL")}
>
بيع
</button>

</div>



<h3>
{side==="BUY" ? "شراء" : "بيع"}
</h3>



<input
placeholder="السعر"
/>


<input
placeholder="الكمية"
value={amount}
onChange={e=>setAmount(e.target.value)}
/>



<div className="percent">

<button>25%</button>
<button>50%</button>
<button>75%</button>
<button>100%</button>

</div>



<div className="total">
الإجمالي: 0 USDT
</div>



<button
className={side==="BUY" ? "order-buy":"order-sell"}
>
{side==="BUY" ? "شراء" : "بيع"}
</button>


</div>

)

}

export default BuySellPanel;
