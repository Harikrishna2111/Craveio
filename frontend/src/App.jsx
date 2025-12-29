import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/student/Login";
import Otp from "./pages/student/Otp";
import Profile from "./pages/student/Profile";
import Home from "./pages/student/Home";
import Hotel from "./pages/student/Hotel";
import Cart from "./pages/student/Cart";
import Checkout from "./pages/student/Checkout";
import OrderStatus from "./pages/student/OrderStatus";
import QrPickup from "./pages/student/QrPickup";
import OrderCompleted from "./pages/student/OrderCompleted";
import NotFound from "./pages/common/NotFound";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<Home />} />
        <Route path="/hotel/:id" element={<Hotel />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order/:id" element={<OrderStatus />} />
        <Route path="/order/:id/qr" element={<QrPickup />} />
        <Route path="/order/:id/completed" element={<OrderCompleted />} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

