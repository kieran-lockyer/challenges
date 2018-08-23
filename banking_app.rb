begin
    set_balance = File.open("balance.txt", 'a+') { |file| file.readline}.to_i
rescue EOFError => e
    set_balance = 0
end

balance = set_balance
password = "pass"

users = Hash.new()

transaction_history = []

def authenticate(password)
    print "Please enter your password: "
    if gets.chomp == password
        return true
    else
        puts "Invalid password!"
        return false
    end
end

def login()
end

def signup()
end

def display_balance(balance)
    puts "Your balance is $#{balance}"
end

def deposit(balance, transaction_history)
    print "How much would you like to depost: "
    deposit_amount = gets.chomp.to_i
    balance += deposit_amount
    transaction_history.push("Deposited $#{deposit_amount}")
    puts "Your new balance is #{balance}"
    return balance, transaction_history
end

def withdraw(balance, transaction_history)
    print "How much would you like to withdraw: "
    withdraw_amount = gets.chomp.to_i
    if balance >= withdraw_amount
        balance -= withdraw_amount
        transaction_history.push("Withdrew $#{withdraw_amount}")
        puts "Your new balance is #{balance}"
        return balance, transaction_history
    else
        puts "Insufficient funds!"
    end
end

def history(transaction_history)
    transaction_history.each { |transaction|
        puts transaction
    }
end

def main(balance, transaction_history)
    running = true
    while running
        puts "What would you like to do? (Options: balance, deposit, withdraw, history, exit)"
        options = gets.chomp
        case options
        when "balance"
            display_balance(balance)
        when "deposit"
            balance, transaction_history = deposit(balance, transaction_history)
        when "withdraw"
            balance, transaction_history = withdraw(balance, transaction_history)
        when "history"
            history(transaction_history)
        when "exit"
            File.open("balance.txt", 'w') { |file| file.write(balance)}
            running = false
            break
        else
            puts "Invalid selection!"
        end
        print "Would you like to return to the main menu? (Y/N): "
        if gets.chomp == "N"
            File.open("balance.txt", 'w') { |file| file.write(balance)}
            running = false
            break
        else
            print %x{clear}
        end
    end
    return balance, transaction_history
end

running = true

while running
    puts "Welcome to the banking app!"
    print "Log In(l) or Sign Up(s) or Exit(e): "
    choice = gets.chomp
    case choice
    when "l"
        if authenticate(password)
            balance, transaction_history = main(balance, transaction_history)
        end
    when "e"
        running = false
        break
    else
        puts "Invalid selection!"
    end
end

