require_relative 'atm_model'
require_relative 'atm_view'

class AtmController
    def initialize
        @atm = AtmModel.new
        @view = AtmView.new
    end

    def run
        print "Enter your pin: "
        if gets.chomp.to_i == @atm.pin
            running = true
            while running
                puts "1. Display Balance"
                puts "2. Withdraw"
                puts "3. Exit"
                print "Enter option: "
                case gets.chomp.to_i
                when 1
                    @view.display_balance(@atm.balance)
                when 2
                    @view.withdraw(@atm.dispense(gets.chomp.to_i))
                when 3
                    running = false
                end
            end
        else
            @view.invalid_pin
        end
    end 
end