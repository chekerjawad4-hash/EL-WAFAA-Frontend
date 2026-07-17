import TradeHeader from "../components/trade/TradeHeader";
import TradeToolbar from "../components/trade/TradeToolbar";
import TradeChartSection from "../components/trade/TradeChartSection";
import TradeOrderBook from "../components/trade/TradeOrderBook";
import TradeRecentTrades from "../components/trade/TradeRecentTrades";

function TradeNew(){

  return(
    <div style={{background:"#111",minHeight:"100vh"}}>

      <TradeHeader
        pair="BTC/USDT"
        onOpen={()=>{}}
      />

      <TradeToolbar
        interval="1m"
        setInterval={()=>{}}
      />

      <TradeChartSection
        symbol="BTCUSDT"
        interval="1m"
      />

      <TradeOrderBook
        symbol="BTCUSDT"
      />

      <TradeRecentTrades
        symbol="BTCUSDT"
      />

    </div>
  );

}

export default TradeNew;
