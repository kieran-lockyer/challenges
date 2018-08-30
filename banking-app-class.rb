class UI
    require 'json'
    attr_accessor :name, :pin, :balance, :history

    @@customer_data = JSON.parse(File.read('customer-data.json'), :symbolize_names => true)
    def initialize
        print %x{clear}
        puts "Welcome to the banking app!"
        while true
            counter = 0
            ["Sign Up", "Log In", "Exit"].each {|option| puts "Press #{counter += 1} to #{option}"}
            option = gets.chomp
            case option
            when "1"
                create_customer
                @customer = Customer.new(@name, @pin)
                menu
            when "2"
                if authenticate
                    @customer = Customer.new(@name, @pin, @balance, @history)
                    menu
                else
                    puts "You have used all available attempts. Please try again later"
                    break
                end
            when "3"
                puts "Thank you for visiting the banking app!"
                File.write('customer-data.json', JSON.dump(@@customer_data))
                break
            else
                puts "Invalid selection!"
            end
        end
    end

    def create_customer
        print %x{clear}
        print "Please enter your name: "
        @name = gets.chomp
        print "Please enter a 4 digit security pin: "
        @pin = gets.chomp
    end

    def authenticate
        print %x{clear}
        print "Please enter your name: "
        @name = gets.chomp.to_sym
        if @@customer_data.keys.include?(@name)
            attempts = 3
            while attempts > 0
                puts "#{attempts} attempts remaining"
                print "Please enter your pin: "
                @pin = gets.chomp
                if @@customer_data[@name][:pin] == @pin
                    @balance = @@customer_data[@name][:balance]
                    @history = @@customer_data[@name][:history]
                    return true
                else
                    puts "Your password is invalid"
                    attempts -= 1
                end
            end
        end
        return false
    end

    def menu
        while true
            print %x{clear}
            puts "Welcome #{@name}"
            puts "What would you like to do? (Options: balance, deposit, withdraw, history, exit)"
            options = gets.chomp
            case options
            when "balance"
                @customer.display_balance
            when "deposit"
                @customer.deposit
            when "withdraw"
                @customer.withdraw
            when "history"
                @customer.display_history
            when "exit"
                @@customer_data[@name][:balance] = @customer.set_balance
                @@customer_data[@name][:history] = @customer.set_history
                File.write('customer-data.json', JSON.dump(@@customer_data))
                break
            else
                puts "Invalid selection!"
            end
            print "Would you like to return to the main menu? (Y/N): "
            if gets.chomp == "N"
                @@customer_data[@name][:balance] = @customer.set_balance
                @@customer_data[@name][:history] = @customer.set_history
                File.write('customer-data.json', JSON.dump(@@customer_data))
                break
            else
                print %x{clear}
            end
        end
    end
end

class Customer
    attr_accessor :name, :pin, :customer_id, :account

    @@next_customer_id = 0001
    def initialize(name, pin, balance = 0, history = [])
        @name = name
        @pin = pin
        @account = Account.new(balance, history, type = "Savings", account_name = type)
        @customer_id = "ID" + @@next_customer_id.to_s
        @@next_customer_id += 1
    end

    def display_balance
        puts "Your #{@account.type} account balance is #{@account.balance}."
    end

    def deposit
        print "How much would you like to deposit: "
        amount = gets.chomp.to_i
        @account.balance += amount
        @account.history.push("Deposited #{amount}")
    end

    def withdraw
        print "How much would you like to withdraw: "
        amount = gets.chomp.to_i
        puts @account.balance > amount ? @account.balance -= amount : "Insufficent Funds"
        @account.history.push("Withdrew #{amount}")
    end

    def display_history
        @account.history.each {|transaction| puts transaction}
    end

    def set_balance
        return @account.balance
    end

    def set_history
        return @account.history
    end
end

class Account
    attr_accessor :type, :balance, :history, :account_name, :account_number

    @@next_account_number = 0001
    def initialize(balance, history, type, account_name)
        @type = type
        @account_name = account_name
        @balance = balance
        @history = history
        @account_number = "AN" + @@next_account_number.to_s
        @@next_account_number += 1
    end
end

main = UI.new