import { useState } from "react";
import { register } from "../services/api";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register(){

const [username,setUsername]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [message,setMessage]=useState("");

const navigate=useNavigate();

async function handleRegister(){

try{

const result = await register(
username,
email,
password
);

console.log("REGISTER RESULT:", result);

if(result.success){

setMessage("تم إنشاء الحساب ✅");

setTimeout(()=>{
navigate("/login");
},1000);

}else{

setMessage("خطأ: "+JSON.stringify(result));

}

}catch(e){

setMessage("خطأ اتصال: "+e.message);

}

}


return(

<div className="register-page">

<div className="register-card">

<h1>
EL WAFAA
</h1>

<h2>
إنشاء حساب
</h2>

<p>
ابدأ التداول معنا
</p>


<input
placeholder="اسم المستخدم"
value={username}
onChange={e=>setUsername(e.target.value)}
/>


<input
placeholder="البريد الإلكتروني"
value={email}
onChange={e=>setEmail(e.target.value)}
/>


<input
type="password"
placeholder="كلمة المرور"
value={password}
onChange={e=>setPassword(e.target.value)}
/>


<button onClick={handleRegister}>
إنشاء الحساب
</button>


<div className="message">
{message}
</div>


<div className="login-link">
لديك حساب؟
<a href="/login">
تسجيل الدخول
</a>
</div>


</div>

</div>

);

}

export default Register;
