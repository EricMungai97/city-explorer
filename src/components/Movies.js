import React from 'react';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



class Movies extends React.Component {
  render() {
    let movieDat = this.props.movieData.map((movie, index) =>
    <Col className='m-4'>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${movie.posterpath}`} />
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          {movie.overview}

        </Card.Text>
        <Card.Text>
          {movie.releasedate}
        </Card.Text>
        <Card.Text>
          {movie.popularity}
        </Card.Text>
      </Card.Body>
      </Card>
      </Col>
    )

    return (
      <div>
        <Container id='contain' fluid>
          <Row id='row' xs={1} sm={1} md={2} lg={4} xxl={5} className='g-4'>
          
            {movieDat}
         
          </Row>
          </Container>

      </div>
    )
  }
}

export default Movies;