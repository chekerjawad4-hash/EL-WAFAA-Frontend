import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Landing(){

const navigate = useNavigate();

const [users,setUsers]=useState(0);

useEffect(()=>{

fetch("http://localhost:3001/api/stats")
.then(res=>res.json())
.then(data=>setUsers(data.users))
.catch(()=>{});

},[]);

return(
<div style={{
background:"#0b0f14",
minHeight:"100vh",
color:"#fff",
padding:"30px",
textAlign:"center"
}}>

<h1 style={{fontSize:"45px"}}>
💎 EL WAFAA
</h1>

<h2>
منصة تداول العملات الرقمية المستقبلية
</h2>

<p>
تداول، احفظ أصولك، واستخدم عملة DZC داخل منظومتنا
</p>

<button onClick={()=>navigate("/register")}
style={{padding:"15px 30px",margin:"10px"}}>
إنشاء حساب
</button>

<button onClick={()=>navigate("/login")}
style={{padding:"15px 30px",margin:"10px"}}>
تسجيل الدخول
</button>


<section style={{marginTop:"50px"}}>
<h2>
👥 {users} مستخدم مسجل
</h2>

<h2>مميزات المنصة</h2>

<p>📈 تداول العملات</p>
<p>💰 محفظة رقمية</p>
<p>🪙 DZC Coin</p>
<p>🔐 أمان وحماية</p>

</section>


</div>
)

}

export default Landing;
