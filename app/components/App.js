import React from 'react';
import SearchForm from './SearchForm';
import styles from '../index.css';

const destinationsAPI = {
  destinations: [
    { id: 1, name: 'Kuala Lumpur' },
    { id: 2, name: 'Penang' },
    { id: 3, name: 'Kota Kinabalu' },
    { id: 4, name: 'Langkawi' },
    { id: 5, name: 'Melaka' },
    { id: 6, name: 'Kuching' },
    { id: 7, name: 'Ipoh' },
    { id: 8, name: 'Singapore' },
    { id: 9, name: 'Bangkok' },
    { id: 10, name: 'Hong Kong' }
  ]
};

class App extends React.Component {
  render() {
    return (
      <div className='app-container'>
        <SearchForm destinationsAPI={destinationsAPI}/>
        <p className={styles.redFont}>app</p>
      </div>
    )
  }
}

export default App;
