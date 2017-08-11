import React from 'react';
import DropDown from './shared/DropDown';
import DatePicker from './shared/DatePicker';
import Button from './shared/Button';
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
        <div className={styles.fullWidth}>
          <Button type='submit' text='Submit'/>
        </div>
      </form>
    )
  }
}

export default SearchForm;
