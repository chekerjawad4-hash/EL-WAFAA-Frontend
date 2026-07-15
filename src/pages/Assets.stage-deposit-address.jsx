
import { useEffect, useState } from "react";

function Assets(){

  const [wallet,setWallet]=useState({usdt:0,dzc:0});

  const total = wallet.usdt + wallet.dzc;
  const [deposits,setDeposits]=useState([]);

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
    loadDeposits();
  },[]);

  return(
    <div style={{
      background:"#0b0f14",
      minHeight:"100vh",
      color:"#fff",
      padding:"20px"
    }}>

      <h1>💼 الأصول</h1>

      <div style={{background:"#171b22",padding:"18px",borderRadius:"14px",margin:"20px 0",border:"1px solid #2a2f3a"}}>
        <div style={{fontSize:"14px",color:"#999"}}>💰 إجمالي الأصول</div>
        <h2 style={{marginTop:"10px",color:"#f0b90b"}}>{total.toFixed(2)} USDT</h2>
      </div>

      <div style={{
        display:"flex",
        gap:"15px",
        margin:"20px 0"
      }}>

        <div style={{
          flex:1,
          background:"#171b22",
          padding:"15px",
          borderRadius:"12px"
        }}>
          <h3>💵 USDT</h3>
          <h2>{wallet.usdt}</h2>
        </div>

        <div style={{
          flex:1,
          background:"#171b22",
          padding:"15px",
          borderRadius:"12px"
        }}>
          <h3>🪙 DZC</h3>
          <h2>{wallet.dzc}</h2>
        </div>

      </div>

      <h2>آخر الإيداعات</h2>

      <table style={{width:"100%"}}>
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