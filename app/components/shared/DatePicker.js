import React from 'react';

class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState(
      {
        value: event.target.value
      }
    );
  }

  render() {
    return (
      <input value={this.state.value} type='date' onChange={this.handleChange} />
    )
  }
}

export default DatePicker;
