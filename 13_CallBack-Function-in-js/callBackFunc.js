// 1. Call Back
// A Callback is a function passed into another function as an argument

// 2. Synchronous action 
// A Synchronous action are the action that initate and finish one-by-one 

// 3. Asynchrounous Action
// Asynchronous actions are the actions that we initiate now and they finish it later (eg. setTimeOut)

// Example of Synchrounous Action
// let firstName = prompt("Enter first Name: ")
// let age = prompt("Enter age: ")
// console.log(`The name is: ${firstName} and age is ${age}`)

// Example of Asynchronous Action
 console.log("Start")
 setTimeout(function(){
    console.log("Processing-----")
 }, 5000);
 console.log("End")

 // 1. Example of CallBack 

 function display(message){
    console.log(message)
 }

 // 1. Example of CallBack
  
 function firstFunc() {
    display("Hello");
 }

 function secondFunc(){
    display("Bye")
 }

 firstFunc();
 secondFunc();

 // 2. Example of callBack
 function displayResult(res){
    console.log(res);
 }

 function calculation(num1, num2, myCallBackFunction){
    let sum = num1 + num2;
    myCallBackFunction(sum);
 }

 function calculation2(num1, num2, myCallBackFunction){
    let sub = num1 - num2;
    myCallBackFunction(sub);
 }

 calculation(20, 30, displayResult)
 calculation2(50, 20, displayResult)


 // Assignment of addition, Subtraction, Multiplication

 // Addition
 function addition(num1, num2, callBack){
    const result = num1 + num2;
    callBack(result)
 }

 // Subtraction 
 function subtraction(num1, num2, callBack){
    const result = num1 - num2;
    callBack(result);
 }

 // Multiplication
 function multiplication(num1, num2, callBack){
    const result = num1 * num2;
    callBack(result)
 }

 // display Result
 function displayResult(result){
    console.log(result)
 }

 let a = parseInt(prompt("Enter first Number: "));
 let b = parseInt(prompt("Enter Second Number: "));

  addition(a, b, displayResult)
  subtraction(a, b, displayResult)
  multiplication(a, b, displayResult)
