import LiveOrderBook from "./LiveOrderBook";
import "./TradeOrderBook.css";

function TradeOrderBook({ symbol }){

return(

<div className="orderbook-section">

<LiveOrderBook symbol={symbol}/>

</div>

);

}

export default TradeOrderBook;
