import { useEffect, useState } from "react";
import { getWallet, getDZC, buyDZC, getTransactions } from "../services/api";


function Dashboard(){

    const [wallet,setWallet] = useState(null);
    const [coin,setCoin] = useState(null);
    const [amount,setAmount] = useState("");
    const [message,setMessage] = useState("");
    const [transactions,setTransactions] = useState([]);

    const user = JSON.parse(
        localStorage.getItem("user")
    );


    async function loadData(){

        const w = await getWallet(user.id);
        const c = await getDZC();
        const t = await getTransactions(user.id);

        setWallet(w.wallet);
        setCoin(c.coin);
        setTransactions(t.transactions);

    }


    useEffect(()=>{

        loadData();

    },[]);



    async function handleBuy(){

        const result = await buyDZC(
            user.id,
            Number(amount)
        );


        if(result.success){

            setMessage(
                "تم الشراء بنجاح ✅"
            );

            loadData();

        }else{

            setMessage(
                result.error
            );

        }

    }



    return (

        <div style={{
            background:"#111",
            color:"#fff",
            minHeight:"100vh",
            padding:"30px",
            textAlign:"center"
        }}>


        <h1>
            EL WAFAA Exchange
        </h1>


        <h2>
            مرحبا {user.username}
        </h2>


        {
            wallet &&

            <>
            <h3>
                💵 USDT : {wallet.usdt}
            </h3>

            <h3>
                🪙 DZC : {wallet.dzc}
            </h3>
            </>
        }



        {
            coin &&

            <h3>
                سعر DZC : {coin.price} USDT
            </h3>
        }



        <hr/>


        <h2>
            شراء DZC
        </h2>


        <input
            type="number"
            placeholder="كمية DZC"
            value={amount}
            onChange={
                e=>setAmount(e.target.value)
            }
        />


        <br/><br/>


        <button onClick={handleBuy}>
            شراء
        </button>


        <p>
            {message}
        </p>


        <hr/>

        <h2>
            📜 سجل المعاملات
        </h2>

        {
            transactions.map((tx)=>(
                <div key={tx.id}>
                    {tx.type} - {tx.amount} {tx.currency}
                </div>
            ))
        }

        </div>

    );

}


export default Dashboard;
