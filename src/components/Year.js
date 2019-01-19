import React, { Component } from 'react';

import '../styles/Calendar.scss';
import ErrorBoundary from './ErrorBoundary';
import Month from './Month';

class Year extends Component {
  constructor () {
    super();

    this.state = {
      months: [
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
      ],
      year: new Date().getFullYear()
    }
  }

  onClickNextYear () {
    this.setState({ year: this.state.year + 1 })
  }

  onClickPreviousYear () {
    this.setState({ year: this.state.year - 1 })
  }

  render () {
    const { year, months } = this.state;
    
    return (
      <div className='Calendar'>
        <div className='Calendar__Header'>
          <button title='Previous' onClick={() => this.onClickPreviousYear()}>{'<'}</button>
          <h1>{year}</h1>
          <button title='Next' onClick={() => this.onClickNextYear()}>{'>'}</button>
        </div>
        <div className='Calendar__Content'>
          <ErrorBoundary fallbackUI={<h4>Something went wrong. Try again later.</h4>}>
            { months.map((month, monthIndex) => 
                <Month key={month} name={month} index={monthIndex} year={year} />
              )
            }
          </ErrorBoundary>
        </div>
      </div>
    );
  }
}

export default Year;
