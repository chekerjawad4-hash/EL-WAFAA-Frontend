import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import AnnouncementBar from "../components/AnnouncementBar";
import BottomNav from "../components/BottomNav";
import NewsSection from "../components/NewsSection";
import HomeMenu from "../components/HomeMenu";
import TrendingCoins from "../components/TrendingCoins";
import PostsSection from "../components/PostsSection";
import RewardsSection from "../components/RewardsSection";
import UserCard from "../components/UserCard";

import hero from "../assets/hero.png";
import "../styles/Hero.css";

function Home(){

  const navigate = useNavigate();

  return(

    <div style={{background:"#0b0f14",minHeight:"100vh",color:"#fff"}}>

      <Header />

      <AnnouncementBar />

      <div style={{display:"flex",gap:"15px",margin:"20px"}}>
        <button onClick={()=>navigate("/trade-new")} style={{padding:"14px 25px",background:"#f0b90b",border:"none",borderRadius:"12px",fontSize:"16px",fontWeight:"bold"}}>
          🚀 ابدأ التداول
        </button>

        <button onClick={()=>navigate("/assets")} style={{padding:"14px 25px",background:"#171b22",color:"#fff",border:"1px solid #333",borderRadius:"12px",fontSize:"16px"}}>
          💰 إيداع
        </button>
      </div>

<section
  className="hero"
  style={{
    minHeight:"500px",
    backgroundImage:`linear-gradient(rgba(5,5,8,.45),rgba(5,5,8,.85)),url(${hero})`,
    backgroundSize:"cover",
    backgroundPosition:"center",
    borderBottomLeftRadius:"30px",
    borderBottomRightRadius:"30px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center",
    padding:"30px"
  }}
>

<h1 style={{
fontSize:"42px",
marginBottom:"10px"
}}>
EL WAFAA Exchange
</h1>

<p style={{
maxWidth:"700px",
fontSize:"18px",
color:"#ddd"
}}>
منصة احترافية لتداول العملات الرقمية مع أسعار مباشرة ورسوم منخفضة.
</p>

<div style={{
display:"flex",
gap:"15px",
marginTop:"25px",
flexWrap:"wrap",
justifyContent:"center"
}}>

<button
onClick={()=>navigate("/trade-new")}
style={{
padding:"14px 28px",
background:"#f0b90b",
border:"none",
borderRadius:"12px",
fontWeight:"bold",
cursor:"pointer"
}}
>
🚀 ابدأ التداول
</button>

<button
onClick={()=>navigate("/assets")}
style={{
padding:"14px 28px",
background:"#171b22",
color:"#fff",
border:"1px solid #333",
borderRadius:"12px",
cursor:"pointer"
}}
>
💰 إيداع USDT
</button>

</div>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))",
gap:"15px",
width:"100%",
maxWidth:"900px",
marginTop:"40px"
}}>

<div style={{background:"#171b22",padding:"18px",borderRadius:"12px"}}>
<h3>200+</h3>
<span>عملة</span>
</div>

<div style={{background:"#171b22",padding:"18px",borderRadius:"12px"}}>
<h3>24/7</h3>
<span>تداول</span>
</div>

<div style={{background:"#171b22",padding:"18px",borderRadius:"12px"}}>
<h3>100%</h3>
<span>حماية</span>
</div>

<div style={{background:"#171b22",padding:"18px",borderRadius:"12px"}}>
<h3>DZC</h3>
<span>العملة الرسمية</span>
</div>

</div>

</section>

      <HomeMenu />



      <NewsSection />

      <TrendingCoins />

      <PostsSection />

      <BottomNav />
      <RewardsSection />

    </div>

  );

}

export default Home;
