require 'faker'
require 'terminal-table'
 
# #Let's see if we can make a fake person...
# person_name            = Faker::Name.name
# person_email           = Faker::Internet.email
# person_company         = Faker::Company.name
# person_company_slogan  = Faker::Company.bs
# person_phone           = Faker::PhoneNumber.phone_number
# person_address         = Faker::Address.street_address
# person_city            = Faker::Address.city
# person_state           = Faker::Address.state
# person_zip             = Faker::Address.zip_code
 
 
# # Wowee-wow-wow. Now let's print him off some business cards
# puts "#{person_name}
# #{person_company}
# '#{person_company_slogan.capitalize}'
# #{person_address}
# #{person_city}, #{person_state} #{person_zip}
# Call me at : #{person_phone}
# Email me at: #{person_email}
# It's a pleasure doing business."

contacts = Hash.new

15.times do
    contacts[Faker::Name.name] = {email: Faker::Internet.email, phone: Faker::PhoneNumber.phone_number}
end



rows = []

for name, details in contacts
    rows.push(["Name: #{name}", "Email: #{details[:email]}", "Phone: #{details[:phone]}"])
end

table = Terminal::Table.new :rows => rows

puts table



