import { ADD_MOVIES, ADD_FAVORITE, REMOVE_FAVORITE } from "../actions";

const initialMoviesState = {
    list : [],
    favorites : []
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
            return {
                ...state,
                favorites : [...state.favorites]
            };
        default:
            return state;
    }
}

