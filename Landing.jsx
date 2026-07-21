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
minHeight:"100vh",
background:"linear-gradient(180deg,#05070a,#101722)",
color:"#fff",
padding:"30px",
fontFamily:"Arial",
textAlign:"center"
}}>


<h1 style={{
fontSize:"55px",
marginTop:"30px",
background:"linear-gradient(90deg,#00d4ff,#00ff88)",
WebkitBackgroundClip:"text",
color:"transparent"
}}>
💎 EL WAFAA
</h1>


<h2>
منصة التداول الرقمية المستقبلية
</h2>


<p style={{
fontSize:"18px",
color:"#aaa"
}}>
تداول العملات الرقمية، احفظ أصولك، واستعمل DZC داخل منظومتنا
</p>


<div style={{
margin:"35px auto",
padding:"25px",
maxWidth:"350px",
background:"#161d29",
borderRadius:"20px",
boxShadow:"0 0 25px #000"
}}>

<h1>
👥 {users}
</h1>

<p>
مستخدم مسجل
</p>

</div>



<button
onClick={()=>navigate("/register")}
style={{
padding:"15px 35px",
margin:"10px",
borderRadius:"12px",
border:"none",
background:"#00c896",
color:"#fff",
fontSize:"18px"
}}
>
🚀 إنشاء حساب
</button>



<button
onClick={()=>navigate("/login")}
style={{
padding:"15px 35px",
margin:"10px",
borderRadius:"12px",
border:"1px solid #00c896",
background:"transparent",
color:"#fff",
fontSize:"18px"
}}
>
🔐 تسجيل الدخول
</button>



<h2 style={{marginTop:"60px"}}>
مميزات EL WAFAA
</h2>


<div style={{
display:"grid",
gap:"15px"
}}>


<div style={card}>
📈 تداول سريع وآمن
</div>

<div style={card}>
💰 محفظة رقمية متطورة
</div>

<div style={card}>
🪙 DZC Coin
</div>

<div style={card}>
🔒 حماية الحساب
</div>


</div>


</div>

)

}


const card={
background:"#161d29",
padding:"20px",
borderRadius:"15px",
fontSize:"18px"
};


export default Landing;

