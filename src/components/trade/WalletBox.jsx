import { useEffect, useState } from "react";
import { getWallet } from "../../services/api";
import "./WalletBox.css";

function WalletBox({ userId, refresh }){

  const [wallet,setWallet] = useState({
    usdt:0,
    dzc:0
  });

  useEffect(()=>{

    async function loadWallet(){
      const data = await getWallet(userId);

      if(data.success && data.wallet){
        setWallet(data.wallet);
      }
    }

    loadWallet();

  },[userId]);


  return(
    <div className="wallet-box">

      <h3>💼 المحفظة</h3>

      <div>
        USDT:
        <strong>{wallet.usdt}</strong>
      </div>

      <div>
        DZC:
        <strong>{wallet.dzc}</strong>
      </div>

    </div>
  );
}

export default WalletBox;
