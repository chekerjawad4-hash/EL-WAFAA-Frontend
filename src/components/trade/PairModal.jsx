import { useState } from "react";
import tradingPairs from "../../data/tradingPairs";
import "./PairModal.css";

function PairModal({ open, onClose, onSelect }) {

  const [search, setSearch] = useState("");

  if (!open) return null;

  const filtered = tradingPairs.filter(pair =>
    pair.symbol.toLowerCase().includes(search.toLowerCase()) ||
    pair.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pair-overlay" onClick={onClose}>

      <div
        className="pair-modal"
        onClick={(e) => e.stopPropagation()}
      >

        <div className="pair-handle"></div>

        <h2>اختيار زوج التداول</h2>

        <input
          className="pair-search"
          placeholder="🔍 ابحث عن عملة..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {filtered.map((pair) => (

          <div
            key={pair.symbol}
            className="pair-item"
            onClick={() => {
              onSelect(pair);
              onClose();
            }}
          >

            <div>
              <strong>{pair.symbol}</strong>
              <br />
              <small>{pair.name}</small>
            </div>

            <div>
              <strong>{pair.price}</strong>
              <br />
              <small>{pair.change}</small>
            </div>

          </div>

        ))}

      </div>

    </div>
  );

}

export default PairModal;
