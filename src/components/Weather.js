import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Weather extends React.Component {
  render() {
    console.log(this.props.weatherData);
    let weatherDat = this.props.weatherData.map((day, index) =>
    <Col className='m-4'>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        
        <Card.Title>Forecast Data</Card.Title>
        <Card.Text>
        {day.datetime}

        </Card.Text>
        <Card.Text>
        {day.description}
        </Card.Text>
        
      </Card.Body>
      </Card>
      </Col>
    )
    return (
      <div>
        <Container id='contain' fluid>
          <Row id='row' xs={1} sm={1} md={2} lg={4} xxl={5} className='g-4'>
          
            {weatherDat}
         
          </Row>
          </Container>

       
      </div>
    )
  }
}

export default Weather;
