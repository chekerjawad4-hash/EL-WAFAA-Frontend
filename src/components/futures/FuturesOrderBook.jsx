import "./FuturesOrderBook.css";

export default function FuturesOrderBook(){

const asks=[
["118520.50","0.45"],
["118520.20","0.38"],
["118519.80","0.92"],
["118519.40","1.12"],
["118519.10","0.61"],
];

const bids=[
["118518.90","0.55"],
["118518.50","0.71"],
["118518.20","1.05"],
["118517.90","0.48"],
["118517.50","0.84"],
];

return(

<div className="order-book">

<h3>Order Book</h3>

<div className="book-header">
<span>Price</span>
<span>Amount</span>
</div>

{asks.map((x,i)=>(
<div key={i} className="ask-row">
<span>{x[0]}</span>
<span>{x[1]}</span>
</div>
))}

<div className="mark-price">
118519.00
</div>

{bids.map((x,i)=>(
<div key={i} className="bid-row">
<span>{x[0]}</span>
<span>{x[1]}</span>
</div>
))}

</div>

);

}
