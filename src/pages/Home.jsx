import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import HomeTopBar from "../components/home/HomeTopBar";
import SearchBar from "../components/home/SearchBar";
import BalanceCard from "../components/home/BalanceCard";
import HeroSlider from "../components/home/HeroSlider";
import QuickActions from "../components/home/QuickActions";
import MarketCards from "../components/home/MarketCards";
import HomeNews from "../components/home/HomeNews";
import HomeRewards from "../components/home/HomeRewards";
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

//  useEffect(()=>{
//    async function load(){
//      try{
//        const res=await fetch("https://el-wafaa-backend.onrender.com/api/markets");
//        const data=await res.json();
//        setMarkets(data);
//      }catch(e){
//        console.error(e);
//      }finally{
//        setLoading(false);
//      }
//    }
//
//    load();
//  },[]);

  return(

    <>
      <Header />

      <div style={{background:"#0b0f14",minHeight:"100vh",color:"#fff",paddingTop:"48px"}}>

      <HomeTopBar />

      <SearchBar />

      <BalanceCard />

      <HeroSlider />

      <QuickActions />

      <MarketCards />

      <HomeNews />

      <HomeRewards />

      <AnnouncementBar />

       

       

       

<section
style={{
padding:"10px 8px"
}}
>

<h2
style={{
textAlign:"center",
marginBottom:"15px"
}}
>
لماذا EL WAFAA؟
</h2>

<div
style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))",
gap:"10px"
}}
>

<div style={{background:"#171b22",padding:"10px",borderRadius:"10px"}}>
<h3 style={{fontSize:"16px",margin:"5px 0"}}>🔒 أمان عالي</h3>
<p style={{fontSize:"13px",margin:"5px 0"}}>حماية قوية للحسابات والمعاملات.</p>
</div>

<div style={{background:"#171b22",padding:"10px",borderRadius:"10px"}}>
<h3 style={{fontSize:"16px",margin:"5px 0"}}>⚡ تنفيذ سريع</h3>
<p style={{fontSize:"13px",margin:"5px 0"}}>تنفيذ سريع ومستقر لأوامر التداول.</p>
</div>

<div style={{background:"#171b22",padding:"10px",borderRadius:"10px"}}>
<h3 style={{fontSize:"16px",margin:"5px 0"}}>💰 رسوم تنافسية</h3>
<p style={{fontSize:"13px",margin:"5px 0"}}>رسوم منخفضة لتقليل تكلفة التداول.</p>
</div>

<div style={{background:"#171b22",padding:"10px",borderRadius:"10px"}}>
<h3 style={{fontSize:"16px",margin:"5px 0"}}>📞 دعم فني</h3>
<p style={{fontSize:"13px",margin:"5px 0"}}>فريق دعم لمساعدتك عند الحاجة.</p>
</div>

</div>

</section>

 

      <BottomNav />
       

    </div>
    </>

  );

}

export default Home;
