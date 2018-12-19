import React, { Component } from 'react';
import './App.css';
import Month from './components/Month';

class App extends Component {
  constructor () {
    super();

    this.months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            One calendar
          </p>
        </header>
        <div className='Year'>
          { this.months.map((m, i) => 
              <Month name={m} index={i} year={2018} />
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
