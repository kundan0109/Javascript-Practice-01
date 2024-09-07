// ARROW FUNCTION IS FUNCTION DEFINITION + VARIABLE STORE

// function countVovels(str) {
//   let count = 0;
//   for (let char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }

//   console.log(count);
// }

// countVovels("kundan");




// const countVovels = (str) => {
//   let count = 0;
//   for (let char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }

//   console.log(count);
// }

// countVovels("abcdefiii");


// METHOD IS FUNCTION WHICH IS ASSOCIATED WITH A OBJECT

// METHOD IS A SET OF CODE TO PERFORM A TASK WHICH IS ASSOCIATED WITH A OBJECT or with a data structure.
// eg.  
// UpperCase is method associated with the object string .






// CALLBACK is a function which is pass as a argument to another function.

// let array = [1, 2, 3, 4, 5];

// array.forEach(function printValue(val){
//     console.log(val);
// });


// array.forEach((value , index , array) => {
//     console.log(value , index ,  array);
// })



 // HIGHER ORDER FUNCTION ---->  function which take function as a parameter  or return a function as a value 



 // ARRAY METHODS 
 
 // MAP --> it creates new array 
 // filter --> to filter out based on some condition
 // reduce ---> works on accumulator and current(previous and current)




//  let n = prompt("Enter  a number : ");

//  let arr = [];
//  for (let i = 1; i <= n; i++){
//     arr.push(i);
//  }

//  console.log(arr);
//  let sum = arr.reduce((previous , current) => {
//     return previous + current;
//  })

//  console.log("SO sum is : " + sum);

//  let mul = arr.reduce((previous , current) => {
//     return previous * current;
//  })

//  console.log("SO mul is : " + mul);