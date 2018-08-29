person = {name: 'John', height: '2m', weight: '70kgs'}

#Add to the hash: John's occupation (web developer) and hobbies (art).
#Delete John's weight from the hash
#Retrieve John's height from the hash
#Iterate through the hash so we see John's details.

=begin
# person[:occupation] = "web developer"
# person[:hobbies] = "art"
person.merge!({occupation: "web developer", hobbies: "art"})
person.delete(:weight)

puts person[:height]

for key, value in person
    puts "#{key}: #{value}"
end
=end

#BEAST MODE
# A group of friends have just finished lunch. Write an app to work out how much each person owes.
# Parameters:
# - Your app should ask "Enter a customer's name"
# - Your first line of code is:
# items = [{ customer: "John", item: "Soup", cost: 8.50}, {customer: "Sarah", item: "Pasta", cost: 12}, {customer: "John", item: "Coke", cost: 2.50}]
# - Your app should output, for example: "John owes $11.0"

# Bonus:

# Format your total so it always shows two deciaml places, e.g. $11.00
# The list of items makes our code messy. Instead, see if you can read the items from a file. (Google will help here!)
# Allow items to be added to the list. E.g. "Press 1 to add items, press 2 to work out a total".
# Store these new items to the file.

# items = eval(File.open("items.txt", 'r') {|file| file.readline}) instead of doing this which is dangerous because of the eval method do

# require 'json'

# items = JSON.parse(File.read('items.json'), :symbolize_names => true) #2nd Argument converts keys as strings to keys as symbols

# while true
#     print "Press 1 to add items, press 2 to work out a total, or type 'quit' to exit: "
#     choice = gets.chomp
#     case choice
#     when "1"
#         print "How many items would you like to add: "
#         gets.chomp.to_i.times do 
#             print "Enter a customer's name: "
#             new_entry = {customer: gets.chomp}
#             print "Enter the item you would like to add: "
#             new_entry[:item] = gets.chomp
#             print "Enter the price of the item: "
#             new_entry[:cost] = gets.chomp.to_i
#             items.push(new_entry)
#             puts
#         end
#     when "2"
#         print "Enter a customer's name: "
#         cust_name = gets.chomp
#         cust_owes = 0
#         for item in items
#             if item[:customer] == cust_name
#                 cust_owes += item[:cost]
#             end
#         end
#         puts "#{cust_name} owes #{"%.2f" % cust_owes}"
#     when "quit"
#         break
#     else
#         puts "Invalid input"
#     end
# end

# File.write('items.json', JSON.dump(items))

# Beast Mode ++
# Create a ruby application that requests the name of a classmate, and displays their birthday and your birthday. 
# Use at least one Hash and one Array in the solution.

# Bonus:

# Display the number of days between your birthdays.
# Create a method to display their star sign based on their birthday.
# Someone's probably already coded this date to star sign functionality - replace your method with a gem

# require 'zodiac'

# students = Hash.new
# current_year = Time.now.year
# my_dob = [29, 03, 1987]

# print "Please enter a student name: "
# student_name = gets.chomp
# if students.keys.include?(student_name)
#     student_dob = students[student_name][0]
#     student_time = Time.new(2018, student_dob.to_s[4..5].to_i, student_dob.to_s[1..2].to_i)
#     my_time = Time.new(2018, my_dob.to_s[4..5].to_i, my_dob.to_s[1..2].to_i)
#     puts "#{student_name}'s D.O.B. is #{students[student_name][0].to_s[1..-2]} and Kieran's D.O.B. is #{my_dob.to_s[1..-2]}."
#     puts "There are #{my_time.to_i > student_time.to_i ? (my_time.to_i - student_time.to_i) / 60 / 60 / 24 : (student_time.to_i - my_time.to_i) / 60 / 60 / 24 } days between their birthdays"
#     puts "#{student_name}'s zodiac sign is #{student_time.zodiac_sign}'"
# else
#     print "Please enter their birth year: "
#     birth_year = gets.chomp.to_i
#     print "Please enter their birth month: "
#     birth_month = gets.chomp.to_i
#     print "Please enter their birth day: " 
#     birth_day = gets.chomp.to_i
#     students[student_name] = [[birth_day, birth_month, birth_year], my_dob]
#     student_dob = students[student_name][0]
#     student_time = Time.new(current_year, student_dob.to_s[4..5].to_i, student_dob.to_s[1..2].to_i)
#     my_time = Time.new(current_year, my_dob.to_s[4..5].to_i, my_dob.to_s[1..2].to_i)
#     puts "#{student_name}'s D.O.B. is #{students[student_name][0].to_s[1..-2]} and Kieran's D.O.B. is #{my_dob.to_s[1..-2]}."
#     puts "There are #{my_time.to_i > student_time.to_i ? (my_time.to_i - student_time.to_i) / 60 / 60 / 24 : (student_time.to_i - my_time.to_i) / 60 / 60 / 24 } days between their birthdays"
#     puts "#{student_name}'s zodiac sign is #{student_time.zodiac_sign}'"
# end

require 'zodiac'

students = [{name: "Kieran", day: 29, month: 03, year: 1987}, {name: "Jess", day:01, month: 01, year:1991}]

print "Please enter a students name: "
student_name = gets.chomp
print "Please enter your birthdate in dd/mm/yyyy format: "
my_dob = gets.chomp.split("/")

student_found = false

for student in students
    if student[:name] == student_name
        student_found = true
        puts "#{student_name}'s date of birthday is #{student[:day]}/#{student[:month]}/#{student[:year]}"
        my_dob = Time.new(2018, my_dob[1], my_dob[0]).to_i
        student_dob = Time.new(2018, student[:month], student[:day])
        unless my_dob == student_dob.to_i
            if student_dob.to_i > my_dob
                age_difference = (student_dob.to_i - my_dob) / 60 / 60 / 24
            else
                age_difference = (my_dob - student_dob.to_i) / 60 / 60 / 24
            end
        end
        puts "There are #{age_difference} days between your birthdays."
        puts "#{student_name} is a #{student_dob.zodiac_sign}"
    end
end

puts "No student by that name found." unless student_found