import React from 'react';
import DropDown from './shared/DropDown';
import DatePicker from './shared/DatePicker';
import Button from './shared/Button';
import styles from '../index.css';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault;
    console.log('yolo');
  }

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
          <Button type='button' text='Submit'/>
        </div>
      </form>
    )
  }
}

export default SearchForm;
