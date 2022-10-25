import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class City extends React.Component {
  render(){
    return(
      <Form>
      <Form.Group>
        <Form.Label>Pick a City!</Form.Label>
        <Form.Control type="location" placeholder="Enter city name" />
      </Form.Group>
      
      <Button variant="primary" type="submit" >Submit</Button>
      </Form>

    )
  }
}

export default City;