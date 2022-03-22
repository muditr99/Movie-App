export default function movies (state = [], action) {// state is current state of store
    if (action.type === 'ADD_MOVIES') {
        return action.movies;
    }
    return state;
}