
// WINDOW  is a global object provided by browser

// DOM
//  Document object model

// first wwe have a window object in browser and by js we have a sub object
// of window object --> so all the feilds of html is access inside js file and it store in form of document object ,

// we use console.log to print it prints the html of an object not the
// we use console.dir to print object

// console.log(window.document.body);
// console.dir(window.document.body);

// let heading = document.getElementById("heading");
// console.dir(heading);
// console.log(heading);

// let headings = document.getElementsByClassName("para");
// console.log(headings);
// console.dir(headings);

// SELECT ELEMENTS
// by elementId
// by elementsClass
// by tagName
// by queerySelector
// by queerySelectorAll

let firstEle = document.querySelector(".para");
console.dir(firstEle);

// let allEle = document.querySelectorAll(".para");
// console.dir(allEle);

// YOU get null if you not mention . or #

// tree like structure
//  upper parent
// lower child
// more lower discendents
//  siblings -->same level

// PROPERTIES
//  tagName --> gives u tag of variable

//  TYPES OF NODES IN DOM
//  1 text nodes
//  2 .comment
//  3 element





