import { useEffect,useState } from "react";
import "./PairSelectorNew.css";

function PairSelectorNew({onSelect}){

const [markets,setMarkets]=useState([]);
const [search,setSearch]=useState("");


useEffect(()=>{

fetch("https://el-wafaa-backend.onrender.com/api/markets")
.then(res=>res.json())
.then(data=>{

if(data.success){

setMarkets(
data.markets.map(m=>m.symbol)
);

}

});

},[]);


const filtered=markets.filter(item=>
item.toLowerCase().includes(search.toLowerCase())
);


return(

<div className="pair-selector-new">

<input
placeholder="Search coin..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>


<div className="pairs-list">

{filtered.slice(0,100).map(item=>(

<div
key={item}
onClick={()=>onSelect(item)}
>
{item}
</div>

))}

</div>


</div>

);

}

export default PairSelectorNew;
