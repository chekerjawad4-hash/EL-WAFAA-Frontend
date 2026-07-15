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
          height:"420px",
          backgroundImage:`linear-gradient(rgba(5,5,8,.55),rgba(5,5,8,.80)),url(${hero})`,
          backgroundSize:"cover",
          backgroundPosition:"center",
          borderBottomLeftRadius:"30px",
          borderBottomRightRadius:"30px",
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          alignItems:"center",
          textAlign:"center",
          padding:"20px",
          position:"relative",
          zIndex:2,
        }}
      >

        <h1>مرحبًا بك في EL WAFAA</h1>

        <p>
          تابع آخر الأخبار والإعلانات والعملات الجديدة من مكان واحد.
        </p>


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
