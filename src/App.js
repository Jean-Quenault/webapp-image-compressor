import React from 'react';
import ApiHandler from './ApiHandler';
import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';
Amplify.configure(amplifyconfig);

function App() {
  return (
    <div className="App">
      <ApiHandler />
    </div>
  );
}

export default App;