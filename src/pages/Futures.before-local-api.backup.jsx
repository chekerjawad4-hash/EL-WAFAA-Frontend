import { useEffect, useState } from "react";
import { getMarkets } from "../services/api";
import "../styles/Futures.css";
import ChartCard from "../components/ChartCard";
import FuturesHeader from "../components/futures/FuturesHeader";

function Futures(){

    const [symbol,setSymbol] = useState("BTCUSDT");
    const [price,setPrice] = useState(0);
    const [amount,setAmount] = useState("");
    const [leverage,setLeverage] = useState(5);
    const [positions,setPositions] = useState([]);

    async function loadPositions(){

        const res = await fetch(
            "http://127.0.0.1:3000/api/futures/positions",
            {
                headers:{
                    Authorization:`Bearer ${localStorage.getItem("token")}`
                }
            }
        );

        const data = await res.json();

        if(data.success){
            setPositions(data.positions);
        }

    }

    async function closeTrade(id){

        const res = await fetch(
            "http://127.0.0.1:3000/api/futures/close",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    Authorization:`Bearer ${localStorage.getItem("token")}`
                },
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({id})
            }
        );

        const data = await res.json();

        if(data.success){
            loadPositions();
        }else{
            alert("فشل إغلاق الصفقة");
        }

    }

    async function openTrade(side){

        const response = await fetch(
            "http://127.0.0.1:3000/api/futures/open",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    Authorization:`Bearer ${localStorage.getItem("token")}`
                },
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    symbol,
                    side,
                    amount:Number(amount),
                    leverage:Number(leverage),
                    price
                })
            }
        );

        const data = await response.json();

        alert(
            data.success
            ? "تم فتح الصفقة"
            : "خطأ في فتح الصفقة"
        );

    }

    useEffect(()=>{

        async function load(){

            const result = await getMarkets();

            if(result.success){

                const coin = result.markets.find(
                    item => item.symbol === symbol
                );

                if(coin){
                    setPrice(coin.price);
                }

            }

        }

        load();

        const timer = setInterval(load,2000);

        return ()=>clearInterval(timer);

    },[symbol]);


    return(

        <div className="futures-page">
<div className="futures-header-placeholder">Futures Header</div>
        <div className="futures-chart" style={{
            color:"white",
            padding:"20px"
        }}>

            <h1>⚡ العقود الآجلة</h1>

            <ChartCard symbol={symbol} onSymbolChange={setSymbol} />

            <button
            onClick={loadPositions}
            style={{
                padding:"10px",
                marginBottom:"15px"
            }}>
                تحديث الصفقات
            </button>


              <div className="futures-chart" style={{
                  background:"#111820",
                  padding:"20px",
                  borderRadius:"15px"
              }}>


                <h3>العملة</h3>

                <select
                    value={symbol}
                    onChange={e=>setSymbol(e.target.value)}
                    style={{
                        width:"100%",
                        padding:"12px",
                        background:"#090b10",
                        color:"white"
                    }}
                >

                    <option value="BTCUSDT">BTC / USDT</option>
                    <option value="ETHUSDT">ETH / USDT</option>
                    <option value="BNBUSDT">BNB / USDT</option>
                    <option value="SOLUSDT">SOL / USDT</option>
                    <option value="DZCUSDT">DZC / USDT</option>

                </select>


                <h2>
                    السعر الحالي: {price} USDT
                </h2>

                <input
                    type="number"
                    placeholder="المبلغ USDT"
                    value={amount}
                    onChange={e=>setAmount(e.target.value)}
                    style={{
                        width:"100%",
                        padding:"12px",
                        marginBottom:"15px",
                        background:"#090b10",
                        color:"white"
                    }}
                />

                <select
                    value={leverage}
                    onChange={e=>setLeverage(e.target.value)}
                    style={{
                        width:"100%",
                        padding:"12px",
                        background:"#090b10",
                        color:"white"
                    }}
                >
                    <option value="1">1x</option>
                    <option value="5">5x</option>
                    <option value="10">10x</option>
                    <option value="20">20x</option>
                </select>

                <h3>
                    حجم الصفقة: {amount * leverage || 0} USDT
                </h3>


                  <div className="futures-chart" style={{
                      display:"flex",
                      gap:"10px"
                  }}>

                    <button onClick={()=>openTrade("LONG")} style={{
                        flex:1,
                        padding:"15px",
                        background:"green",
                        color:"white",
                        border:0,
                        borderRadius:"10px"
                    }}>
                        Long شراء
                    </button>


                    <button onClick={()=>openTrade("SHORT")} style={{
                        flex:1,
                        padding:"15px",
                        background:"#c1121f",
                        color:"white",
                        border:0,
                        borderRadius:"10px"
                    }}>
                        Short بيع
                    </button>

                </div>


              </div>
            </div>

            <h2>📌 الصفقات المفتوحة</h2>

            {
                positions.map((p)=>(
                    <div key={p.id}
                    style={{
                        background:"#111820",
                        padding:"15px",
                        margin:"10px 0",
                        borderRadius:"10px"
                    }}>
                        <h3>{p.symbol}</h3>
                        <p>الاتجاه: {p.side}</p>
                        <p>المبلغ: {p.amount} USDT</p>
                        <p>الرافعة: {p.leverage}x</p>
                        <p>سعر الدخول: {p.entryPrice}</p>

                        <p
                            style={{
                                color:
                                    (
                                        (p.side === "LONG"
                                            ? price - p.entryPrice
                                            : p.entryPrice - price
                                        ) >= 0
                                    )
                                        ? "#00d26a"
                                        : "#ff4d4f",
                                fontWeight:"bold"
                            }}
                        >
                            PNL: {
                                (
                                    (
                                        p.side === "LONG"
                                            ? price - p.entryPrice
                                            : p.entryPrice - price
                                    ) * p.amount * p.leverage
                                ).toFixed(2)
                            } USDT
                        </p>

                        <button
                            onClick={()=>closeTrade(p.id)}
                            style={{
                                marginTop:"10px",
                                width:"100%",
                                padding:"10px",
                                background:"#c1121f",
                                color:"white",
                                border:0,
                                borderRadius:"8px"
                            }}>
                            ❌ إغلاق الصفقة
                        </button>
                    </div>
                ))
            }

        </div>

    );

}

export default Futures;
