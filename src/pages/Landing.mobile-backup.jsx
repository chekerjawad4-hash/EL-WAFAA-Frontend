import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/Landing.css";

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

    <div className="landing">

      <div className="hero">

        <h1>💎 EL WAFAA</h1>

        <h2>منصة تداول العملات الرقمية المستقبلية</h2>

        <p>
          تداول العملات الرقمية، احفظ أصولك، واستعمل عملة DZC داخل منظومة EL WAFAA.
        </p>

        <div className="stats-card">
          <h2>👥 {users}+</h2>
          <p>مستخدم مسجل</p>
        </div>

        <div className="action-buttons">

          <button
            className="btn-primary"
            onClick={()=>navigate("/register")}
          >
            🚀 إنشاء حساب
          </button>

          <button
            className="btn-secondary"
            onClick={()=>navigate("/login")}
          >
            🔐 تسجيل الدخول
          </button>

        </div>

      </div>

      <section className="features">

        <h2>لماذا EL WAFAA ؟</h2>

        <div className="feature-card">📈 تداول العملات الرقمية</div>

        <div className="feature-card">💰 محفظة رقمية آمنة</div>

        <div className="feature-card">🪙 دعم عملة DZC Coin</div>

        <div className="feature-card">🚀 تداول العقود الآجلة</div>

        <div className="feature-card">🔒 حماية وأمان متقدم</div>

        <div className="feature-card">🌍 منصة حديثة وسريعة</div>

      </section>

    </div>

  );

}

export default Landing;
