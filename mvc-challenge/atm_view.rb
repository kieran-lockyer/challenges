class AtmView
    def display_balance(amount)
        puts "Your balance is: #{amount}"
    end

    def invalid_pin
        puts "Invalid Pin!"
    end

    def withdraw(amount)
        puts "You withdrew #{amount}"
    end
end