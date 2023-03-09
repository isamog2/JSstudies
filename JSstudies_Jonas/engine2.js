//Js Engine: program that executes JS code

//V8 engine powers Chrome and Node.js
//each browser have their own JS engines
//look up what an Engine is and how it works

//Every JS Engine always has a CallStack and a Heap
// Call stack -> where the code is executed using execution context
// Heap -> Unstructured memory pool where the objects are stored
//Call stack is where its executed, but how is it compiled?

// Difference between compilation and interpretation
//Every cp program needs to be converted into machine code -> this is done through compilation or interpretation

// Compilation: entire source code is converted into machine code at once, written to a binary (portable) file that can
//be executed in any computer
// Source code -> compilation -> becomes 0s and 1s (portable file of machine code) -> execution -> program running
//Execution can happen way after the compilation

//Interpretation: interpreter runs through the source code and executes its line by line
// We dont have the 2 steps above
//Code is read and executed all at the same time
//The source code still has to be converted to machine code, but it happens right before its executed, not ahead of time
//Much slower than compiled languages. This is what JS used to be. It was low performance.

//JIT -> Just-in-time compilation:
//JS now uses a mix between compilation and interpretation
// Compiles entire code into machine code at once, then executed immediately
//instead of compiling right before executing each line

//Source code -> compilation -> machine code not a portable file -> execution happens immediately -> program running
//faster than executing code line by line

