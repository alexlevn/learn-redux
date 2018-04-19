var redux = require('redux');

console.log('Starting redux example');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

var unsubcribe = store.subscribe(() => {
    var state = store.getState();

    // console.log('Name is ', state.name); document.getElementById('app').innerHTML
    // = state.name;

    console.log('New state', store.getState());

    if (state.map.isFetching) {
        document
            .getElementById('app')
            .innerHTML = 'Loading...';
    } else if (state.map.url) {
        document
            .getElementById('app')
            .innerHTML = '<a href="' + state.map.url + '" target="_bank">View you location</a>'
    }

});
// unsubcribe();
var currentState = store.getState();

console.log('currentState: ', currentState);

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Andrew'));

store.dispatch(actions.addHobby('running'));
store.dispatch(actions.addHobby('walking'));
store.dispatch(actions.removeHobby(2));

store.dispatch(actions.changeName('Emily'));

store.dispatch(actions.addMovie('Mad Max', 'action'));
store.dispatch(actions.addMovie('Fast and furious', 'affection'));
store.dispatch(actions.removeMovie(1));