import "./SearchBar.css";

export default function SearchBar(){
  return(
    <div className="search-box">
      <span className="search-icon">🔍</span>

      <input
        type="text"
        placeholder="ابحث عن العملات..."
      />

      <button className="scan-btn">⌁</button>
    </div>
  );
}
