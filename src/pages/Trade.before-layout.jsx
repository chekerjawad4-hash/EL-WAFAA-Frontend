import { useState } from "react";
import LivePrice from "../components/trade/LivePrice";
import TradingChart from "../components/trade/TradingChart";
import LiveOrderBook from "../components/trade/LiveOrderBook";
import RecentTrades from "../components/trade/RecentTrades";
import BuySellPanel from "../components/trade/BuySellPanel";
import WalletBox from "../components/trade/WalletBox";
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
<span className="price">
0.00 USDT
</span>
</div>


<div className="trade-body">


<div className="markets">

<h3>Markets</h3>

{
markets.map(pair=>(
<div
key={pair}
className="market-item"
onClick={()=>setSelectedPair(pair)}
>
{pair}
</div>
))
}

</div>



<div className="chart-area">

<TradingChart symbol={selectedPair}/>

<div className="bottom-area">

<LiveOrderBook symbol={selectedPair}/>

<RecentTrades/>

</div>

</div>


</div>



<div className="side-panel">

<WalletBox/>

<BuySellPanel/>

</div>


</div>

)

}

export default Trade;
