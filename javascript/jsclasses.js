// Challenge

// Create a Dog class.Each dog should have a name and a location.
class Dog {
    constructor(name, location) {
        this.name = name
        this.location = location
        this.walks = []
    }

    // Add a speak method that logs "Woof! my name is {name}"
    get speak() {
        document.write(`Woof! My name is ${this.name}`)
    }

    // Add a walk method that accepts two arguments: location(string) and distance(integer)
    // Update your Dog class: when the walk method is called, use this new Walk class to create a walk
    walk(location, distance) {
        this.walks.push(new Walk(location, distance))
    }

    // Add a display_walks method that console.logs all of the dog 's walks
    get displayWalks() {
        for (let walk of this.walks) {
            document.write(walk.location, walk.distance, walk.time)
        }
    }

    // Add a total_distance method that returns the total distance of all the walks
    get totalDistance() {
        let distance = 0
        for (let walk of this.walks) {
            distance += walk.distance
        }
        return distance
    }
}

// Beast Mode
// Create a Walk class with properties: location and distance
// Introduce a timestamp to each walk, automatically add the current time when you instantiate a walk

class Walk {
    constructor(location, distance, time = new Date(new Date().getTime())) {
        this.location = location
        this.distance = distance
        this.time = time
    }
}

function createDog(dogs) {
    dogs.push(new Dog(prompt('Enter Dog Name'), prompt('Enter Dog Location')))
    return dogs
}


// Research: what 's the difference between console.log and return? Make sure you have a solid understanding

// Beast Mode++
// Create a basic GUI in the browser to interact with your classes.Use buttons, prompts and lists to create and display dogs(view example).
// Add walks to the GUI.I.e.add a `New Walk`
// button to each dog and display their walks under their name.