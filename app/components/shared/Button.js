import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(event) {
    event.preventDefault();
  }

   render() {
     return (
       <button type={this.props.type} onClick={this.handleClick}>
         {this.props.text}
       </button>
     )
   }
}

export default Button;
