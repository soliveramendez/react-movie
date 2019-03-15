import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Movie extends Component {

  render() {
   
  const Movie = props =>({Movie})
 //console.log(Movie);
   return (
  <div className="movie">
    <figure>
          <a href={`https://www.themoviedb.org/movie/${this.props.id}`}
    >
      < img src = {
        `https://image.tmdb.org/t/p/w300_and_h450_bestv2${this.props.poster_path}`
      }
      ></img>
    </a>
      <figcaption>
        <h2 className="movie__vote">Puntuación : {this.props.vote_average}</h2>
        <h2 className="movie__fecha">Estreno : {this.props.release_date}</h2>
      </figcaption>
    </figure>
  </div>
  
   );
  }
}
  
 // <h2 className="movie__title">Título : {this.props.title}</h2>
Movie.propTypes = {
  id         : PropTypes.number.isRequired,
  title      : PropTypes.string.isRequired,
  poster_path: PropTypes.string,
  vote_average: PropTypes.number.isRequired,
  release_date: PropTypes.number.isRequired
};
 

export default Movie;
