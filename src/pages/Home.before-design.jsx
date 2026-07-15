import Header from "../components/Header";
import AnnouncementBar from "../components/AnnouncementBar";
import BottomNav from "../components/BottomNav";
import NewsSection from "../components/NewsSection";
import HomeMenu from "../components/HomeMenu";
import TrendingCoins from "../components/TrendingCoins";
import PostsSection from "../components/PostsSection";
import RewardsSection from "../components/RewardsSection";

import hero from "../assets/hero.png";
import "../styles/Hero.css";

function Home(){

  return(

    <div style={{background:"#0b0f14",minHeight:"100vh",color:"#fff"}}>

      <Header />

      <AnnouncementBar />


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
          padding:"20px"
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

      <RewardsSection />
      <BottomNav />

    </div>

  );

}

export default Home;
