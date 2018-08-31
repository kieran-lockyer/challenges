# Challenge
# Implement a Vehicle class. It should accept make and model properties when you create an object. 
# E.g. civic = Vehicle.new("Honda", "Civic") 

# Implement a Car class. It should inherit from Vehicle.
# E.g. civic = Car.new("Honda", "Civic")

# Implement a Motorbike class. It should also inherit from Vehicle.
# E.g. low_rider = Motorbike.new("Harley Davidson", "Low Rider") 

# Implement the following methods, but first, device where they should live.
# refuel (should take one argument: litres)
# wheelie (should display a message)
# wind_up_windows (should display a message)
# fuel_level (should display total litres in the tank)

class Vehicle
    def initialize(make, model, fuel_capacity)
        @make = make
        @model = model
        @fuel_capacity = fuel_capacity
        @fuel = 0
        @wheels = 4
    end

    def refuel(litres)
        if @fuel + litres > @fuel_capacity
            @fuel = @fuel_capacity
        else
            @fuel += litres
        end
    end

    def fuel_level
        puts "#{@make} #{@model} has #{@fuel} litres remaining."
    end
end

class Car < Vehicle
    def initialize
        super(make, model, fuel_capacity, wheels)
        @doors = 4
    end

    def wind_up_windows
        puts "#{@make} #{@model} winds up windows."
    end
end

class Motorbike < Vehicle
    def initialize
        super(make, model, fuel_capacity)
        @wheels = 2
    end

    def wheelie
        puts "#{@make} #{@model} pops a wheelie."
    end
end

civic = Car.new("Honda", "Civic", 50)
low_rider = Motorbike.new("Harley Davidson", "Low Rider", 15) 

civic.refuel(50)
low_rider.refuel(20)

low_rider.wheelie
civic.wind_up_windows

civic.fuel_level
low_rider.fuel_level

# Beast Mode
# A car should only allow maximum 50L of petrol and a bike 15L. Keep your code DRY :)
# Hint: research how `super` works.

# Example:
# civic = Car.new("Honda", "Civic")
# civic.fuel_level # -> 0L in the tank
# civic.refuel(10)
# civic.fuel_level # -> 10L in the tank
# civic.refuel(10)
# civic.fuel_level # -> 20L in the tank
# civic.refuel(100)
# civic.fuel_level # -> 50L in the tank