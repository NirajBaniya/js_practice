// A function is a block of code designed to execute a particular task
// Types of Function
// 1. Function Without Parameter 
// 2. Parameterized Function
// 3. Arrow Function

// Fuction - Syntax: function(){}

function calculateSum(){
    let a = 10;
    let b = 20;
    return a + b
   // console.log(a + b)
    
}
  // in case of console
  calculateSum()

  // in case of return
  let result = calculateSum();
  console.log(result)


  // Parameterized Function
  function calculateAvg(a, b){
    let c =(a + b) / 2;
    console.log("The average of two numbers is: " + c)
  }
  calculateAvg(4, 4)
  calculateAvg(9, 11)
 

  // Arrow Function 
  const arrowFunction = () => {
    console.log("This is a multiply number");
  }
  arrowFunction();


  // Parameterized arrow function
  const multiplyNumber = (a, b) =>{
    let output = a * b;
    console.log(output)
  }
  multiplyNumber(5, 4);

  