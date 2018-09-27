class GumballMachineView

  def greeting
    puts "Gumball Machine: Let's Play"
  end

  def menu
    choice = nil
    while choice != "G" && choice != "R" && choice != "X"
      puts "Press G to get a gumball, R to refill, or X to exit"
      choice = gets.chomp.upcase
    end
    
    choice
  end

  def getGumball
    puts "Yum, here's your gumball!"
  end

  def machineEmpty
    puts "You're all out of balls!"
  end

  def refill(count)
    puts "You have #{count} gumballs!"
  end

  def exit
    puts "GG!"
  end

end