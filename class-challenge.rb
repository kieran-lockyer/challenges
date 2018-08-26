class Cat
    def initialize(name)
        @name = name
    end

    def speak
        puts "#{@name} says meow."
    end
end

cat = Cat.new("Chairman meow")

cat.speak