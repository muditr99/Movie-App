import { ADD_MOVIES } from "../actions";

const initialMoviesState = {
    list : [],
    favorites : []
}

export default function movies (state = initialMoviesState, action) {// state is current state of store
    if (action.type === ADD_MOVIES) {
        return {
            ...state,
            list : action.movies
        };
    }
    return state;
}

