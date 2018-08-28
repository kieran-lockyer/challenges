class Cat
    def initialize(name, walks = 0)
        @name = name
        @walks = walks
    end

    def speak
        puts "#{@name} says meow."
        return self
    end

    def walks
        @walks += 1
        return self
    end

    def display_walks
        puts "#{@name} has been for #{@walks} walks today."
        return self
    end
end

cat = Cat.new("Chairman Meow")

cat.speak.walks.walks.display_walks.walks.display_walks