import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import '../Main.css';

class Main extends React.Component {



  render() {
    return (
      <>
        <Card style={{ width: '40rem' }}>
          <Card.Header className="fw-bold">{this.props.cityName}</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Longitude: {this.props.longitude}</ListGroup.Item>
            <ListGroup.Item>Latitude: {this.props.latitude}</ListGroup.Item>
          </ListGroup>
          <Card.Img id='we' variant="top" src={this.props.place} />


        </Card>
      </>
    )
  }
}

export default Main;

