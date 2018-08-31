class Pet
    def initialize(name)
        @name = name
    end
    
    def pet
        puts "#{@name} says 'Thanks for the pet'"
    end
end

class Cat < Pet
    def speak
        puts "#{@name} says meow."
        return self
    end
end

# cat = Cat.new("Chairman Meow")

class Dog < Pet
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

    # #getter
    def name
        return @name
        self
    end

    def walks(location, distance)
        @walks.push(Walk.new(location, distance))
        return self
    end

    def display_walks
        puts "#{@name} has been for #{@walks.count} walks today."
        for walk in @walks
            puts "  - #{walk.time.strftime("On %m/%d/%Y at %I:%M%p")} #{@name} walked #{walk.distance}km from #{Geocoder.search(walk.location).first.city}"
        end
        return self
    end

    def total_distance
        total_distance = 0
        for walk in @walks
            total_distance += walk.distance
        end
        puts "Total distance: #{total_distance}km"
        return self
    end
end

class Walk
    attr_accessor :location, :distance, :time
    def initialize(location, distance)
        @location = Geocoder.search(location).first.coordinates
        @distance = distance
        @time = Time.now
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

dog1.walks("Brisbane", 20).walks("Brisbane", 10)
dog1.display_walks
dog1.total_distance