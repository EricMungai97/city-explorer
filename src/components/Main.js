import React from 'react';
import Card from 'react-bootstrap/Card';

class Main extends React.Component {


 
  render(){
    return(
      <div>
        <Card id='card'>
        <Card.Body>
          <Card.Title>{this.props.cityName}</Card.Title>
          <Card.Text>
            {this.props.latitude}
            {this.props.longitude}
            {this.props.error}
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src={this.props.place} />
        </Card>
      </div>
    )
  }
}

export default Main;