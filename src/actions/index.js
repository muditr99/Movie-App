// {
//     type: 'ADD_MOVIES',
//     movies: [],
// }

// action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

// action creators
export function addMovies (movies) {
    return {
        type : ADD_MOVIES,
        movies : movies
    }
}

export function addFavorite (movie) {
    return {
        type : ADD_FAVORITE,
        favorite : movie
    }
}

export function removeFavorite (movie) {
    return {
        type : REMOVE_FAVORITE,
        favorite : movie
    }
}