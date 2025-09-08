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
import {getApps} from "./utils/helper.js";

function App() {
    const CurrentApp = getApps()
  return (
    <>
        <Router>
            <CurrentApp />
        </Router>
    </>
  )
}

export default App
