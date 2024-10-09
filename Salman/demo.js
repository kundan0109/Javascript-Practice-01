// const para = document.getElementById("para");
// para.innerText = "it is green line paragraph";
// para.style.color = "green";

// const head = document.getElementById("header");
// head.innerText = "it is blue line header";
// head.style.color = "blue";

// const fun = function(num ){
//     let sum=  0;
//     for(let i = 0 ; i < num ; i++){
//         sum = sum + i;
//     }
//     return sum;
// }

const button = document.getElementById("btn");

const first = document.getElementById("first");

const second = document.getElementById("second");

button.addEventListener("click", () => {
  console.log(first.value);
  console.log(second.value);
  alert(parseInt(first.value) + parseInt(second.value));
});
