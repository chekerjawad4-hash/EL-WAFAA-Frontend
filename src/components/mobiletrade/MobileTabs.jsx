import "./MobileTabs.css";

export default function MobileTabs({tab,setTab}){

return(

<div className="mobile-tabs">

<div className="tabs-header">

<button
className={tab==="chart"?"active":""}
onClick={()=>setTab("chart")}
>
Chart
</button>

<button
className={tab==="book"?"active":""}
onClick={()=>setTab("book")}
>
Order Book
</button>

<button
className={tab==="trades"?"active":""}
onClick={()=>setTab("trades")}
>
Trades
</button>

</div>

</div>

);

}
