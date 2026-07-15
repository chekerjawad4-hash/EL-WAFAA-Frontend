import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Markets from "./pages/Markets";
import Trade from "./pages/Trade";
import Futures from "./pages/Futures";
import Assets from "./pages/Assets";

function App(){

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />
                                                          <Route path="/markets" element={<Markets />} />
                                                          <Route path="/trade" element={<Trade />} />
                                                          <Route path="/futures" element={<Futures />} />
                                                          <Route path="/assets" element={<Assets />} />

      </Routes>

    </BrowserRouter>
  );

}

export default App;
