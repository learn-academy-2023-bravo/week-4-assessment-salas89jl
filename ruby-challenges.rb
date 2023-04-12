# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.
reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

# Psuedo Code
# Create a function called is_even_odd
# Function will take a number as an input
# Use the .even? method to return a boolean "true/false"
# Use a conditional to that compares the boolean value returned from the .even? method
# If number is true then return "#{num} is even"
# if number is false then return "#{num} is odd"

def is_even_odd num
    if num.even? == true
        "#{num} is even"
    else 
        "#{num} is odd"
    end
end

p is_even_odd reposts1
# => "7 is odd"
p is_even_odd reposts2
# =>"42 is even"
p is_even_odd reposts3
# => "221 is odd"

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

# Pseudo Code
# create a method called gutted_out 
# Method will take a string as an input example "Rubber Soul"
# using the .delete! 

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def gutted_out str 
    str.delete "a,i,e,o,u"
end

p gutted_out 'Rubber Soul' # => "Rbbr Sl"
p gutted_out 'Sgt Pepper' # => "Sgt Pppr"
p gutted_out 'Abby Road' # => "Abby Rd"

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# Psuedo Code
# Create a method called palin_no_yes
# input will be a str
# declare two varibles to store: 1. to store the origal str just lowercased. 2. will store a lowercase and reversed str.
# using a conditional compare if both varibles are equal
# if the strings are equal then return "#{str} is a palindrome" 
# if the strings are not equal then return "#{str} is not a palindrome"

def palin_no_yes str
    down_str = str.downcase
    reverse_str = str.downcase.reverse!
    if down_str == reverse_str
        "#{str} is a palindrome"
    else    
        "#{str} is not a palindrome"
    end
end

p palin_no_yes palindrome_tester1 #=>"Racecar is a palindrome"
p palin_no_yes palindrome_tester2 #=>"LEARN is not a palindrome"
p palin_no_yes palindrome_tester3 #=>"Rotator is a palindrome"