import React from 'react';

class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChange(event) {
    event.preventDefault();
  }

  render() {
    return (
      <input value={this.state.value} type='date' onChange={this.handleChange} />
    )
  }
}

export default DatePicker;
