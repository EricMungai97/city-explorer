import React from 'react';
import Header from './components/Header.js';
import Cityform from './components/Cityform.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      cityData: [],
      error: false,
      errorMessage: '',
      cityLat: '',
      cityLon: '',
      cityMap: '',
      query: ''
     
    }
  }

  // ***CITY DATA HANDLERS***
  handleInput = (e) => {
    e.preventDefault();
    this.setState({
      query: e.target.value
    })
    console.log(this.state.query);
  }

  // async/await - handles our asynchronous code
  // try/catch - handles our promise - resolve a successful promise, or handles our errors with a rejected promise
  handleGetCity = async (e) =>{
    e.preventDefault();
    

    try {

    let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.query}&format=json`;


    
    let cityData = await axios.get(url);
  
    
    console.log(cityData);
    
    this.setState({
      cityData: cityData.data[0],
      error: false,
      cityLat: cityData.data[0].lat,
      cityLon: cityData.data[0].lon,
      cityName: cityData.data[0].display_name
     
      
      
    }, () => {
      this.getMapData();
    });

    // console.log(this.state)

  } catch(error){
    this.setState({
      error: true,
      errorMessage: error.message,
      
    })
  }

  
}

getMapData = async () => {

  let cityMapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.cityLat},${this.state.cityLon}&zoom=10`;



  this.setState({cityMap: cityMapUrl})
}

  

  render(){
    
  

    return(
      <div>
        <Header />
        <Cityform
        handleInput={this.handleInput}
        handleGetCity={this.handleGetCity}
        error={this.state.error}
        />
        <Main 
        cityName={this.state.cityName}
        latitude={this.state.cityLat}
        longitude={this.state.cityLon}
        place={this.state.cityMap}
        />
        <Footer />
      </div>
    )
  }
}


export default App;