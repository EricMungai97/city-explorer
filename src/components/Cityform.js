import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class Cityform extends React.Component {
  render(){
    return(
      <Form onSubmit={this.props.handleGetCity}>
      <Form.Group>
        <Form.Label>Pick a City To Explore!</Form.Label>
        <Form.Control type="location" placeholder="Enter city name" onInput={this.props.handleInput} />
      </Form.Group>
      
      <Button variant="primary" type="submit" >Explore!</Button>
      </Form>

    )
  }
}

export default Cityform;