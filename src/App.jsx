import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Transactions from "./Pages/Transactions";
import ForgotPassword from "./Pages/ForgotPassword";
import "./index.css";
import SendMoney from "./Components/Transactions/SendMoney";
import Activity from "./Pages/Activity";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Register />} />
          <Route path="/Activity" element={<Activity />} />
          <Route path="/SendMoney" element={<SendMoney />} />
          <Route path="/Transactions" element={<Transactions />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
