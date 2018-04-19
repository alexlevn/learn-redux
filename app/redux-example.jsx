var redux = require('redux');

console.log('Starting redux example');


// Name reducer adn action generators
// ---------------------------------------
var nameReducer = (state = "Anonymous", action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return action.name;

        default:
            return state;
    };
};

var changeName = (name) => {
    return {
        type: 'CHANGE_NAME',
        name
    }
};


// Hobbies reducer adn action generators
// ---------------------------------------
var nextHobbyId = 1;
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

var addHobby = (hobby)=>{
    return {
        type: 'ADD_HOBBY',
        hobby
    }
};

var removeHobby = (id) => {
    return {
        type: 'REMOVE_HOBBY',
        id
    }
};

// Movies reducer adn action generators
// ---------------------------------------
var nextMovieId = 1;
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
var addMovie = (title, genre) =>{
    return {
        type: "ADD_MOVIE",
        title, 
        genre
    }
};

var removeMovie = (id) => {
    return {
        type: 'REMOVE_MOVIE',
        id
    }
}

// Combine all reducer
// -------------------------------------------
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

store.dispatch(changeName('Andrew'));

store.dispatch(addHobby('running'));
store.dispatch(addHobby('walking'));
store.dispatch(removeHobby(2));

store.dispatch(changeName('Emily'));

store.dispatch(addMovie('Mad Max', 'action'));
store.dispatch(addMovie('Fast and furious', 'affection'));
store.dispatch(removeMovie(1));