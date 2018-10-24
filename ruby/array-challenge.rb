=begin
Challenge
Use the Ruby docs to help you

Create an array called four_letter_animals with the following animals (in this order):
Calf
Duck
Elephant
Goat
Lamb
Lion
Mule
Dog
Add Puma to the end of the array
Insert Joey after Goat and before Lamb
Delete Dog
Reverse the order of the array
Replace Elephant with Foal
Add Bear to the end of the array
Reverse the order of the array again
Beast Mode
Ask the user for three or more grocery items, store them in a list (array). It's OK to ask three times. 
Show the list to the user. Can’t remember how to use a specific ruby feature/syntax? That’s normal! Google + Ruby docs :)

Try using the `.length` method to tell the user how many items are in their list.
Sort the list alphabetically before showing it to the user
Are you using gets.chomp multiple times? A 3.times loop might tidy your code.
If the user tries to add 'Ice Cream', secretly replace it with 'Broccoli'
Ask the user for quantities too. Show a nice looking list back to the user.
Learning Outcomes
On successful completion of this Unit students will be able to,

Describe how arrays are useful in storing multiple pieces of information.
Create and populate an array.
Identify elements in an array based on their index.
=end

=begin - 1st stage completed
four_letter_animals = ["Calf", "Duck", "Elephant", "Goat", "Lamb", "Lion", "Mule", "Dog"]
print four_letter_animals
puts
four_letter_animals.push("Puma")
print four_letter_animals
puts
four_letter_animals.insert(4, "Joey")
print four_letter_animals
puts
four_letter_animals.delete("Dog")
print four_letter_animals
puts
four_letter_animals.reverse!
print four_letter_animals
puts
four_letter_animals[four_letter_animals.index("Elephant")] = "Foal"
print four_letter_animals
puts
four_letter_animals.push("Bear")
print four_letter_animals
puts
four_letter_animals.reverse!
print four_letter_animals
puts
=end

grocery_items = []

while true
    print "Please enter the number of groceries to add to your list (3 or more): "
    number_of_groceries = gets.chomp.to_i
    unless number_of_groceries < 3
        number_of_groceries.times do
            print "Name of item to add: "
            item = gets.chomp
            quantity = false
            while !quantity
                print "Quantity: "
                quantity = eval(gets.chomp) rescue false
                if quantity
                    grocery_items.push([item, quantity])
                else
                    puts "Please enter a number"
                end
            end
        end
        break
    else
        puts "Please enter a number greater than 3"
    end
end

puts "You have #{grocery_items.length} items on your list"

grocery_items.each do |item|
    if item.include?("Ice Cream")
        item[item.index("Ice Cream")] = "Brocolli"
    end
end

grocery_items.sort.each do |item, quantity|
    puts "#{item.ljust(10)}: #{quantity}"
end
