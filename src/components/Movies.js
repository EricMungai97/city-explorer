import React from 'react';

import Card from 'react-bootstrap/Card';

class Movies extends React.Component {
  render() {
    console.log(this.props.movieData)
    return (
      <div>
        <Card style={{ width: '18rem' }}>


          {this.props.movieData.map((movie, index) =>
           
            <Card.Body>
               <Card.Img variant="top" src={movie.posterpath} />
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
          )}
        </Card>
      </div>
    )
  }
}

export default Movies;