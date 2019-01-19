import React, { Component } from 'react';

import { calendarMatrix } from '../utils';
import WeekHead from './WeekHead';
import Day from './Day';

class Month extends Component {
  getMatrixOfDays (year, month) {
    return calendarMatrix(year, month)
  }

  render () {
    const {
      name,
      year,
      index: monthIndex,
    } = this.props;

    return (
      <table className='Month'>
        <thead>
          <tr>
            <th colSpan='7' className='Month__Title'>{name}</th>
          </tr>
          <WeekHead />
        </thead>
        <tbody>
          {
            // Get a matrix for the month, each line is a week
            this.getMatrixOfDays(year, monthIndex).map((week, weekIndex) => 
              <tr key={[year, monthIndex, weekIndex]}>
                {
                  // Now can show the day
                  week.map((day, dayIndex) => 
                    <Day
                      key={[year, monthIndex, day]}
                      numeric={day}
                      month={monthIndex}
                      year={year}
                      dayIndex={dayIndex} />
                  )
                }
              </tr>
            )
          }
        </tbody>
      </table>
    )
  }
}

export default Month;