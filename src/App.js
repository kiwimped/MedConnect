import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Home } from "./pages/home/home";
import { Login } from "./pages/login/login";
import { Register } from "./pages/login/register";
import { DoctorDash } from "./pages/doctor/DoctorDash";

import { Account } from "./pages/account/account";
import { Notification } from "./pages/notify/notification";
import { Appointments } from "./pages/appointments/appointments";
import { AI } from "./pages/AI/AI";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} />
          <Route path="/notify" element={<Notification />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/AI" element={<AI />} />
          <Route path="/doctor" element={<DoctorDash />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
