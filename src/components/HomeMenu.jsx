import { Link } from "react-router-dom";
import "../styles/HomeMenu.css";

function HomeMenu(){

  return(
    <div className="home-menu">

      <Link to="/markets">
        🔥
        <span>العملات</span>
      </Link>

      <Link to="/news">
        📰
        <span>الأخبار</span>
      </Link>

      <Link to="/posts">
        📢
        <span>المنشورات</span>
      </Link>

      <Link to="/rewards">
        🎁
        <span>المكافآت</span>
      </Link>

    </div>
  );

}

export default HomeMenu;
