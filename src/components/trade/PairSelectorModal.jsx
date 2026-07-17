import { useEffect, useState } from "react";

function PairSelectorModal({ onClose, onSelect }){

  const [coins,setCoins]=useState([]);
  const [search,setSearch]=useState("");

  useEffect(()=>{

    async function load(){

      try{

        const res=await fetch("http://127.0.0.1:3001/api/markets");
        const data=await res.json();

        if(data.success){
          setCoins(data.markets);
        }

      }catch(e){
        console.log(e);
      }

    }

    load();

  },[]);

  const filtered=coins.filter(c=>
    c.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return(

    <div style={{
      position:"fixed",
      inset:0,
      background:"rgba(0,0,0,.6)",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      zIndex:9999
    }}>

      <div style={{
        width:"92%",
        maxWidth:"420px",
        maxHeight:"80vh",
        overflowY:"auto",
        background:"#171b22",
        borderRadius:"14px",
        padding:"20px",
        color:"#fff"
      }}>

        <div style={{
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center"
        }}>

          <h2>اختيار العملة</h2>

          <button onClick={onClose}>✕</button>

        </div>

        <input
          placeholder="ابحث عن العملة..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          style={{
            width:"100%",
            padding:"12px",
            margin:"15px 0"
          }}
        />

        {filtered.map((coin)=>(
          <div
            key={coin.symbol}
            onClick={()=>{
              onSelect(coin.symbol);
              onClose();
            }}
            style={{
              display:"flex",
              justifyContent:"space-between",
              padding:"12px",
              cursor:"pointer",
              borderBottom:"1px solid #2a2f3a"
            }}
          >

            <div>
              <b>{coin.symbol}</b>
            </div>

            <div style={{textAlign:"right"}}>

              <div>
                {Number(coin.price).toLocaleString()}
              </div>

              <div style={{
                color:Number(coin.change24h)>=0
                ? "#00d26a"
                : "#ff4d4f"
              }}>
                {Number(coin.change24h).toFixed(2)}%
              </div>

            </div>

          </div>
        ))}

      </div>

    </div>

  );

}

export default PairSelectorModal;
