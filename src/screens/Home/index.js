import React, { Component } from 'react';

import Movies from '../../components/Movies';
import Search from '../../components/Search';
import Populares from '../../components/Populares';
import Nuevas from '../../components/Nuevas';

import pelisReact from './pelisReact.svg';
import './style.css';


class Home extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      movies: [],
      query: ''
    };
    
    this.onInput = this.onInput.bind(this);
  }
  
    onInput(e) {
    console.log('pasa')
    e.preventDefault();
    this.setState({
      query: e.target.value
    });
    
    //this.searchMovie(e.target.value);
  }
  
  getPopularMovies() {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716`;
    
    fetch (url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          movies: data.results
        })
      });
  }
 
 searchMovie(query) {
    
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=cfe422613b250f702980a3bbf9e90716`;
    
    fetch (url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          movies: data.results
        })
      });
  }
  
  componentDidMount() {
    this.getPopularMovies();
    console.log("componentDidMount");
  }


  render() {
    const { movies, query} = this.state;
    //console.log(movies);
    const isSearched = query => item => !query || item.title.toLowerCase().includes(query.toLowerCase());
    const valor = query => item => query || item.vote_average > 7.5;
    const fecha = query => item => query || item.release_date > "2019-01-01";
    //Date(2018, 12, 31);

    return (
   
      <div>
        <div class="jumbotron jumbotron-fluid">
          <div class="container-fluid">
            <h1 class="row display-4">MovieLand</h1>
            <p class="col display-4">Por que nos Encantan los Personajes de Película</p>
            <p class="col lead">Jack Dawson(Leonardo DiCaprio): "¡Soy el rey del mundo!</p>
            <p class="col lead">Rick Blaine(Humphrey Bogart): "Siempre tendremos París"</p>
             <img  className="col fondo" width="200" src={pelisReact} alt="fondo" />
          </div>       
        </div>

        <div className="Populares py-4">
          <h4>Populares</h4>
           <Populares movies={movies.filter(valor(query))} 
           />
        </div>

        <div className="Nuevas py-4">
          <h4>Últimos Estrenos</h4>
            <Nuevas movies={movies.filter(fecha(query))} 
             />
        </div>

        <div className="home">
          <Search query={query} onInput={this.onInput} placeholder="Busca tu película…" />
          <Movies movies={movies.filter(isSearched(query))} />
        </div>
    </div>
    );
  }
}

export default Home;
