begin
    users = eval(File.open("balance.txt", 'a+') { |file| file.readline})
rescue EOFError => e
    users = Hash.new
end

def authenticate(users)
    attempts = 3
    while attempts > 0
        puts "#{attempts} attempts remaining"
        print "Please enter your username: "
        username = gets.chomp
        print "Please enter your password: "
        password = gets.chomp
        if users[username]["password"] == password
            puts "Welcome #{username}"
            return username, users[username]["balance"], users[username]["history"]
        else
            puts "Your username or password are incorrect"
            attempts -= 1
            puts
        end
    end
    puts "You have used all available attempts. Please try again later"
    return false, false, false
end

def signup(users)
    print "Please enter a username: "
    username = gets.chomp
    print "Please enter a password: "
    password = gets.chomp
    users[username] = {"password" => password,
                       "balance" => 0,
                       "history" => []}
    return users, username
end

def display_balance(balance)
    puts "Your balance is $#{balance}"
end

def deposit(balance, history)
    print "How much would you like to depost: "
    deposit_amount = gets.chomp.to_i
    balance += deposit_amount
    history.push("Deposited $#{deposit_amount}")
    puts "Your new balance is #{balance}"
    return balance, history
end

def withdraw(balance, history)
    print "How much would you like to withdraw: "
    withdraw_amount = gets.chomp.to_i
    if balance >= withdraw_amount
        balance -= withdraw_amount
        history.push("Withdrew $#{withdraw_amount}")
        puts "Your new balance is #{balance}"
        return balance, history
    else
        puts "Insufficient funds!"
    end
end

def history(history)
    history.each { |transaction|
        puts transaction
    }
end

def exit(users, username, balance, history)
    File.open("balance.txt", 'w') {|file| file.write(users)}
end

def main(users, username, balance, history)
    running = true
    while running
        puts "What would you like to do? (Options: balance, deposit, withdraw, history, exit)"
        options = gets.chomp
        case options
        when "balance"
            display_balance(balance)
        when "deposit"
            balance, history = deposit(balance, history)
        when "withdraw"
            balance, history = withdraw(balance, history)
        when "history"
            history(history)
        when "exit"
            users[username]["balance"] = balance
            users[username]["history"] = history
            running = false
            exit(users, username, balance, history)
            break
        else
            puts "Invalid selection!"
        end
        print "Would you like to return to the main menu? (Y/N): "
        if gets.chomp == "N"
            users[username]["balance"] = balance
            users[username]["history"] = history
            exit(users, username, balance,)
            running = false
            break
        else
            print %x{clear}
        end
    end
    return balance, history
end

running = true

while running
    print %x{clear}
    puts "Welcome to the banking app!"
    print "Log In(l) or Sign Up(s) or Exit(e): "
    choice = gets.chomp
    case choice
    when "l"
        username, balance, history = authenticate(users)
        if balance
            balance, history = main(users, username, balance, history)
        end
    when "s"
        users, username = signup(users)
        balance, history = main(users, username, 0, [])
    when "e"
        exit(users, username, balance, history)
        running = false
        break
    else
        puts "Invalid selection!"
    end
end

