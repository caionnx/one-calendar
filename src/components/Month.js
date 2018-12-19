import React, { Component } from 'react';
import calendarMatrix from 'calendar-matrix';
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
            this.getMatrixOfDays(year, monthIndex).map((row, week) => 
              <tr key={[year, monthIndex, week]}>
                {
                  // Now can show the day
                  row.map((day, i) => 
                    <Day
                      key={[year, monthIndex, day]}
                      numeric={day}
                      month={monthIndex}
                      year={year}
                      dayIndex={i} />
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