import React from 'react';
import Card from 'react-bootstrap/Card';

class WeatherDay extends React.Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>

          <Card.Title>Forecast Data</Card.Title>
          <Card.Text>
            {this.props.dayTime}

          </Card.Text>
          <Card.Text>
            {this.props.dayDescription}
          </Card.Text>

        </Card.Body>
      </Card>
    )
  }

}

export default WeatherDay;
