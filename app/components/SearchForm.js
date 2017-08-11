import React from 'react';
import DropDown from './shared/DropDown';

class SearchForm extends React.Component {
  render() {
    return (
      <form className='search-form-wrapper'>
        <DropDown destinationsAPI={this.props.destinationsAPI}/>
      </form>
    )
  }
}

export default SearchForm;
