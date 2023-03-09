//Lowlevel languages like C -> you have to manually manage resources like CPU
//high level languages like javascript and python you dont need to manage resources bc these languages
//have abstractions that take this work away from us
//this makes the language easir to learn and use but the program will never be as fast as C program

//garbage-collection: algorithm inside of JS engine that removes all unused and old objects from computer memory
//interpreted or just-in-time compiled language
//computers only understand 0s and 1s, machine code. js is an abstraction over machine code
//compiling or interpreting: necessary step in every programming language, where abstraction is translated to 0s and 1s

//Multi-paradigm: procedural, object-oriented and functional programming.
//, a paradigm is ‘a set of assumptions, concepts, values, and practices that constitutes a way of viewing reality
// for the community that shares them, especially in an intellectual discipline’.

//many languages are only one of these but JS allows u to use either paradigm you want
//procedural programming: organizing the code in a very linear way with some functions in between.
//The Procedural code is often not reusable, which may pose the need to recreate the code if is needed
// to use in another application
//Difficult to relate with real-world objects
//The importance is given to the >operation< rather than the data, which might pose issues in some data-sensitive cases
//The data is exposed to the whole program, making it not so much security friendly

//object-oriented programming:
//functional programming:

//prototype-based object-oriented approach:
//almost everything in JS is an object, except for primitive values

//prototypal inheritance = we create arrays from an array blueprint (like a template - called prototype)
//arrays we create on code inherit the methods from the blueprint so we can use them in the arrays

//javascript has first-class functions: functions are treated as regular objects, that can be passed inside
//of one another and return functions from functions
//allows for function-programming

//Js is a dynamic language, its dinamycally typed
//we dont assign data types to variables, they only become known when the engine executes the code
//the types can be changed as we reassigned the variables

//Single-threaded language - a brief overview
//Concurrency model: how JavaScript handles multiples tasks happening at the same time
//Javascript runs in one single thread. It can only do one thing at a time, so we need a way to handle multiples things
//happening at the same time.

//Thread in computing: like a set of instructions that is executed on the CPU. It's where our code is actually executed
//in a machine processor

//long running task could block the single thread where the computer is running.
//we want non-blocking behavior
//to do that, we need an event loop: takes long running tasks, executes them in the background,
//puts them back in the main thread once they are finished. This is what JS does.