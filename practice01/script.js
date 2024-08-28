


const body = document.querySelector("body");

const para = document.createElement("p");

body.append(para);

para.textContent = "Text content ";


const div = document.createElement("div");
const h2 = document.createElement("h2");

div.textContent = "IT IS MY DIV";
h2.textContent = " IT IS MY H2";

body.append(div);
body.append(h2);


const bluePara = document.createElement("p");
bluePara.textContent = " THIS IS MY BLUE PARA";
bluePara.style.color = "blue";
body.append(bluePara);


const myImage = document.getElementById("image1");
const myButton = document.getElementById("change");
let n = 1;
myButton = document.addEventListener("click",() =>{
    if(n==1){
        myImage.setAttribute("src","./image copy.png");
        n = 2;
    }
    else{
        myImage.setAttribute("src","./image.png");
        n = 1;
    }
});