import { useState } from "react";
import { register } from "../services/api";

function Register(){

const [username,setUsername]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [message,setMessage]=useState("");

async function handleRegister(){

const result = await register(
username,
email,
password
);

if(result.success){
setMessage("تم إنشاء الحساب ✅ رقم المستخدم: "+result.userId);
}else{
setMessage("خطأ: "+JSON.stringify(result));
}

}

return(
<div style={{
background:"#111",
color:"#fff",
minHeight:"100vh",
padding:"40px",
textAlign:"center"
}}>

<h1>EL WAFAA</h1>

<h2>إنشاء حساب</h2>

<input
placeholder="اسم المستخدم"
value={username}
onChange={e=>setUsername(e.target.value)}
/>

<br/><br/>

<input
placeholder="البريد الإلكتروني"
value={email}
onChange={e=>setEmail(e.target.value)}
/>

<br/><br/>

<input
type="password"
placeholder="كلمة المرور"
value={password}
onChange={e=>setPassword(e.target.value)}
/>

<br/><br/>

<button onClick={handleRegister}>
تسجيل
</button>

<p>{message}</p>

</div>
);

}

export default Register;
