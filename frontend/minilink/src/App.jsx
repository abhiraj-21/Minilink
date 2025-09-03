import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LandingPage from "./Components/LandingPage.jsx";
import AboutPage from "./Components/AboutPage.jsx";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";

function App() {

  return (
    <>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
            <Footer />
        </Router>
    </>
  )
}

export default App
