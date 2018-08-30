class Cat
    def initialize(name)
        @name = name
        @walks = walks
    end

    def speak
        puts "#{@name} says meow."
        return self
    end
end

# cat = Cat.new("Chairman Meow")

# cat.speak.walks.walks.display_walks.walks.display_walks

class Dog
    require 'geocoder'
    attr_accessor :breed, :age, :location, :breed

    def initialize (dog_name, age, location = "Brisbane", breed = "Unkown", walks = 0)
        @name = dog_name
        @breed = breed
        @walks = []
        @age = age.to_i
        @location = location
        puts "Initialize running"
    end

    def speak
        puts "#{@name} says Woof!"
        self
    end

    # #setter
    # def name=(name)
    #     @name = name
    # end

    # #getter
    def name
        return @name
        self
    end

    def walks(location, distance)
        @walks.push([Time.now, distance, Geocoder.search(location).first.coordinates])
        return self
    end

    def display_walks
        puts "#{@name} has been for #{@walks.count} walks today."
        for walk in @walks
            puts "At #{walk[0]}, #{@name} walked #{walk[1]}km's from #{Geocoder.search(walk[2]).first.address}"
        end
        return self
    end
end

dog1 = Dog.new("Fido", 2, "Brisbane", "Blue Heeler")
# dog1.name = "Rover"
lassie = Dog.new("Lassie", 4, "Melbourne", "Collie")
# lassie.name = "Lassie"

puts dog1.inspect
puts lassie.inspect

dog1.speak
lassie.speak

puts dog1.name

dog1.walks("Brisbane", 20).walks("Brisbane", 10).display_walks