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
import PrivateRoute from "./PrivateRoute.jsx";
import ErrorPage from "./Components/ErrorPage.jsx";


const AppRouter = () => {
    return(
        <>
            <Navbar />
            <Toaster position="top-center"/>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/register" element={<PrivateRoute publicPage={true}> <RegisterPage /> </PrivateRoute>} />
                <Route path="/login" element={<PrivateRoute publicPage={true}> <Login /> </PrivateRoute>} />
                <Route path="/dashboard" element={<PrivateRoute publicPage={false}> <DashboardLayout/> </PrivateRoute>} />
                <Route path="/error" element={<ErrorPage message="ERROR" />} />
                <Route path="*" element={<ErrorPage message="We can't seem to find the page you are looking for!" />} />
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