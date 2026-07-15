
import { QRCodeSVG } from "qrcode.react";
import { useEffect, useState } from "react";

function Assets(){

  const user = JSON.parse(localStorage.getItem("user"));

  const [wallet,setWallet]=useState({usdt:0,dzc:0});

  const total = wallet.usdt + wallet.dzc;
  const [deposits,setDeposits]=useState([]);
  const [showDeposit,setShowDeposit]=useState(false);
  const [depositCoin,setDepositCoin]=useState("TRX");
  const depositWallets={
    "TRX":{network:"TRC20",address:"TEoD72FUCuybPGPigWuVMCnkgtHgQ2F4nz"},
    "BNB":{network:"BEP20 (BSC)",address:"0x6a39b1996a9943e904081398847d5c7848275731"},
    "ETH":{network:"ERC20",address:"0x6a39b1996a9943e904081398847d5c7848275731"},
    "USDT-TRC20":{network:"TRC20",address:"TEoD72FUCuybPGPigWuVMCnkgtHgQ2F4nz"},
    "USDT-BEP20":{network:"BEP20 (BSC)",address:"0x6a39b1996a9943e904081398847d5c7848275731"},
    "USDT-ERC20":{network:"ERC20",address:"0x6a39b1996a9943e904081398847d5c7848275731"}
  };

  async function loadWallet(){
    const res=await fetch(
      "http://127.0.0.1:3001/api/wallet",
      {
        headers:{
          Authorization:`Bearer ${localStorage.getItem("token")}`
        }
      }
    );
    const data=await res.json();

    if(data.success){
      setWallet(data.wallet);
    }
  }

  async function loadDeposits(){
    const res=await fetch(
      "http://127.0.0.1:3001/api/deposits",
      {
        headers:{
          Authorization:`Bearer ${localStorage.getItem("token")}`
        }
      }
    );
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

      <div style={{
        background:"#171b22",
        padding:"16px",
        borderRadius:"14px",
        margin:"20px 0",
        border:"1px solid #2a2f3a"
      }}>
        <div><b>👤 المستخدم:</b> {user.username}</div>
        <div><b>📧 البريد:</b> {user.email}</div>
        <div><b>🆔 UID:</b> {user.uid}</div>
      </div>

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


      <hr style={{margin:"30px 0"}}/>

      <div style={{display:"flex",gap:"15px",margin:"20px 0"}}>
        <button onClick={()=>setShowDeposit(true)} style={{flex:1,padding:"15px",background:"#f0b90b",border:"none",borderRadius:"12px",fontSize:"18px"}}>
          📥 Deposit
        </button>

        <button style={{flex:1,padding:"15px",background:"#222",color:"#fff",border:"1px solid #444",borderRadius:"12px",fontSize:"18px"}}>
          📤 Withdraw
        </button>
      </div>

      {showDeposit && (
        <div style={{background:"#171b22",padding:"20px",borderRadius:"14px"}}>
          <h2>📥 إيداع</h2>

          <select
          value={depositCoin}
          onChange={(e)=>setDepositCoin(e.target.value)}
          style={{width:"100%",padding:"10px",marginBottom:"15px"}}
          >
            <option value="TRX">TRX</option>
            <option value="BNB">BNB</option>
            <option value="ETH">ETH</option>
            <option value="USDT-TRC20">USDT TRC20</option>
            <option value="USDT-BEP20">USDT BEP20</option>
            <option value="USDT-ERC20">USDT ERC20</option>
          </select>

          <p>الشبكة: {depositWallets[depositCoin].network}</p>

          <input
          value={depositWallets[depositCoin].address}
          readOnly
          />

          <br/><br/>

          <QRCodeSVG
            value={depositWallets[depositCoin].address}
            size={180}
          />

          <button onClick={()=>{
          navigator.clipboard.writeText(depositWallets[depositCoin].address);
          alert("تم نسخ العنوان");
          }}>📋 نسخ العنوان</button>
        </div>
      )}

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