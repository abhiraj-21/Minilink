import Navbar from "./Components/Navbar.jsx";
import {Toaster} from "react-hot-toast";
import {Route, Routes} from "react-router-dom";
import LandingPage from "./Components/LandingPage.jsx";
import AboutPage from "./Components/AboutPage.jsx";
import RegisterPage from "./Components/RegisterPage.jsx";
import Login from "./Components/Login.jsx";
import DashboardLayout from "./Components/Dashboard/DashboardLayout.jsx";
import Footer from "./Components/Footer.jsx";
import ShortenUrlPage from "./Components/ShortenUrlPage.jsx";


const AppRouter = () => {
    return(
        <>
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
        </>
    )
}

export default AppRouter;

export const SubDomainRouter = () => {
    return(
        <Routes>
            <Route path="/s/:url" element={<ShortenUrlPage />}/>
        </Routes>
    )
}