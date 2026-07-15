import "./FuturesPositions.css";

export default function FuturesPositions({
  positions=[],
  price=0,
  onClose
}){

return(

<div className="positions">

<h3>Open Positions</h3>

{positions.length===0 && (
<p className="empty">No open positions</p>
)}

{positions.map((p)=>{

const pnl=(
(p.side==="LONG"
? price-p.entryPrice
: p.entryPrice-price)
*p.amount
*p.leverage
);

return(

<div key={p.id} className="position-card">

<div className="top">
<b>{p.symbol}</b>
<span className={p.side==="LONG"?"long":"short"}>
{p.side}
</span>
</div>

<p>Entry: {p.entryPrice}</p>

<p>Leverage: {p.leverage}x</p>

<p className={pnl>=0?"profit":"loss"}>
PNL: {pnl.toFixed(2)} USDT
</p>

<button onClick={()=>onClose(p.id)}>
Close Position
</button>

</div>

);

})}

</div>

);

}
