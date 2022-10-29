import React from 'react';
import Moviecard from './Moviecard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';



class Movies extends React.Component {
  render() {
    let movieDat = this.props.movieData.map((movie, index) => {
      return <Moviecard
        imageurl={`https://image.tmdb.org/t/p/original/${movie.posterpath}`}
        title={movie.title}
        overview={movie.overview}
        releaseD={movie.releasedate}
        popularity={movie.popularity}

      />
    });

    return (
      <div>
       
        <Container >
          <Row xs={1} sm={3} md={4} lg={5}>
          
          {movieDat}
        </Row>
      </Container>
      </div >
    )
  }
}

export default Movies;
