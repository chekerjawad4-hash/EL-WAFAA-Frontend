import "./FuturesHeader.css";

export default function FuturesHeader({
  symbol,
  price,
  change = 0
}) {
  return (
    <div className="futures-header">
      <div className="header-left">
        <h2>{symbol}</h2>
        <span className="contract">USDⓈ-M Perpetual</span>
      </div>

      <div className="header-right">
        <div className="last-price">
          {Number(price).toLocaleString()}
        </div>

        <div className={change >= 0 ? "up" : "down"}>
          {change >= 0 ? "+" : ""}{change}%
        </div>
      </div>
    </div>
  );
}
