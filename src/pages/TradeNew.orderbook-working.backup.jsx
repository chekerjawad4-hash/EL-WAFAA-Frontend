import { useState } from "react";

import TradeHeader from "../components/trade/TradeHeader";
import TradeToolbar from "../components/trade/TradeToolbar";
import TradeChartSection from "../components/trade/TradeChartSection";
import TradeOrderBook from "../components/trade/TradeOrderBook";
import TradeRecentTrades from "../components/trade/TradeRecentTrades";
import TradeBuySell from "../components/trade/TradeBuySell";

import "../styles/TradeNew.css";


function TradeNew(){

const [pair,setPair]=useState("BTCUSDT");


function openPair(){

console.log("open pair selector");

}


return(

<div className="trade-new">

<TradeHeader
pair={pair}
onOpen={openPair}
/>


<TradeToolbar/>


<TradeChartSection
symbol={pair}
interval="1m"
/>


<div className="trade-middle">

<TradeOrderBook
symbol={pair}
/>


<TradeRecentTrades
symbol={pair}
/>

</div>


<TradeBuySell
pair={pair}
/>


</div>

);

}

export default TradeNew;
