import RecentTrades from "./RecentTrades";
import "./TradeRecentTrades.css";

function TradeRecentTrades({ symbol }){

return(

<div className="recent-trades-section">

<RecentTrades symbol={symbol}/>

</div>

);

}

export default TradeRecentTrades;
