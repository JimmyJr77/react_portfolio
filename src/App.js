import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <div id="app">
      <div className="main-content">
        <Router>
          <div>
            <GlobalStyles />
            <Header />
            <Routes>
              <Route path="/" element={<AboutMe />} index />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          </div>
        </Router>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
