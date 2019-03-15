import React from 'react';
import PropTypes from 'prop-types';
import Movie from '../../components/Movie';


const Populares = props => (
 
  <ul className="populares">
    {
      props.movies.filter((movie, index) => {
          return index < 6 ;
          }).map(movie => (
      <li key={movie.id}>
       <Movie {...movie} />
      </li>
     
      
       ))}
  </ul>

); 
 
Populares.propTypes = {
  populares: PropTypes.arrayOf(PropTypes.object),
 
};

 export default Populares;

