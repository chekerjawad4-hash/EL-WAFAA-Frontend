import { useEffect, useState } from "react";
import { getMarkets } from "../services/api";
import "../styles/MarketCards.css";

function MarketCards({ onSelect }){

    const [markets,setMarkets] = useState([]);

    useEffect(()=>{

        async function load(){

            const result = await getMarkets();

            if(result.success){
                setMarkets(result.markets);
            }

        }

        load();

    },[]);

    return(

        <div className="markets">

            <h2>الأسواق</h2>

            <input
                className="search"
                placeholder="ابحث عن عملة..."
            />

            {
                markets.map((coin,index)=>(

                    <div
                        className="market-card"
                        key={index}
                        onClick={() => onSelect(coin.symbol)}
                        style={{cursor:"pointer"}}
                    >

                        <div>
                            <strong>{coin.symbol}</strong>
                        </div>

                        <div>
                            <p>{coin.price}</p>

                            <span className={
                                coin.change >= 0 ? "green" : "red"
                            }>
                                {coin.change}%
                            </span>

                        </div>

                    </div>

                ))
            }

        </div>

    );

}

export default MarketCards;
