import React from 'react';
import WeatherDay from './WeatherDay';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class Weather extends React.Component {
  render() {
    console.log(this.props.weatherData)
    let weatherByDay = this.props.weatherData.map((day, index)=> {
      return <WeatherDay
        dayTime={day.datetime}
        dayDescription={day.description}
        key={index}
        />
    });

    return (
      <div>
        <Container>
            <Row xs={1} sm={3} md={4} lg={5}>
            {weatherByDay}
            </Row>
          </Container>
         
      </div>
    )
  }
}
    
    
   
export default Weather;

