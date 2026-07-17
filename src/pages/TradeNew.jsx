import { useState } from "react";
import { useLocation } from "react-router-dom";

import TradeHeader from "../components/trade/TradeHeader";
import TradeToolbar from "../components/trade/TradeToolbar";
import TradeChartSection from "../components/trade/TradeChartSection";
import TradeOrderBook from "../components/trade/TradeOrderBook";
import TradeRecentTrades from "../components/trade/TradeRecentTrades";
import TradeBuySell from "../components/trade/TradeBuySell";
import PairSelectorModal from "../components/trade/PairSelectorModal";

import "../styles/TradeNew.css";


function TradeNew(){

const location = useLocation();
const urlSymbol = new URLSearchParams(location.search).get("symbol");

const [pair,setPair]=useState(urlSymbol || "BTCUSDT");
const [interval,setInterval]=useState("1h");
const [showPairs,setShowPairs]=useState(false);


function selectPair(symbol){
setPair(symbol);
}

function openPair(){
setShowPairs(true);
}


return(

<div className="trade-new">

<TradeHeader
pair={pair}
onOpen={openPair}
/>


<TradeToolbar interval={interval} setInterval={setInterval} />


<TradeChartSection interval={interval}
symbol={pair}
/>


<div className="trade-middle">

<TradeOrderBook
symbol={pair}
/>


<TradeRecentTrades
symbol={pair}
/>

{showPairs && (
  <PairSelectorModal
    onClose={() => setShowPairs(false)}
    onSelect={selectPair}
  />
)}

</div>


<TradeBuySell
pair={pair}
/>



</div>

);

}

export default TradeNew;
