import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
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

  const [markets,setMarkets]=useState([]);
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
    async function load(){
      try{
        const res=await fetch("https://el-wafaa-backend.onrender.com/api/markets");
        const data=await res.json();
        setMarkets(data);
      }catch(e){
        console.error(e);
      }finally{
        setLoading(false);
      }
    }

    load();
  },[]);

  return(

    <div style={{background:"#0b0f14",minHeight:"100vh",color:"#fff"}}>

      <Header />

      <AnnouncementBar />

      <div style={{display:"flex",overflowX:"auto",gap:"18px",padding:"10px 20px",background:"#11161d",borderTop:"1px solid #222",borderBottom:"1px solid #222"}}>
        {markets.slice(0,10).map((coin)=>( 
          <div key={coin.symbol} style={{minWidth:"140px",flex:"0 0 auto"}}>
            <div style={{fontWeight:"bold"}}>{coin.symbol}</div>
            <div>{Number(coin.price).toLocaleString()}</div>
            <div style={{color:Number(coin.change24h)>=0?"#0ecb81":"#f6465d"}}>
              {Number(coin.change24h).toFixed(2)}%
            </div>
          </div>
        ))}
      </div>

      <div style={{display:"flex",gap:"15px",margin:"20px"}}>
        <button onClick={()=>navigate("/trade")} style={{padding:"14px 25px",background:"#f0b90b",border:"none",borderRadius:"12px",fontSize:"16px",fontWeight:"bold"}}>
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
onClick={()=>navigate("/trade")}
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

      <div style={{display:"flex",gap:"15px",overflowX:"auto",padding:"20px"}}>

        <div style={{background:"#171b22",minWidth:"170px",flex:"0 0 auto",padding:"18px",borderRadius:"14px",textAlign:"center"}}>
          <h3>{loading?"...":markets.length}</h3>
          <p>📈 الأسواق</p>
        </div>

        <div style={{background:"#171b22",minWidth:"170px",flex:"0 0 auto",padding:"18px",borderRadius:"14px",textAlign:"center"}}>
          <h3>{loading?"...":markets.length}</h3>
          <p>🪙 العملات</p>
        </div>

        <div style={{background:"#171b22",minWidth:"170px",flex:"0 0 auto",padding:"18px",borderRadius:"14px",textAlign:"center"}}>
          <h3>{loading?"⏳":"🟢"}</h3>
          <p>{loading?"جاري الاتصال":"متصل بالخادم"}</p>
        </div>

      </div>

      <HomeMenu />



      <NewsSection />

      <TrendingCoins />

<section
style={{
padding:"30px 20px"
}}
>

<h2
style={{
textAlign:"center",
marginBottom:"25px"
}}
>
لماذا EL WAFAA؟
</h2>

<div
style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
gap:"18px"
}}
>

<div style={{background:"#171b22",padding:"20px",borderRadius:"14px"}}>
<h3>🔒 أمان عالي</h3>
<p>حماية قوية للحسابات والمعاملات.</p>
</div>

<div style={{background:"#171b22",padding:"20px",borderRadius:"14px"}}>
<h3>⚡ تنفيذ سريع</h3>
<p>تنفيذ سريع ومستقر لأوامر التداول.</p>
</div>

<div style={{background:"#171b22",padding:"20px",borderRadius:"14px"}}>
<h3>💰 رسوم تنافسية</h3>
<p>رسوم منخفضة لتقليل تكلفة التداول.</p>
</div>

<div style={{background:"#171b22",padding:"20px",borderRadius:"14px"}}>
<h3>📞 دعم فني</h3>
<p>فريق دعم لمساعدتك عند الحاجة.</p>
</div>

</div>

</section>

<PostsSection />

      <BottomNav />
      <RewardsSection />

    </div>

  );

}

export default Home;
