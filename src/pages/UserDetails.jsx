import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/UserDetails.css";

export default function UserDetails(){

const {id}=useParams();

const [user,setUser]=useState(null);

const loadUser=()=>{

const token=localStorage.getItem("token");

fetch(`https://el-wafaa-backend.onrender.com/api/admin/user/${id}`,{
headers:{
Authorization:`Bearer ${token}`
}
})
.then(res=>res.json())
.then(data=>setUser(data.user))
.catch(console.error);

};


useEffect(()=>{

loadUser();

},[id]);


const updateBalance = async (currency,action)=>{

const amount=prompt(`Amount ${currency}`);

if(!amount)return;

const token=localStorage.getItem("token");

const res=await fetch(
`https://el-wafaa-backend.onrender.com/api/admin/user/${id}/balance`,
{
method:"POST",
headers:{
"Content-Type":"application/json",
Authorization:`Bearer ${token}`
},
body:JSON.stringify({
currency,
amount:Number(amount),
action
})
}
);


const data=await res.json();


if(data.success){

setUser({
...user,
usdt:data.usdt,
dzc:data.dzc
});

}else{

alert(data.error||"Failed");

}

};


if(!user){

return <h2>Loading...</h2>;

}


return(

<div className="user-details">

<h1>User Details</h1>

<div className="user-card">

<p><b>ID:</b> {user.id}</p>
<p><b>Username:</b> {user.username}</p>
<p><b>Email:</b> {user.email}</p>
<p><b>UID:</b> {user.uid}</p>

<hr/>

<p><b>USDT:</b> {user.usdt}</p>
<p><b>DZC:</b> {user.dzc}</p>

<button onClick={()=>updateBalance("USDT","add")}>
+ USDT
</button>

<button onClick={()=>updateBalance("USDT","subtract")}>
- USDT
</button>

<button onClick={()=>updateBalance("DZC","add")}>
+ DZC
</button>

<button onClick={()=>updateBalance("DZC","subtract")}>
- DZC
</button>


</div>

</div>

);

}
