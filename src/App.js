import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home"; 
import Regions from "./pages/Regions"; 
import Contact from "./pages/Contact"; 
import News from "./pages/News"; 
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <Router>
      <div>

        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Regions" element={<Regions />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/News" element={<News />} />
        </Routes>        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
