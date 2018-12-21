import React, {Component} from 'react';
import Modal from 'react-modal';

class DayEvent extends Component {
  constructor () {
    super();

    this.state = {
      selectedCategory: false,
      defaultCategories: {
        holiday: 'Holiday',
        birthday: 'Birthday',
        busy: 'Busy',
        anniversary: 'Anniversary'
      }
    }
  }

  onChangeCategory (ev) {
    const value = ev.target.value
    this.setState({
      selectedCategory: { id: value, name: this.state.defaultCategories[value] }
    })
  }

  resetSelected () {
    this.setState({
      selectedCategory: false
    })
  }

  render () {
    const {
      modalIsOpen,
      closeModal,
      fullDate,
      event,
      onRemoveEvent,
      onAddEvent,
    } = this.props;

    return (
        <Modal
          className='Modal'
          appElement={document.querySelector('#root')}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel={fullDate}>

          <div className='Modal__Flex'>
            <h4 className='Modal__Title'>{fullDate}</h4>
            <button className='Modal__Close' onClick={closeModal}>Close</button>
          </div>
          {
            event
            ? <div className='Modal__Content Modal__Flex'>
                {event.name}
                <button onClick={() => {
                  this.resetSelected();
                  onRemoveEvent(event.id);
                  }}>
                  Delete
                </button>
              </div>
            : <form className='Modal__Content Modal__Flex' onSubmit={ev => onAddEvent(ev, this.state.selectedCategory)}>
                <select onChange={ev => this.onChangeCategory(ev)}>
                  <option key='default'>Select one option</option>
                  {Object.keys(this.state.defaultCategories).map(ct => 
                    <option key={ct} value={ct}>{this.state.defaultCategories[ct]}</option>
                  )}
                </select>
                <button>Add</button>
              </form>
          }
        </Modal>
    )
  }
}

export default DayEvent;