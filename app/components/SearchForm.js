import React from 'react';
import DropDown from './shared/DropDown';
import DatePicker from './shared/DatePicker';
import styles from '../index.css';

class SearchForm extends React.Component {
  render() {
    return (
      <form className='search-form-wrapper'>
        <div className={styles.fullWidth}>
          <DropDown destinationsAPI={this.props.destinationsAPI}/>
        </div>
        <div className={styles.fullWidth}>
          <DatePicker/>
          <DatePicker/>
        </div>
      </form>
    )
  }
}

export default SearchForm;
