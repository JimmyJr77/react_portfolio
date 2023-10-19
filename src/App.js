import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Contact from './components/Contact';
import GlobalStyles from './styles/GlobalStyles';

function App() {
    return (
        <Router>
            <div>
                <GlobalStyles />
                <Header />
                <Routes>
                  <Route path="/" element={<AboutMe />} index />
                  <Route path="/resume" element={<Resume />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;


