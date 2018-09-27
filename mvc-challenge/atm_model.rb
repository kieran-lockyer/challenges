class AtmModel
    attr_accessor :balance, :pin

    def initialize(balance=10000)
        @balance = balance
        @pin = 1234
    end

    def dispense(amount)
        if @balance >= amount
            @balance -= amount
            return amount
        else
            "Insufficient Funds!"
        end
    end
end