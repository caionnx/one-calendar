import React, { Component } from 'react';
import dateFormat from 'date-fns/format';
import isToday from 'date-fns/is_today';
import { connect } from 'react-redux'

import { addEvent, removeEvent } from '../actions'
import DayEvent from './DayEvent';

const getUID = ({ numeric, month, year } = {}) =>
  `${numeric}${month}${year}`;

export class Day extends Component {
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
    const { event } = this.props;
    const current = this.isToday() ? ' Day--current' : '';
    const highlighted = event ? ` Day--${event.id}` : '';
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

  onRemoveEvent () {
    const dateUID = getUID(this.props);

    this.props.dispatch(removeEvent(dateUID));
  }

  onAddEvent (ev, category) {
    ev.preventDefault();
    const { id, name } = category;
    const dateUID = getUID(this.props);

    if (!id || !name) {
      return;
    }

    this.props.dispatch(addEvent(id, name, dateUID));
  }

  render () {
    const { numeric, event } = this.props;
    const { eventModal, fullDate } = this.state;
    
    return (
      <td>
        {numeric >= 1 ?
          [
            <div
              key={numeric}
              className={this.getClassName(numeric >= 1)}
              onClick={this.openEventModal}>
              { numeric }
            </div>,
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

const mapStateToProps = ({ events }, props) => ({
  event: events.find(ev => ev.date === getUID(props))
});

export default connect(mapStateToProps)(Day);