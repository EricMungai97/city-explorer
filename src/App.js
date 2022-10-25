import React from 'react';
import Header from './components/Header.js';
import City from './components/City.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: {},
      cityData: [],
      error: false,
      errorMessage: '',
      lat: '',
      lon: '',
      cityMap: '',
      display: false
     
    }
  }

  handleInput = (e) => {
    e.preventDefault();
    this.setState({
      city: e.target.value
    })
  }

  // async/await - handles our asynchronous code
  // try/catch - handles our promise - resolve a successful promise, or handles our errors with a rejected promise
  handleGetCity = async (e) =>{
    e.preventDefault();

    try {
    let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`;
 
    
    let cityData = await axios.get(url);
    this.setState({
      cityData: cityData.data[0],
      error: false,
      lat: cityData.data[0].lat,
      lon: cityData.data[0].lon,
      
    });

  } catch(error){
    this.setState({
      error: true,
      errorMessage: error.message,
      
    })
  }
}

  render(){
   
    return(
      <div>
        <Header />
        <City
        handleInput={this.handleInput}
        handleGetCity={this.handleGetCity}
        />
        <Main 
        city={this.state.city}
        lat={this.state.lat}
        long={this.state.lon}
        />
        <Footer />
      </div>
    )
  }
}


export default App;