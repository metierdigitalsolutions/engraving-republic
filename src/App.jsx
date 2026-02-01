import Header from "./components/Header"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import About from "./components/About"
// import Materials from "./components/Materials"
// import Gallery from "./components/Gallery"
// import StickyActions from "./components/StickyActions"

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
      </Routes>
      <Footer />
    </Router>
  )
}
