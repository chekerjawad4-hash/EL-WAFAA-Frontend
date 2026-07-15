import { useEffect, useState } from "react";

function Assets(){

  const [currency,setCurrency]=useState("USDT");
  const [network,setNetwork]=useState("TRC20");
  const [amount,setAmount]=useState("");
  const [txid,setTxid]=useState("");
  const [deposits,setDeposits]=useState([]);
  const [wallet,setWallet]=useState({usdt:0,dzc:0});
  const [wallet,setWallet]=useState({usdt:0,dzc:0});

  async function loadWallet(){
    const res=await fetch("https://el-wafaa-backend.onrender.com/api/wallet/1");
    const data=await res.json();

    if(data.success){
      setWallet(data.wallet);
    }
  }

  async function loadWallet(){
    const res=await fetch("https://el-wafaa-backend.onrender.com/api/wallet/1");
    const data=await res.json();

    if(data.success){
      setWallet(data.wallet);
    }
  }

  async function loadDeposits(){
    const res=await fetch("https://el-wafaa-backend.onrender.com/api/deposits");
    const data=await res.json();

    if(data.success){
      setDeposits(data.deposits);
    }
  }

  useEffect(()=>{
    loadWallet();
    loadWallet();
    loadDeposits();
  },[]);

  async function sendDeposit(){

    if(Number(amount)<=0){
      alert("أدخل مبلغًا صحيحًا");
      return;
    }

    if(txid.trim()===""){
      alert("أدخل TXID");
      return;
    }

    const res=await fetch("https://el-wafaa-backend.onrender.com/api/deposit",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        userId:1,
        currency,
        network,
        amount:Number(amount),
        txid,
        screenshot:"proof.png"
      })
    });

    const data=await res.json();

    alert(data.message);

    setAmount("");
    setTxid("");

    loadWallet();
    loadDeposits();
  }

  return(

    <div style={{
      background:"#0b0f14",
      minHeight:"100vh",
      color:"#fff",
      padding:"20px"
    }}>

      <h1>💼 الأصول</h1>

      <h2>إيداع</h2>

      <select
        value={currency}
        onChange={e=>setCurrency(e.target.value)}
      >
        <option>USDT</option>
        <option>DZC</option>
      </select>

      <br/><br/>

      <select
        value={network}
        onChange={e=>setNetwork(e.target.value)}
      >
        <option>TRC20</option>
        <option>BEP20</option>
        <option>ERC20</option>
      </select>

      <br/><br/>

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={e=>setAmount(e.target.value)}
      />

      <br/><br/>

      <input
        type="text"
        placeholder="TXID"
        value={txid}
        onChange={e=>setTxid(e.target.value)}
      />

      <br/><br/>

      <button onClick={sendDeposit}>
        إرسال طلب الإيداع
      </button>

      <hr style={{margin:"30px 0"}}/>

      <h2>سجل الإيداعات</h2>

      <table style={{
        width:"100%",
        borderCollapse:"collapse"
      }}>

        <thead>
          <tr>
            <th>العملة</th>
            <th>الشبكة</th>
            <th>المبلغ</th>
            <th>الحالة</th>
          </tr>
        </thead>

        <tbody>

          {deposits.map((d)=>(
            <tr key={d[0]}>
              <td>{d[2]}</td>
              <td>{d[3]}</td>
              <td>{d[4]}</td>
              <td>{d[7]}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>

  );

}

export default Assets;
