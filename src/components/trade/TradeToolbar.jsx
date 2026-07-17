import "./TradeToolbar.css";

function TradeToolbar({ interval, setInterval }){

const times=[
"1m",
"5m",
"15m",
"1h",
"4h",
"1d"
];

return(

<div className="trade-toolbar">

<div className="time-list">

<span>Time</span>

{times.map(t=>(
<button
key={t}
className={interval===t ? "active-time" : ""}
onClick={()=>setInterval(t)}
>
{t.toUpperCase()}
</button>
))}

</div>

<div className="tools">

<button>Indicators</button>
<button>Depth</button>
<button>More</button>

</div>

</div>

);

}

export default TradeToolbar;
