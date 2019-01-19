import React from 'react';

import './styles/App.scss';
import Year from './components/Year';

const App = () => (
  <div className="App">
    <header className="App__Header">
      <p>
        One calendar
      </p>
    </header>
    <Year />
  </div>
);

export default App;
