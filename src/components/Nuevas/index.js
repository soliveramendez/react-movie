import React from 'react';
import PropTypes from 'prop-types';
import Movie from '../../components/Movie';


const Nuevas = props => (
 
  <ul className="nuevas">
    {
      props.movies.filter((movie, index) => {
          return index < 6;
          }).map(movie => (
      <li key={movie.id}>
        <Movie {...movie} />
      </li>
      
       ))}
  </ul>
  
); 

Nuevas.propTypes = {
  nuevas: PropTypes.arrayOf(PropTypes.object)
};


export default Nuevas;