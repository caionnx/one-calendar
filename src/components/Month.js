import React, { Component } from 'react';
import calendarMatrix from 'calendar-matrix';
import isToday from 'date-fns/is_today';
import WeekHead from './WeekHead';
import Day from './Day';

class Month extends Component {
  getMatrixOfDays (year, month) {
    return calendarMatrix(year, month)
  }

  isToday (year, month, day) {
    const dirtyFormat = `${year}-${month + 1}-${day}`;

    return isToday(dirtyFormat);
  }

  isWeekend (dayIndex) {
    return dayIndex === 0 || dayIndex === 6;
  }

  render () {
    const {
      name,
      year,
      index,
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
            this.getMatrixOfDays(year, index).map(row => 
              <tr>
                {
                  // Now can show the day
                  row.map((day, i) => 
                    <Day
                      numeric={day}
                      isToday={this.isToday(year, index, day)}
                      isWeekend={this.isWeekend(i)} />
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