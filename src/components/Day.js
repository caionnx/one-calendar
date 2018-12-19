import React, { Component } from 'react';
import dateFormat from 'date-fns/format';
import isToday from 'date-fns/is_today';
import DayEvent from './DayEvent';

class Day extends Component {
  constructor () {
    super();

    this.state = {
      event: false,
      eventModal: false,
    }

    this.openEventModal = this.openEventModal.bind(this);
    this.closeEventModal = this.closeEventModal.bind(this);
  }

  componentDidMount () {
    const { year, month, numeric } = this.props;
    const dirtyFormat = `${year}-${month + 1}-${numeric}`;

    this.setState({ fullDate: dateFormat(dirtyFormat, 'D MMM YYYY') });
  }

  openEventModal () {
    this.setState({ eventModal: true });
  }

  closeEventModal (ev) {
    ev.preventDefault();
    this.setState({ eventModal: false });
  }

  // Define class name and modifiers e.g. Weekend, Current, Holiday etc.
  getClassName (isVisible) {
    const current = this.isToday() ? ' Day--current' : '';
    const highlighted = this.state.event ? ` Day--${this.state.event.id}` : '';
    const weekend = this.isWeekend() ? ' Day--weekend' : '';
    const visibility = !isVisible ? ' Day--hidden' : '';

    return `Day${highlighted}${current}${weekend}${visibility}`;
  }

  isToday () {
    const { year, month, numeric } = this.props;
    const dirtyFormat = `${year}-${month + 1}-${numeric}`;

    return isToday(dirtyFormat);
  }

  isWeekend () {
    const { dayIndex } = this.props;
    return dayIndex === 0 || dayIndex === 6;
  }

  onRemoveEvent (id) {
    this.setState({ event: false })
  }

  onAddEvent (ev, category) {
    ev.preventDefault();
    this.setState({ event: category })
  }

  render () {
    const { numeric } = this.props;
    const { eventModal, event, fullDate } = this.state;
    
    return (
      <td className={this.getClassName(numeric >= 1)}>
        {numeric >= 1 ?
          [
            <div key={numeric} onClick={this.openEventModal}>{ numeric }</div>,
            eventModal &&
            <DayEvent
              key={fullDate}
              event={event}
              fullDate={fullDate}
              modalIsOpen={eventModal}
              onRemoveEvent={id => this.onRemoveEvent(id)}
              onAddEvent={(ev, category) => this.onAddEvent(ev, category)}
              closeModal={ev => this.closeEventModal(ev)} />
          ]
          : ''
        }
      </td>
    );
  }
}

export default Day;