import React from 'react';
import WeatherDay from './WeatherDay';



class Weather extends React.Component {
  render() {
    console.log(this.props.weatherData)
    let weatherByDay = this.props.weatherData.map((day, index) => {
      return <WeatherDay
        dayTime={day.datetime}
        dayDescription={day.description}
        key={index}
      />
    });

    return (
      <div>



        {weatherByDay}



      </div>
    )
  }
}



export default Weather;

