import { ADD_MOVIES, ADD_FAVORITE, REMOVE_FAVORITE, SET_SHOW_FAVORITES } from "../actions";

const initialMoviesState = {
    list : [],
    favorites : [],
    showFavorites : false
}

export default function movies (state = initialMoviesState, action) {// state is current state of store
    // if (action.type === ADD_MOVIES) {
    //     return {
    //         ...state,
    //         list : action.movies
    //     };
    // }

    switch (action.type) {
        case ADD_MOVIES:
            return {
                ...state,
                list : action.movies
            };
        case ADD_FAVORITE:
            return {
                ...state,
                favorites : [action.favorite, ...state.favorites]
            };
        case REMOVE_FAVORITE:
            const filteredArray = state.favorites.filter((movie) => {
                return movie.Title !== action.unfavorite.Title;
            });
            return {
                ...state,
                favorites : filteredArray
            };
        case SET_SHOW_FAVORITES:
            return {
                ...state,
                showFavorites : action.val
            };

        default:
            return state;
    }
}

