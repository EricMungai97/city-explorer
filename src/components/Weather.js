import React from 'react';
import Card from 'react-bootstrap/Card';

class Weather extends React.Component {
  render() {
    console.log(this.props.weatherData);
    return (
      <div>

        <Card style={{ width: '18rem' }}>


          {this.props.weatherData.map((day, index) =>
            <Card.Body>
              <Card.Title>Forecast Data</Card.Title>
              <Card.Text>
                {day.datetime}

              </Card.Text>
              <Card.Text>
                {day.description}
              </Card.Text>

            </Card.Body>
          )}
        </Card>
      </div>
    )
  }
}

export default Weather;
