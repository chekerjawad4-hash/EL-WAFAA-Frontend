import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaWallet, FaMoneyBillWave, FaExchangeAlt, FaHistory, FaEye, FaEyeSlash } from "react-icons/fa";
import "./BalanceCard.css";

export default function BalanceCard(){

  const [showBalance,setShowBalance]=useState(true);

  const navigate = useNavigate();

  return(
    <div className="balance-card">

      <div className="balance-row">

        <div className="balance-left">
            <button
              className="deposit-btn"
              onClick={()=>navigate("/assets")}
            >
              إضافة أموال
            </button>
        </div>

        <div className="balance-right">

          <div className="balance-title">
            القيمة الإجمالية المقدرة (USDT)

            <button
              className="eye-btn"
              onClick={()=>setShowBalance(!showBalance)}
            >
              {showBalance ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>

          <h1>
            {showBalance ? "0.12995236" : "********"}
          </h1>

          <div className="balance-usd">
            {showBalance ? "≈ $0.12995236" : "≈ ********"}
          </div>

          <div className="balance-profit">
            ▲ +0.02% (+0.00002373 USDT)
          </div>

        </div>
  <div className="balance-actions">
    <button onClick={()=>navigate("/assets")}><FaWallet /><span>إيداع</span></button>
    <button onClick={()=>navigate("/assets")}><FaMoneyBillWave /><span>سحب</span></button>
    <button onClick={()=>navigate("/assets")}><FaExchangeAlt /><span>تحويل</span></button>
    <button onClick={()=>navigate("/assets")}><FaHistory /><span>السجل</span></button>
  </div>
</div>

    </div>
  );

}
