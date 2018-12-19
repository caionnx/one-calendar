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
    return (
      <div className='Year'>
        <div className='Year__Header'>
          <button title='Previous' onClick={() => this.onClickPreviousYear()}>{'<'}</button>
          <h1>{this.state.year}</h1>
          <button title='Next' onClick={() => this.onClickNextYear()}>{'>'}</button>
        </div>
        <div className='Year__Content'>
          { this.state.months.map((m, i) => 
              <Month key={m} name={m} index={i} year={this.state.year} />
            )
          }
        </div>
      </div>
    );
  }
}

export default Year;
