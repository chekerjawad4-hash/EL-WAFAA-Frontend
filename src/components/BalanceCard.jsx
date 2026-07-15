import "../styles/BalanceCard.css";

function BalanceCard() {

    return (

        <div className="balance-card">

            <p className="balance-title">
                إجمالي الأصول
            </p>

            <h1 className="balance-value">
                38.00 USDT
            </h1>

            <div className="balance-info">

                <div>
                    <span>DZC</span>
                    <h3>100</h3>
                </div>

                <div>
                    <span>USDT</span>
                    <h3>38</h3>
                </div>

            </div>

        </div>

    );

}

export default BalanceCard;
