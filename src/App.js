import React from 'react';
import { MarketingFooterBrand } from './ui-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CompressFile from './components/Compressor';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div> {/* Added a parent div */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>

      <div> {/* Added a nested div */}
        <CompressFile />
        <MarketingFooterBrand />
      </div>
    </div>
  );
}

export default App;