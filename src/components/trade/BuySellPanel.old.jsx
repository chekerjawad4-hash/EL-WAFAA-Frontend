import { useState } from "react";
import "./BuySellPanel.css";

function BuySellPanel({ userId, onSuccess }){

  const [side,setSide] = useState("BUY");
  const [amount,setAmount] = useState("");

  const price = 0.12;

  const total = amount ? (Number(amount) * price).toFixed(4) : "0";

  async function handleOrder(){

    if(side !== "BUY"){
      alert("البيع غير متاح حاليا");
      return;
    }

    const res = await fetch(
      "http://127.0.0.1:3001/api/buy-dzc",
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          userId,
          amount:Number(amount)
        })
      }
    );

    const data = await res.json();

    alert(data.success ? `تم شراء ${data.purchase.amount} DZC بنجاح` : data.message);
    setAmount("");
    if(onSuccess) onSuccess();

  }

  return(
    <div className="trade-box">

      <div className="tabs">

        <button
          onClick={()=>setSide("BUY")}
          className={side==="BUY" ? "active":""}
        >
          شراء
        </button>

        <button
          onClick={()=>setSide("SELL")}
          className={side==="SELL" ? "active":""}
        >
          بيع
        </button>

      </div>


      <h3>
        {side === "BUY" ? "شراء" : "بيع"} DZC
      </h3>


      <input
        type="number"
        placeholder="الكمية"
        value={amount}
        onChange={e=>setAmount(e.target.value)}
      />


      <div className="total">
        الإجمالي: {total} USDT
      </div>


      <button onClick={handleOrder} className="order-btn">
        {side==="BUY" ? "شراء DZC" : "بيع DZC"}
      </button>


    </div>
  );

}

export default BuySellPanel;
