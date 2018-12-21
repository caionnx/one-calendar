import React, { Component } from 'react';
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
      <div className='Year'>
        <div className='Year__Header'>
          <button title='Previous' onClick={() => this.onClickPreviousYear()}>{'<'}</button>
          <h1>{year}</h1>
          <button title='Next' onClick={() => this.onClickNextYear()}>{'>'}</button>
        </div>
        <div className='Year__Content'>
          { months.map((month, monthIndex) => 
              <Month key={month} name={month} index={monthIndex} year={year} />
            )
          }
        </div>
      </div>
    );
  }
}

export default Year;
