// Challenge
// Assign a new empty object to a variable called me
let me = {}
// On the next line, add one key 'age' and set its value to your age
me.age = 31
// On the next line, add one key 'current location' and set its value to your current location
me.currentLocation = 'Brisbane'
// Use console.log to display the age and current location on screen
console.log(me.age, me.currentLocation)
// Use code to add an array of hobbies to your me object
me.hobbies = ['Video Games', 'Coding', 'Ping Pong', 'Trivia']
// Use code to delete your age key
delete me.age
// Iterate through me.hobbies and log each hobby to the screen
for (let hobby of me.hobbies) {
    console.log(hobby)
}
// Beast Mode
// Using code:

// Add another item to the end of the hobbies array
me.hobbies.push('Watching Movies')
// Delete the first item in the hobbies array
me.hobbies.splice(0, 1)
// Add a mother key, set its value to an empty object
me.mother = {}
// Add name, age and location keys to the mother object
me.mother.name = 'Kathryn'
me.mother.age = 52
me.mother.currentLocation = 'Melbourne'
// Add a print_details function to the me object.
me.printDetails = function () {
    console.log(this.currentLocation)
    console.log(this.hobbies)
    console.log(this.mother)
}
// Call the function to log some details about yourself.I.e.me.print_details() should work
me.printDetails()
// Note the difference between calling me.print_details and me.print_details()

// Beast Mode++
// Start with the following code:

const sydney_campus = {
    state: 'NSW',
    street: '7 Kelly St'
};
const brisbane_campus = {
    state: 'QLD',
    street: '205 N Quay'
};
const melbourne_campus = {
    state: 'VIC',
    street: '120 Spencer St'
};
const coder_academy = {
    sydney: sydney_campus,
    melbourne: melbourne_campus,
    brisbane: brisbane_campus
};

delete brisbane_campus.state
// Use console.log and interpolation to display your campus' street and state from the coder_academy object
console.log(`${coder_academy.brisbane.state} ${coder_academy.brisbane.street}`)
// If we use code to delete the state from your campus, will your log of the coder_academy object still work ? I.e.did it copy each campus object or does it reference each campus object ?
//     Research : value vs reference(a common interview question)