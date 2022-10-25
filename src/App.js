import React from 'react';
import Header from './components/Header.js';
import City from './components/City.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: [],
      error: false,
      errorMessage: ''
    }
  }

 
  render(){
    return(
      <div>
        <Header />
        <City />
        <Main />
        <Footer />
      </div>
    )
  }
}


export default App;