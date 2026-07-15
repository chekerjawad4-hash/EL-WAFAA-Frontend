import { useState } from "react";
import { login } from "../services/api";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login(){

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [message,setMessage]=useState("");
const navigate=useNavigate();

async function handleLogin(){

if(!email || !password){
setMessage("أدخل البريد وكلمة المرور ❌");
return;
}

const result=await login(email,password);

if(result.success){

localStorage.setItem(
"user",
JSON.stringify(result.user)
);

localStorage.setItem(
"token",
result.token
);

setMessage("تم الدخول بنجاح ✅");

setTimeout(()=>{
navigate("/");
},800);

}else{

setMessage("بيانات الدخول غير صحيحة ❌");

}

}


return(

<div className="login-page">

<div className="login-card">

<div className="logo">
<h1>EL WAFAA</h1>
</div>

<h2>تسجيل الدخول</h2>

<p className="subtitle">
مرحباً بك في منصة التداول
</p>


<input
type="email"
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


<button onClick={handleLogin}>
دخول
</button>


<p className="message">
{message}
</p>


<div className="register-link">
ليس لديك حساب؟
<a href="/register">
إنشاء حساب
</a>
</div>


</div>

</div>

);

}

export default Login;
