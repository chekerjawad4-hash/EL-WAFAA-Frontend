import { useState } from "react";
import "./PairSelector.css";

function PairSelector(){

  const pairs = [
    "DZC/USDT",
    "BTC/USDT",
    "ETH/USDT",
    "BNB/USDT",
    "SOL/USDT",
    "XRP/USDT",
    "ADA/USDT"
  ];

  const [selected, setSelected] = useState("DZC/USDT");

  return(

    <div className="pair-selector">

      <select
        value={selected}
        onChange={(e)=>setSelected(e.target.value)}
      >

        {pairs.map(pair=>(
          <option key={pair} value={pair}>
            {pair}
          </option>
        ))}

      </select>

    </div>

  );

}

export default PairSelector;
