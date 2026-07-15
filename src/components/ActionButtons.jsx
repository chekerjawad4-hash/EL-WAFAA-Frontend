import "../styles/ActionButtons.css";

function ActionButtons() {
  return (
    <div className="actions">

      <button className="action deposit">
        <span>⬇️</span>
        <p>إيداع</p>
      </button>

      <button className="action transfer">
        <span>🔄</span>
        <p>تحويل</p>
      </button>

      <button className="action withdraw">
        <span>⬆️</span>
        <p>سحب</p>
      </button>

      <button className="action buy">
        <span>🪙</span>
        <p>شراء DZC</p>
      </button>

    </div>
  );
}

export default ActionButtons;
