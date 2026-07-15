import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <button className="icon-btn">
        ☰
      </button>

      <div className="logo">
        <span className="logo-red">W</span>
        <h2>EL WAFAA</h2>
      </div>

      <div className="header-right">
        <button className="icon-btn">🔔</button>
        <button className="icon-btn">👤</button>
      </div>
    </header>
  );
}

export default Header;
