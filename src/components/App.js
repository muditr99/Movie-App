import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import React from 'react';

import { addMovies, setShowFavorite } from '../actions';

class App extends React.Component {
  componentDidMount () {
    const { store } = this.props;
    store.subscribe(() => { // subscribed to the store state changes
      console.log('UPDATED');
      this.forceUpdate();
    })
    // make api call
    // dispatch action
    // store.dispatch({
    //   type: 'ADD_MOVIES',
    //   movies: data,
    // })

    store.dispatch(addMovies(data));

    console.log('STATE', this.props.store.getState());
  }

  isMovieFavorite = (movie) => {
    const { favorites } = this.props.store.getState();
    const index = favorites.indexOf(movie);

    if(index !== -1){
      // we found the movie
      return true;
    }

    return false;
  }

  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavorite(val));
  }

  render () {
  const { list, favorites, showFavorites } = this.props.store.getState(); // { list : [], favorites : []}
  console.log('RENDER', this.props.store.getState());

  const displayMovies = showFavorites ? favorites : list;

  return (
    <div className="App">
      <Navbar />
      <div className="main">

        <div className="tabs">
          <div className={`tab ${showFavorites ? '' : 'active'}`} onClick={() => this.onChangeTab(false)}>Movies</div>
          <div className={`tab ${showFavorites ? 'active' : ''}`} onClick={() => this.onChangeTab(true)}>Favorites</div>
        </div>

        <div className="list">
          {displayMovies.map((movie, index) => {
            return <MovieCard
                     movie = {movie}
                     key = {`movie-${index}`}
                     dispatch = {this.props.store.dispatch}
                     isFavorite = {this.isMovieFavorite(movie)} 
                   />
          })}
        </div>
        {displayMovies.length === 0 ? <div className='no-movies'>No Movies To Display</div> : null}
      </div>
    </div>
   );
 }
}

export default App;
