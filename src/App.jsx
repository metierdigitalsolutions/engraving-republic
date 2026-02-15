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
      <div className="_bg-neutral-900 _bg-brandDark _text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}
