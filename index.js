'use strict';

let toogle = document.getElementById('toogle');
let darkMode = document.getElementById('dark-mode');
let body = document.getElementById('body');
let navbarTwo = document.getElementById("navbar-2");
let navbar = document.getElementById("navbar");
let number = document.getElementById("number");
let numberBtn = document.getElementById('number-btn');
let natija = document.getElementById("natija");
let reset = document.getElementById("reset");

darkMode.addEventListener("click" , function(){
    document.body.classList.toggle('dark');
    
})


toogle.addEventListener("click", ()=>{
    navbarTwo.classList.toggle("navbar-2-active");
    navbar.classList.toggle('navbar-active');
});



let randomNumber = Math.trunc(Math.random()*20+1);
let score = 10;


numberBtn.addEventListener("click", ()=>{
    let son = number.value*1
    // console.log(son,randomNumber);
    if(son == randomNumber){
        natija.textContent = "Yutdingiz! ";
        body.style.backgroundColor = "rgb(6, 229, 6)";
        reset.style.display = "block";
    } else if(son > randomNumber){
        natija.textContent = "Siz kiritgan son katta kichikroq son kiriting! ";
    } else{
        natija.textContent = "Siz kiritgan son kichik, kattaroq son kiriting! "
    }
});
console.log(randomNumber, number);

reset.onclick = function(){
    window.location.reload();
};