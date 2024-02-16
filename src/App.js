import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Compress from './components/Compress';
import DataPolicy from './components/DataPolicy';
import GeneralTermsConditions from './components/GeneralTermsConditions';
import Pricing from './components/Pricing';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/compress" element={<Compress />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/data-management-policy" element={<DataPolicy />} />
          <Route path="/general-terms-conditions" element={<GeneralTermsConditions />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;