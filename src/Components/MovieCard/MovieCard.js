import React from 'react'
import { Button, Card } from 'react-bootstrap'

const MovieCard = ({movie}) => {
    return (
        <Card style={{ width: '18rem' }} className="mb-3">
        <Card.Img  height="350" variant="top" src={movie.posterUrl} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
             {movie.description}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    )
}

export default MovieCard
