import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Login from "./page/login/Login";
import Signin from "./page/Signin";
import Navbar from "./page/Landingpage/Navbar";
import Landing from "./page/Landingpage/Landing";
import Dasboard from "./page/dashboard/Dashboard";
import Welcome from "./page/dashboard/overview/Welcome";
import Sidebar from "./page/dashboard/Sidebar";
import Notifications from "./page/dashboard/notification/Notification";
import ProfileForm from "./page/dashboard/profile/ProfileForm";



export default function App() {
  return (
    <BrowserRouter>
      



      
      
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signin />} />
        <Route path="/dashboard" element={<Dasboard />} />
   <Route path="/dashboard" element={<Dasboard />} 

      </Routes>
    </BrowserRouter>
  );
}
