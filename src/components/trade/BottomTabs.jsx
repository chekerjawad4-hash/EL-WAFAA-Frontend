import { useState } from "react";
import "./BottomTabs.css";

export default function BottomTabs(){

const [tab,setTab]=useState("orders");

return(

<div className="bottom-tabs">

<div className="tabs">

<button
className={tab==="orders"?"active":""}
onClick={()=>setTab("orders")}
>
Open Orders
</button>

<button
className={tab==="history"?"active":""}
onClick={()=>setTab("history")}
>
Order History
</button>

<button
className={tab==="trades"?"active":""}
onClick={()=>setTab("trades")}
>
Trade History
</button>

<button
className={tab==="assets"?"active":""}
onClick={()=>setTab("assets")}
>
Assets
</button>

</div>

<div className="tab-content">

{tab==="orders" && <p>No open orders.</p>}
{tab==="history" && <p>No order history.</p>}
{tab==="trades" && <p>No trade history.</p>}
{tab==="assets" && <p>Wallet assets will appear here.</p>}

</div>

</div>

);

}
