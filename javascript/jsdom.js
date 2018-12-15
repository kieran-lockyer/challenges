// Challenge
// Let 's build a todo list. Only use plain old vanilla JavaScript, don'
// t use any JS frameworks.Don 't worry about styling for now. Here'
// s what we 're building.
toDoItems = []

// We 'll build an ugly version first before we worry about styling.

// Add an input box and a button to your app.
let body = document.body
let input = document.createElement('form')
input.innerHTML = 'To do: <input type="text" name="todo"><br>'
input.innerHTML += '<input type="submit" value="Submit">'
body.appendChild(input)

// When the user clicks the button, make a new todo item appear on the page.

// Set the input box back to an empty value when a task is added.
// Show the total number of tasks somewhere.
// We should be using forms with our input!Wrap your input box and button in a form.Make sure the button is a submit button.You 'll need to update your event listener from `on button click` to `on form submit`. Pro tip: preventDefault will be helpful here.
// We can remove the button.Pressing enter will submit the form.
// Use a CSS framework like Bulma to make it look similar to the demo.
// Beast Mode
// Allow tasks to be marked as complete.
// Add a progress bar to show % of tasks completed.
// Allow tasks to be removed.
// Beast Mode++
// Update the input functionality.It should also search the tasks as a user types.Demo
// Refreshing the page wipes all our data!Find a way to persist data.