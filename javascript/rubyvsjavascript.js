// Challenge
// Create a new variable called user, set the value to: tom

let name = 'tom'

// Write an
// if statement: if the user 's name is tom, say '
// Hello Tom '
// Add an
// else condition: say 'Hello someone other than Tom'

if (name = 'tom') {
    alert('Hello Tom')
} else {
    alert('Hello someone other than Tom')
}
// Add a new variable called age, set the value to: 18

let age = parseInt(prompt('Enter your age'))

// If the user is 18, say 'welcome to the casino!'
// Research 'prompt'.Use it in your code to ask the user
// for their age.
// If the user is less than 18 years old, use the alert method to deny entry.

if (age >= 18) {
    alert('Welcome to the casino!')
} else {
    alert('Entry Denied!')
}

// Beast Mode
// Assign an empty array to a students variable.

let students = []

// Use the push method to add a student called Sarah


// Beast Mode++
// Store hashes in your students array
// Each student should have a name and age property.

students.push({
    name: 'Sarah',
    age: '18'
})

// Use prompt to ask the user
// for their name, add it to the array.

students.push({
    name: prompt('Please enter your name.'),
    age: parseInt(prompt('Please enter your age'))
})

// Use a loop to ask the user
// for 3 names, add them all to the array.

for (i = 0; i < 3; i++) {
    students.push({
        name: prompt('Please enter a name.'),
        age: parseInt(prompt('Please enter an age'))
    })

}

// Loop through the array and use the alert method to read each user back to the user.

for (let student in students) {
    alert(`Name: ${students[student].name} Age: ${students[student].age}`)
}