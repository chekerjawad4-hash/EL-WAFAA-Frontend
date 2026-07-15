import { useState } from "react";
import TradingChart from "../components/trade/TradingChart";
import "../styles/Trade.css";

function Trade(){

const [selectedPair,setSelectedPair]=useState("BTCUSDT");

const markets=[
"BTCUSDT",
"ETHUSDT",
"BNBUSDT",
"SOLUSDT",
"XRPUSDT",
"DZCUSDT"
];

return(
<div className="trade-page">

<div className="trade-header">
<h2>{selectedPair}</h2>
<span className="price">0.00 USDT</span>
</div>

<div className="trade-body">

<div className="markets">
<h3>Markets</h3>

{markets.map(pair=>(
<div
key={pair}
className="market-item"
onClick={()=>setSelectedPair(pair)}
>
{pair}
</div>
))}

</div>

<div className="chart-area">
<TradingChart symbol={selectedPair}/>
</div>

</div>

<div className="order-panel">

<div>
<h3>شراء</h3>
<input placeholder="السعر"/>
<input placeholder="الكمية"/>
<button>شراء</button>
</div>

<div>
<h3>بيع</h3>
<input placeholder="السعر"/>
<input placeholder="الكمية"/>
<button>بيع</button>
</div>

</div>

</div>
)

}

export default Trade;
