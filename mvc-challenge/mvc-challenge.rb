=begin
    ** GUMBALL MACHINE **
keep track of number of gumballs - model
inform user of result - view
check if gumballs are available - model
prompt for user input - controller
process user input - controller
provide gumballs - model
accept gumball refills - model
=end

require_relative 'mvc_controller'

gumballMachineController = GumballMachineController.new
gumballMachineController.run