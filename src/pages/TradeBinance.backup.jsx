import { useState } from "react";

import TradingChart from "../components/trade/TradingChart";
import LivePrice from "../components/trade/LivePrice";
import LiveOrderBook from "../components/trade/LiveOrderBook";
import BuySellPanel from "../components/trade/BuySellPanel";
import RecentTrades from "../components/trade/RecentTrades";
import WalletBox from "../components/trade/WalletBox";
import MarketList from "../components/trade/MarketList";
import BottomTabs from "../components/trade/BottomTabs";

import "../styles/TradeBinance.css";

export default function TradeBinance(){

const [pair,setPair]=useState("BTCUSDT");
const [search,setSearch]=useState("");

const markets=[
"BTCUSDT",
"ETHUSDT",
"BNBUSDT",
"SOLUSDT",
"XRPUSDT",
"DOGEUSDT",
"ADAUSDT",
"DZCUSDT"
];

return(

<div className="trade">

<header className="header">

<div className="pair">

<h2>{pair}</h2>

<LivePrice symbol={pair}/>

</div>

<div className="stats">

<span>24h Change</span>

<span>High</span>

<span>Low</span>

<span>Volume</span>

</div>

</header>


<div className="layout">

<aside className="markets">

<div className="market-header">

<input
className="market-search"
placeholder="Search..."
value={search}
onChange={e=>setSearch(e.target.value)}
/>

<div className="market-tabs">

<button className="active">Spot</button>

<button>Futures</button>

</div>

</div>

<div className="market-list">


<MarketList
markets={
markets.filter(item=>
item.toLowerCase().includes(search.toLowerCase())
)
}
onSelect={setPair}
/>

</div>

</aside>



<main className="center">

<div className="chart">

<div className="chart-toolbar">

<button>Time</button>
<button className="active">1m</button>
<button>5m</button>
<button>15m</button>
<button>1H</button>
<button>4H</button>
<button>1D</button>

<div className="toolbar-right">
<button>Indicators</button>
<button>⛶</button>
</div>

</div>

<TradingChart symbol={pair}/>

</div>

<div className="bottom">

<div className="buy">

<BuySellPanel/>

</div>

<div className="trades">

<RecentTrades symbol={pair}/>

</div>

</div>

<BottomTabs/>

</main>



<aside className="right">

<div className="book">

<LiveOrderBook symbol={pair}/>

</div>

<div className="wallet">

<WalletBox/>

</div>

</aside>

</div>

</div>

);

}
