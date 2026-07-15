import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Header.css";

function Header(){

const navigate = useNavigate();

function logout(){

localStorage.removeItem("token");
localStorage.removeItem("user");

navigate("/login");

}

const [open,setOpen]=useState(false);

return (

<>

<header className="header">

<button 
className="icon-btn"
onClick={()=>setOpen(true)}
>
☰
</button>


<div className="logo">
<h2>EL WAFAA</h2>
</div>


<div className="header-right">

<button className="icon-btn">
🔔
</button>

<button
className="icon-btn"
onClick={()=>navigate("/profile")}
>
👤
</button>

</div>

</header>


{open &&

<div className="menu-overlay"
onClick={()=>setOpen(false)}
>

<div 
className="side-menu"
onClick={e=>e.stopPropagation()}
>

<h2>
EL WAFAA
</h2>


<div onClick={()=>navigate("/rewards")}>🎁 القسائم والمكافآت</div>

<div onClick={()=>navigate("/dzc")}>🪙 DZC Zone</div>

<div onClick={()=>navigate("/games")}>🎮 الألعاب والتحديات</div>

<div onClick={()=>navigate("/referral")}>🤝 الإحالة</div>

<div onClick={()=>navigate("/community")}>📰 المجتمع</div>

<div>🛠️ الدعم</div>

<div>⚙️ الإعدادات</div>

<div onClick={logout}>
🚪 تسجيل الخروج
</div>


<button
onClick={()=>setOpen(false)}
>
إغلاق
</button>


</div>

</div>

}


</>

);

}

export default Header;
