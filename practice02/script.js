const input = document.getElementById("name");
const btn = document.getElementById("btn");
const para = document.getElementById("para");




btn.onclick = gerrtUser;

function gerrtUser(){
    const name = input.value;

    if(!name){
        para.textContent = "hii please enter your name"
    }
    else{
        para.textContent = "hii " + name + " How are you "
    }

}