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
import Orders from "./pages/hotel/Orders";
import OrderDetails from "./pages/hotel/OrderDetails";
import Dashboard from "./pages/hotel/Dashboard";
import Settings from "./pages/hotel/Settings";
import Menu from "./pages/hotel/Menu"; 
import Scan from "./pages/delivery/Scan";
import ScanSuccess from "./pages/delivery/ScanSuccess";
import ScanFailed from "./pages/delivery/ScanFailed";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminStudents from "./pages/admin/Students";
import AdminHotels from "./pages/admin/Hotels";
import AddHotel from "./pages/admin/AddHotel";
import AdminOrders from "./pages/admin/Orders";
import AdminOrderDetails from "./pages/admin/OrderDetails";



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
        <Route path="/hotel/dashboard" element={<Dashboard />} />
        <Route path="/hotel/orders" element={<Orders />} />
        <Route path="/hotel/orders/:id" element={<OrderDetails />} />
        <Route path="/hotel/settings" element={<Settings />} />
        <Route path="/hotel/menu" element={<Menu />} />
        <Route path="/delivery/scan" element={<Scan />} />
        <Route path="/delivery/success" element={<ScanSuccess />} />
        <Route path="/delivery/failed" element={<ScanFailed />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/students" element={<AdminStudents />} />
        <Route path="/admin/hotels" element={<AdminHotels />} />
        <Route path="/admin/hotels/add" element={<AddHotel />} />
        <Route path="/admin/orders" element={<AdminOrders />} />
        <Route path="/admin/orders/:id" element={<AdminOrderDetails />} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;

