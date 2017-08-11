import React from 'react';

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <select value={this.state.value} onChange={this.handleChange}>
        <option>-- Select destination --</option>
        {
          this.props.destinationsAPI.destinations.map((dest) => {
            return (
              <option key={dest.id}>{dest.name}</option>
            )
          })
        }
      </select>
    )
  }
}

export default DropDown;
