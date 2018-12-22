import React from 'react';

import './styles/App.scss';
import Year from './components/Year';

const App = () => (
  <div className="App">
    <header className="App-header">
      <p>
        One calendar
      </p>
    </header>
    <Year />
  </div>
);

export default App;
