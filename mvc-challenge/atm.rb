=begin
** ATM **
dispense money - model
respond to user choice - controller
display balance - view
retrieve balance - model
prompt for user input - controller
respond to invalid pin - view
=end

require_relative 'atm_controller'

main = AtmController.new

main.run

