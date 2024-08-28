const input = document.getElementById("name");
const btn = document.getElementById("btn");
const para = document.getElementById("para");

btn.onclick = gerrtUser;

function gerrtUser() {
  const name = input.value;
//   debugger;

  if (!name) {
    para.textContent = "hii please enter your name";
  } else {
    para.textContent = "hii " + name + " How are you ";

    // const para = document.createElement("p");

    for (let n = 1; n <= name; n++) {
      if (n % 3 == 0) {
        console.log("divisible by 3 fizz " + n);
        // para.innerText = "Fizz";
        // para.style.color = "blue";
        // div.append(para);

      } else if (n % 5 == 0) {
        console.log("divisible by 5 buzz " + n);
        // para.innerText = "Buzz";
        // para.style.color = "yellow";
        // div.append(para);


      }
      if (n % 5 == 0 && n % 3 == 0) {
        console.log("divisible by 3 & 5 fizzBuzz " + n);
        // para.innerText = "FizzBuzz";
        // para.style.color = "pink";
        // div.append(para);

      }
    }
  }
}
