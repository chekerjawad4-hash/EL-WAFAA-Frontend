import TradingChart from "./TradingChart";
import "./TradeChartSection.css";

function TradeChartSection({ symbol, interval }){

  return(
    <div className="chart-section">

      <div className="chart-header">
        <div className="chart-symbol">
          {symbol}
        </div>

        <div className="chart-interval">
          {interval.toUpperCase()}
        </div>
      </div>

      <TradingChart
        symbol={symbol}
        interval={interval}
      />

    </div>
  );

}

export default TradeChartSection;
