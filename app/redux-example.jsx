var redux = require('redux');

console.log('Starting redux example');

// Pure function
function add(a, b) {
    return a + b;
}

var a = 3;
function add(b) {
    return a + b;
}

var result;
function add(a, b) {
    result = a + b;
    return result;
}

function add(a, b) {
    return a + b + new Date().getSeconds();
}

function changProp(obj) {
    return {
        ...obj,
        name: 'Jens',
        isStudent: true
    };
    //git obj.name = 'Jens'; 
    // obj.isStudent = true;

    // return obj;
}

var startingValue = {
    name: "White",
    age: 30
};

var res = changProp(startingValue);

console.log(startingValue);
console.log(res)
