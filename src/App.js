import React from 'react';
import ApiHandler from './pages/Compressor';
import { MarketingFooterBrand } from './ui-components';

function App() {
  return (
    <div className="App">
      <ApiHandler />
      <MarketingFooterBrand />
    </div>
  );
}

export default App;
