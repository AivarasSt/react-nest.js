import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routing from './routing/routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
}

export default App;
