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

<LivePrice symbol={selectedPair}/>

</div>



<div className="trade-layout">



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





<div className="center-area">


<div className="chart-box">

<TradingChart symbol={selectedPair}/>

</div>



<div className="trades-box">

<RecentTrades/>

</div>



<div className="buy-box">

<BuySellPanel/>

</div>


</div>





<div className="right-area">


<div className="order-box">

<LiveOrderBook symbol={selectedPair}/>

</div>


<div className="wallet-box-area">

<WalletBox/>

</div>


</div>



</div>


</div>

)

}


export default Trade;
