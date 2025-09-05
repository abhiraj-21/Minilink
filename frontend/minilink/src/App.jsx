import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LandingPage from "./Components/LandingPage.jsx";
import AboutPage from "./Components/AboutPage.jsx";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import RegisterPage from "./Components/RegisterPage.jsx";
import {Toaster} from "react-hot-toast";
import Login from "./Components/Login.jsx";
import DashboardLayout from "./Components/Dashboard/DashboardLayout.jsx";

function App() {

  return (
    <>
        <Router>
            <Navbar />
            <Toaster position="top-center"/>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<DashboardLayout/>} />
            </Routes>
            <Footer />
        </Router>
    </>
  )
}

export default App
