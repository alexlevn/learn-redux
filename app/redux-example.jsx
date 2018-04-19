var redux = require('redux');

console.log('Starting redux example');

var stateDefault = {
    name: 'Anonymous',
    hobbies: [],
    movies: []
}

var nextHobbyId = 1;
var nextMovieId = 1;

// The first way: dont use it anymore
var oldReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name
            };
        case 'ADD_HOBBY':
            return {
                ...state,
                hobbies: [
                    ...state.hobbies, {
                        id: nextHobbyId++,
                        hobby: action.hobby
                    }
                ]
            };
        case 'REMOVE_HOBBY':
            // debugger;
            return {
                ...state,
                hobbies: state
                    .hobbies
                    .filter((hobby) => (hobby.id !== action.id))
            }
        case 'ADD_MOVIE':
            return {
                ...state,
                movies: [
                    ...state.movies, {
                        id: nextMovieId++,
                        title: action.title,
                        genre: action.genre
                    }
                ]
            }
        case 'REMOVE_MOVIE':
            return {
                ...state,
                movies: state
                    .movies
                    .filter((movie) => movie.id !== action.id)
            }
        default:
            return state;
    }
}

// The second way: 
var nameReducer = (state = "Anonymous", action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return action.name;

        default:
            return state;
    };
};

var hobbiesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_HOBBY':
            return [
                ...state, {
                    id: nextHobbyId++,
                    hobby: action.hobby
                }
            ];
        case 'REMOVE_HOBBY':
            return state.filter((hobby) => hobby.id !== action.id);
        default:
            return state;
    }
};

var moviesReducer = function (state = [], action) {
    switch (action.type) {
        case "ADD_MOVIE":
            return [
                ...state, {
                    id: nextMovieId++,
                    title: action.title,
                    genre: action.genre
                }
            ]
        case "REMOVE_MOVIE":
            return state.filter((movie) => (movie.id !== action.id));
        default:
            return state
    }
};

var reducer = redux.combineReducers({
    name: nameReducer, 
    hobbies: hobbiesReducer, 
    movies: moviesReducer
});

var store = redux.createStore(reducer, redux.compose(window.devToolsExtension
    ? window.devToolsExtension()
    : (f) => {
        return f;
    }));

var unsubcribe = store.subscribe(() => {
    var state = store.getState();

    console.log('Name is ', state.name);

    document
        .getElementById('app')
        .innerHTML = state.name;

    console.log('New state', store.getState());

});
// unsubcribe();
var currentState = store.getState();

console.log('currentState: ', currentState);

store.dispatch({type: 'CHANGE_NAME', name: 'Andrew'});

store.dispatch({type: "ADD_HOBBY", hobby: "running"});

store.dispatch({type: "ADD_HOBBY", hobby: "walking"});

store.dispatch({type: 'REMOVE_HOBBY', id: 2});

store.dispatch({type: 'CHANGE_NAME', name: 'Emily'})

store.dispatch({type: 'ADD_MOVIE', name: 'Mad Max', genre: 'Action'});

store.dispatch({type: 'ADD_MOVIE', name: 'Fast and Furious', genre: 'affection'});

store.dispatch({type: 'REMOVE_MOVIE', id: 2});
