import { Link } from "react-router-dom";
import "./BottomNav.css";

export default function BottomNav(){

return(

<nav className="bottom-nav">

<button>🏠<span>Home</span></button>

<button>📈<span>Markets</span></button>

<button className="active">💹<span>Trade</span></button>

<Link to="/futures" className="nav-link"><button>📄<span>Futures</span></button></Link>

<button>👤<span>Wallet</span></button>

</nav>

);

}
