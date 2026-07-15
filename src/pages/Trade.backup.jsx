import { useState } from "react";

import "../styles/Trade.css";

import tradingPairs from "../data/tradingPairs";

import WalletBox from "../components/trade/WalletBox";
import TradeHeader from "../components/trade/TradeHeader";
import TradingChart from "../components/trade/TradingChart";
import BuySellPanel from "../components/trade/BuySellPanel";
import OrderBook from "../components/trade/OrderBook";
import RecentTrades from "../components/trade/RecentTrades";
import PairModal from "../components/trade/PairModal";

function Trade(){

  const [selectedPair, setSelectedPair] = useState(tradingPairs[0]);
  const [pairModalOpen, setPairModalOpen] = useState(false);
  const [walletRefresh, setWalletRefresh] = useState(0);

  return(

    <div className="trade-page">

      <TradeHeader
        pair={selectedPair.symbol}
        onOpen={() => setPairModalOpen(true)}
      />

      <div className="trade-layout">

        <div className="main-chart">
          <TradingChart symbol={selectedPair.symbol} />
        </div>

        <div className="side-panel">
          <WalletBox userId={1} refresh={walletRefresh} />
          <OrderBook />
          <RecentTrades />
        </div>

      </div>

      <BuySellPanel userId={1} onSuccess={() => setWalletRefresh(walletRefresh+1)} />

      <PairModal
        open={pairModalOpen}
        onClose={() => setPairModalOpen(false)}
        onSelect={(pair) => setSelectedPair(pair)}
      />

    </div>

  );

}

export default Trade;
