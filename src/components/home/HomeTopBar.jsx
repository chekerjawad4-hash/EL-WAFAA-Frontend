import "./Home.css";

export default function HomeTopBar(){
  return(
    <div className="home-topbar">
      <button className="tab active">
        منصة التداول
      </button>

      <button className="tab">
        المحفظة
      </button>
    </div>
  );
}
