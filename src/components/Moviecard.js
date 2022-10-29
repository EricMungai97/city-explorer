import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


class Moviecard extends React.Component {
  render(){
    return(
      <Col className='m-4'>
    <Card id='heit' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Img variant="top" src={this.props.imageurl} />
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
          {this.props.overview}

        </Card.Text>
        <Card.Text>
          {this.props.releasedate}
        </Card.Text>
        <Card.Text>
          {this.props.popularity}
        </Card.Text>
      </Card.Body>
      </Card>
      </Col>
    )
  }
}

export default Moviecard;
