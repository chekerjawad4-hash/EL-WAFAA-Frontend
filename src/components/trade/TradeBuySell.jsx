import BuySellPanel from "./BuySellPanel";
import "./TradeBuySell.css";

function TradeBuySell({ pair }){

return(

<div className="buy-sell-section">

<BuySellPanel pair={pair}/>

</div>

);

}

export default TradeBuySell;
