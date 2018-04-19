Some notes for newbie:

- imports get sorted to the top of the file, and requires stay where they were put. So the run-order only changes with import.

// Remove item from array
// filter: => brower every elements and check with callback function.
- array.filter(function(item){
    return (item.id !== action.id);
    // return true: => keep
    // return false: => remove
})

With arrow func:
hobbies: state.hobbies.filter((hobby)=>{hobby.id !== action.id})

- npm install -save-dev redux-thunk@2.0.1
=> middleware.
for fetchtLocation(...)