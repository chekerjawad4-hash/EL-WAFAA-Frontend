import { Link } from "react-router-dom";
import "../styles/BottomNav.css";

function BottomNav(){

    return(
        <div className="bottom-nav">

            <Link to="/" style={{padding:"10px",background:"red"}}>
                🏠
                <span>الرئيسية</span>
            </Link>

            <Link to="/markets" style={{padding:"10px",background:"red"}}>
                📊
                <span>الأسواق</span>
            </Link>

            <Link to="/trade">
                📈
                <span>تداول</span>
            </Link>

            <Link to="/futures">
                ⚡
                <span>العقود الآجلة</span>
            </Link>

            <Link to="/assets">
                💼
                <span>الأصول</span>
            </Link>

        </div>
    );

}

export default BottomNav;
