import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/Landing.css";

function Landing(){

  const navigate = useNavigate();
  const [users,setUsers]=useState(22682);

  useEffect(()=>{

    fetch("http://localhost:3001/api/stats")
      .then(r=>r.json())
      .then(d=>setUsers(d.users))
      .catch(()=>{});

  },[]);

  return(

    <div className="landing">

      <div className="landing-hero">

        <div className="landing-logo">
          💎
        </div>

        <h1>EL WAFAA</h1>

        <p className="landing-subtitle">
          منصة تداول العملات الرقمية المستقبلية
        </p>

        <p className="landing-description">
          تداول العملات الرقمية، احفظ أصولك، واستعمل عملة DZC داخل منظومة EL WAFAA.
        </p>

        <div className="users-card">
          <span className="users-number">{users}+</span>
          <span className="users-text">مستخدم مسجل</span>
        </div>

        <button
          className="btn btn-primary"
          onClick={()=>navigate("/register")}
        >
          🚀 إنشاء حساب
        </button>

        <button
          className="btn btn-secondary"
          onClick={()=>navigate("/login")}
        >
          🔐 تسجيل الدخول
        </button>

      </div>

    </div>

  );

}

export default Landing;
