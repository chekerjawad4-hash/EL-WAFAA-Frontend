import "./MobileHeader.css";

export default function MobileHeader(){

return(

<div className="mobile-header">

<div>

<div className="pair">
BTC/USDT ▼
</div>

<div className="price">
117,250.80
</div>

<div className="change">
+2.35%
</div>

</div>

<div className="stats">

<div>
<span>24H High</span>
<strong>118,000</strong>
</div>

<div>
<span>24H Low</span>
<strong>115,900</strong>
</div>

<div>
<span>24H Vol</span>
<strong>3.24B</strong>
</div>

</div>

</div>

);

}
