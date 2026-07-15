import { useEffect, useState } from "react";
import "./OpenPositions.css";

export default function OpenPositions(){

const [positions,setPositions]=useState([]);

const loadPositions=()=>{
fetch("https://el-wafaa-backend.onrender.com/api/futures/positions")
.then(res=>res.json())
.then(data=>setPositions(data))
.catch(console.error);
};

useEffect(()=>{
loadPositions();

const timer=setInterval(loadPositions,1000);

return ()=>clearInterval(timer);
},[]);

return(

<div className="open-positions">

<h3>Open Positions ({positions.length})</h3>

{positions.length===0 ? (

<p>No open positions</p>

) : (

positions.map(position=>(
<div className="position-row" key={position.id}>

<div><strong>{position.symbol}</strong></div>

<div>{position.side}</div>

<div>Price: {position.price}</div>

<div>Amount: {position.amount}</div>

</div>
))

)}

</div>

);

}
