import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login"
import Register from "./pages/Register";
import Client from "./layout/General";
import ForgotPassword from "./pages/ForgotPassword";
import Changepassword from "./pages/Changepassword";
import ClientDashboard from "./layout/ClientDashboard";
import Accounts from "./pages/Accounts";
import Prescription from "./pages/Prescription";
import Orders from "./pages/Orders";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Client />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="change-password" element={<Changepassword />} />
        </Route>

        <Route path="dashboard/client" element={<ClientDashboard />}>
          <Route path="account" element={<Accounts />} />    // this all are child that are passed to Outlet in ClientDashboard
          <Route path="prescription" element={<Prescription />} />
          <Route path="orders" element={<Orders />} />
          <Route path="*" element={<h1 className="text-center mt-5"> Path not defined </h1>} />
        </Route>

        <Route path="*" element={<h1 className="text-center mt-5">404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App