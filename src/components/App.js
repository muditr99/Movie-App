import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import React from 'react';

import { addMovies } from '../actions';

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

  render () {
  const { list } = this.props.store.getState(); // { list : [], favorites : []}
  console.log('RENDER');
  return (
    <div className="App">
      <Navbar />
      <div className="main">

        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favorites</div>
        </div>

        <div className="list">
          {list.map((movie, index) => {
            return <MovieCard movie = {movie} key={`movie-${index}`} />
          })}
        </div>

      </div>
    </div>
   );
 }
}

export default App;
