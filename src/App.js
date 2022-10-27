import React from 'react';
import Header from './components/Header.js';
import Cityform from './components/Cityform.js';
import Weather from './components/Weather.js'
import Main from './components/Main.js';
import Movies from './components/Movies.js'
import Footer from './components/Footer.js';
import Card from 'react-bootstrap/Card';
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
      query: '',
      weatherData: [],
      movieData: []
    
   
    }
  }

  // ***CITY DATA HANDLERS***
  handleInput = (e) => {
    e.preventDefault();
    this.setState({
      query: e.target.value
    });
    console.log(this.state.query);
  }

  // async/await - handles our asynchronous code
  // try/catch - handles our promise - resolve a successful promise, or handles our errors with a rejected promise
  handleGetCity = async (e) => {
    e.preventDefault();


    try {

      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.query}&format=json`;



      let cityData = await axios.get(url);
      let showData = cityData.data[0]


      console.log(cityData);

      this.setState({
        cityData: showData,
        error: false,
        cityLat: cityData.data[0].lat,
        cityLon: cityData.data[0].lon,
        cityName: cityData.data[0].display_name



      }, () => {
        this.getMapData();
        this.getWeatherData(showData);
        this.getMovieData();
      });
    
      console.log(this.state)

    } catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message,

      })
    }
   
  }

  getMapData = async () => {
    
    let cityMapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.cityLat},${this.state.cityLon}&zoom=10`;



    this.setState({ cityMap: cityMapUrl })
  }

  getWeatherData = async (city) => {
    console.log(this.state.cityName);
    
    // TODO: BUILD OUT FUNCTIONALITY TO CALL MY SERVER AND GET PET DATA
    try{
      let url = `${process.env.REACT_APP_SERVER}/weather?lat=${city.lat}&lon=${city.lon}`;

      let weatherData = await axios.get(url);

      this.setState({
        weatherData: weatherData.data
      
      })
    } catch (error) {
        this.setState({
          error: true,
          errorMessage: error.message,
  
        })
   
  }
}

getMovieData = async () => {
  try {
    let url = `${process.env.REACT_APP_SERVER}/movies?query=${this.state.query}`;

    let movieData = await axios.get(url);

    this.setState({
      movieData: movieData.data
    })
    
  } catch (error) {
    this.setState({
      error: true,
      errorMessage: error.message,
    })
  }
}

  render() {

 

    return (
      <div>
        <Header />
        <Cityform
          handleInput={this.handleInput}
          handleGetCity={this.handleGetCity}
          error={this.state.error}
        />
        {

          this.state.error
            ?
            <Card>{this.state.errorMessage}</Card>
            :
            <Main />
        }
        
        <Main
          cityName={this.state.cityName}
          latitude={this.state.cityLat}
          longitude={this.state.cityLon}
          place={this.state.cityMap}
        />
        <Weather
        weatherData={this.state.weatherData} 
        />
        <Movies 
        movieData={this.state.movieData}
        />
        <Footer />


      </div>
    )
  }
}


export default App;