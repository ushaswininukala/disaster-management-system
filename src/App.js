import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import VolSignUp from "./components/volsignup"; 
import VolLogin from "./components/vollogin";  
import DonorChoice from "./components/donorchoice";
import VolunteerChoice from "./components/volunteerchoice";
import DonorPanel from "./components/DonorPanel";
import VolunteerPanel from "./components/VolunteerPanel";
<<<<<<< HEAD
import Admin from "./components/Adminlogin";
import './App.css';
import AdminPanel from "./components/Adminpanel";
import AdminSignUp from "./components/Adminsignup";


=======


import './App.css';

>>>>>>> 04dcb0489f3dba42084236231ca5ce6c1401f5bb
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/volsignup" element={<VolSignUp />} /> 
        <Route path="/vollogin" element={<VolLogin />} /> 
        <Route path="/donorchoice" element={<DonorChoice />} />
        <Route path="/volunteerchoice" element={<VolunteerChoice />} />
        <Route path="/donorpanel" element={<DonorPanel />} />
        <Route path="/volunteerpanel" element={<VolunteerPanel />} />
<<<<<<< HEAD
        <Route path="/admin" element={<Admin />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
        <Route path="/adminsignup" element={<AdminSignUp />} />

        

=======
>>>>>>> 04dcb0489f3dba42084236231ca5ce6c1401f5bb
      </Routes>
    </Router>
  );
}

export default App;
