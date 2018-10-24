=begin
Challenge
The following code is broken. The say method is incomplete. 
Complete the method to fix the code! Say should take one argument (a message) and put it on the screen.

def say
end

say('Hello')
say('Welcome to my application!')
Implement the add method. It should take three numbers, add them together and return the result. 
Should puts be inside or outside the method? Discuss.

puts add(2,5,7)
Learning Outcomes
On successful completion of this Unit students will be able to,

understand and use methods
=end

def say(message)
    puts message
end

say("Hello")
say("Welcome to my application!")

def add(*numbers)
    ans = 0
    numbers.each do |num|
        ans += num
    end
    return ans
end

puts add(2, 5, 7)
puts add(1,2,3,4,5,6,7)