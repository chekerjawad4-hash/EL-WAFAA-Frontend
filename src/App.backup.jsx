import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Markets from "./pages/Markets";
import Trade from "./pages/TradeBinance";
import Futures from "./pages/Futures";
import Assets from "./pages/Assets";
import MobileTrade from "./pages/MobileTrade";

function App(){

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />
                                                          <Route path="/markets" element={<Markets />} />
                                                          <Route path="/trade" element={<Trade />} />
                                                          <Route path="/futures" element={<Futures />} />
          <Route path="/mobile-trade" element={<MobileTrade />} />
                                                          <Route path="/assets" element={<Assets />} />

      </Routes>

    </BrowserRouter>
  );

}

export default App;
