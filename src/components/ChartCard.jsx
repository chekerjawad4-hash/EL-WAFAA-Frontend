import { useEffect, useRef, useState } from "react";
import { createChart, CandlestickSeries } from "lightweight-charts";
import { getCandles } from "../services/api";
import "../styles/ChartCard.css";

function ChartCard({ symbol, onSymbolChange }) {

    const chartContainer = useRef(null);
    const chartRef = useRef(null);
    const seriesRef = useRef(null);

    const [interval, setIntervalValue] = useState("1h");
    const [lastPrice,setLastPrice]=useState(0);
    const [change,setChange]=useState(0);

    useEffect(() => {

        chartRef.current = createChart(chartContainer.current, {
            height: 300,
            layout: {
                background: { color: "#090b10" },
                textColor: "#ffffff"
            }
        });

        seriesRef.current = chartRef.current.addSeries(CandlestickSeries, {
            upColor: "#00e676",
            downColor: "#ff5252",
            borderVisible: false,
            wickUpColor: "#00e676",
            wickDownColor: "#ff5252"
        });

        return () => {
            chartRef.current.remove();
        };

    }, []);

    useEffect(() => {

        async function loadCandles() {

            console.log("LOAD CANDLES:", symbol, interval);
            const result = await getCandles(symbol, interval);

            console.log("CANDLE RESULT:", result);
            if (result.success) {
                seriesRef.current.setData(result.candles);

                const first=result.candles[0].close;
                const last=result.candles[result.candles.length-1].close;

                setLastPrice(last);

                setChange(
                    (((last-first)/first)*100).toFixed(2)
                );

                chartRef.current.timeScale().fitContent();
            }

        }

        if (seriesRef.current) {
            loadCandles();
        }

    }, [symbol, interval]);

    return (

        <div className="chart-card">

            <div className="chart-header">

                <select
                    value={symbol}
                    onChange={e => onSymbolChange(e.target.value)}
                >
                    <option value="BTCUSDT">BTC / USDT</option>
                    <option value="ETHUSDT">ETH / USDT</option>
                    <option value="BNBUSDT">BNB / USDT</option>
                    <option value="SOLUSDT">SOL / USDT</option>
                    <option value="XRPUSDT">XRP / USDT</option>
                    <option value="ADAUSDT">ADA / USDT</option>
                    <option value="DOGEUSDT">DOGE / USDT</option>
                    <option value="TRXUSDT">TRX / USDT</option>
                    <option value="TONUSDT">TON / USDT</option>
                    <option value="AVAXUSDT">AVAX / USDT</option>
                    <option value="LINKUSDT">LINK / USDT</option>
                    <option value="DOTUSDT">DOT / USDT</option>
                    <option value="LTCUSDT">LTC / USDT</option>
                    <option value="BCHUSDT">BCH / USDT</option>
                    <option value="UNIUSDT">UNI / USDT</option>
                    <option value="APTUSDT">APT / USDT</option>
                    <option value="SUIUSDT">SUI / USDT</option>
                    <option value="SHIBUSDT">SHIB / USDT</option>
                    <option value="PEPEUSDT">PEPE / USDT</option>
                    <option value="DZCUSDT">DZC / USDT</option>
                </select>

                <select
                    value={interval}
                    onChange={e => setIntervalValue(e.target.value)}
                >
                    <option value="1m">1m</option>
                    <option value="5m">5m</option>
                    <option value="15m">15m</option>
                    <option value="1h">1h</option>
                    <option value="4h">4h</option>
                    <option value="1d">1D</option>
                </select>

                <span style={{color:"#00e676",fontWeight:"bold"}}>
${lastPrice}
</span>

<span
style={{
color:Number(change)>=0?"#00e676":"#ff5252",
fontWeight:"bold"
}}>
{change}%
</span>

<span>📈 Live</span>

            </div>

            <div
                ref={chartContainer}
                className="chart-box"
            />

        </div>

    );

}

export default ChartCard;
