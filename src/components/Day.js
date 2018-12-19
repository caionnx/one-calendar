import React, { Component } from 'react';

class Day extends Component {
  constructor () {
    super();

    this.category = false;
  }

  // Define class name and modifiers e.g. Weekend, Current, Holiday etc.
  getClassName (isToday, isWeekend, isVisible) {
    const current = isToday ? ' Day--current' : '';
    const highlighted = this.category ? ` ${this.category}` : '';
    const weekend = isWeekend ? ' Day--weekend' : '';
    const visibility = !isVisible ? ' Day--hidden' : '';

    return `Day${highlighted}${current}${weekend}${visibility}`;
  }

  render () {
    const { isToday, isWeekend, numeric } = this.props;
    return (
      <td className={this.getClassName(isToday, isWeekend, numeric >= 1)}>
        {numeric >= 1 ? numeric : '' }
      </td>
    );
  }
}

export default Day;