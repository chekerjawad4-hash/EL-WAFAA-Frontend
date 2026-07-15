import { useState } from "react";
import "../styles/TradingPanel.css";

function TradingPanel(){

    const [amount,setAmount] = useState("");

    return(

        <div className="trading-panel">

            <h2>التداول</h2>


            <div className="trade-info">
                <span>DZC / USDT</span>
                <strong>0.12 USDT</strong>
            </div>


            <input
                type="number"
                placeholder="الكمية"
                value={amount}
                onChange={
                    e=>setAmount(e.target.value)
                }
            />


            <div className="trade-buttons">

                <button className="buy-btn">
                    شراء DZC
                </button>


                <button className="sell-btn">
                    بيع DZC
                </button>

            </div>


        </div>

    );

}

export default TradingPanel;
