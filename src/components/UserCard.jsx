import { useNavigate } from "react-router-dom";

function UserCard(){

const navigate = useNavigate();

const user = JSON.parse(
localStorage.getItem("user")
);

if(!user){

return(
<div style={{
margin:"20px",
padding:"15px",
background:"#11161d",
borderRadius:"15px",
textAlign:"center"
}}>

<p>أنت غير مسجل الدخول</p>

<button
onClick={()=>navigate("/login")}
style={{
padding:"10px 25px",
background:"#e60000",
color:"#fff",
border:"0",
borderRadius:"10px"
}}
>
تسجيل الدخول
</button>

</div>
);

}


return(

<div style={{
margin:"20px",
padding:"15px",
background:"#11161d",
borderRadius:"15px"
}}>

<h3>
مرحباً 👋 {user.username}
</h3>

<p>
حساب EL WAFAA مفعل ✅
</p>

</div>

);

}

export default UserCard;
