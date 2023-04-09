# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: Object-oriented programming is a programming language based on everything being an instance of an object, unlike JavaScript, where everything is oriented toward the data type. 

Researched answer: everything in object-oriented programming is arranged around objects containing a mixture of data and behavioral properties. These objects are used to represent things or concepts in a program. 

A developer can write a program that simulates a music band. Objects can be created by the function each band member performs. A developer would then create an object representing the vocalist, lead guitarist, rhythm guitarist, bass guitarist, and drummer.

Now suppose that there was a need for having multiple bands. In object-oriented programing, objects can be created using classes which are blueprints/templates of a particular object type. By creating objects from a class, or instances of a class, an object can inherit attributes and behavior. 

2. What is the difference between a Float and an Integer in Ruby?

Your answer: A float is a decimal number and an integer is whole number. 

Researched answer: Integers and Floats are both numeric data types in Ruby. However, integers refer to whole numbers, and floats refer to decimal numbers. There are ways to convert integers to floats and floats to integers. This is possible by using to_i from float to integer and to_f from integer to float. In Ruby, integers and floats perform arithmetic operations differently. For instance, when dividing an integer with an integer, the return will be an integer, while when a float is divided by an integer or vise versa, the result will be a float. Another difference is object identity of integers and floats behave differently. In Ruby, if there are two float objects with the same value are considered to be two different objects; however, when two integer objects with the same value are considered to be the same object. Finally, when it comes to converting between floats and integers, there may be a loss of data and a change in behavior since the scaling of an integer is much limited to that of a float. Meaning there may be a loss of performance or calculational precision. 

3. Ruby has an implicit return. What does that mean?

Your answer: Implicit returns means that, by default, Ruby will provide a return on the last line of code of the block. In other words, there is no need to use the keyword "return" at the end of a block of code.

Researched answer: Some of the advantages of implicit return are 
    1. It may make code easier 
    2. It reduces clutter
Some disadvantages include the following: 
    1. It may be hard to decipher what exact value will be returned, primarily if developers are used to writing in a programming language that requires an explicit return. 
    2. A method may return the wrong value if it doesn't have a return statement to specify when and where to return a value.  

4. What is a block in Ruby?

Your answer: A Ruby block is like a magic box that a developer can use to perform tasks. To use this magic box, a developer writes a set of instructions and places them inside this box. Not only does this box acts like a storage container for the instructions, but it performs the instructions and produces results.  

Researched answer: Blocks in Ruby are pieces of code that are passed as an argument to a method. To define blocks, use curly braces if inline or do and end if using a multi-line block. Blocks take arguments like methods by passing the parameter inside the pipes | x |. Additionally, a block can be used with iterators such as each, map, and reduce. For instance, .each can use used with an array and passing a parameter of x to print out the multiplication of each numeric value in the array by two. 

5. How do you extract a value in a Ruby hash?


Your answer: Ruby Hashes are containers that developers can not only store information/data but can organize that information/data using key-value pairs like this; "key => value." Developers can access each value using its associated key. For instance: 


Researched answer: A Ruby Hash is similar to an array, but instead of using numbers to identify its index, hashes use the key name. Ruby hashes use ({}) to contain its key-value pairs and use the rocket symbol => to separate each key and its values, and commas separate each key-value pair within the hash. To access a key's value, bracket notation is required. 


for example: 
    # which contaions my three dogs
```rb
# my_dogs is a hash
my_dogs = {

    "borator" => "dexter",
    "greyhuahua" => "lokito",
    "chihuahua" => "napolian"
}
# I can access my chihuahua's key value "napolian" by using the bracket notation

puts my_dogs["chihuahua"] # => "napolian"

```



## Looking Ahead: Terms for Next Week

1. RSpec:

2. Test-driven development:

3. PostgreSQL:

4. CRUD:

5. HTTP:
