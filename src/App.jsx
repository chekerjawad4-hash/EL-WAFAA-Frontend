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
import Rewards from "./pages/services/Rewards";
import DZC from "./pages/services/DZC";
import Games from "./pages/services/Games";
import Referral from "./pages/services/Referral";
import Community from "./pages/services/Community";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import UserDetails from "./pages/UserDetails";

function App(){

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                                                          <Route path="/markets" element={<Markets />} />
                                                          <Route path="/trade" element={<ProtectedRoute><Trade /></ProtectedRoute>} />
                                                          <Route path="/futures" element={<ProtectedRoute><Futures /></ProtectedRoute>} />
          <Route path="/mobile-trade" element={<MobileTrade />} />
                                                          <Route path="/assets" element={<ProtectedRoute><Assets /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
        <Route path="/admin/user/:id" element={<ProtectedRoute><UserDetails /></ProtectedRoute>} />

        <Route path="/rewards" element={<Rewards />} />
        <Route path="/dzc" element={<DZC />} />
        <Route path="/games" element={<Games />} />
        <Route path="/referral" element={<Referral />} />
        <Route path="/community" element={<Community />} />

      </Routes>

    </BrowserRouter>
  );

}

export default App;
