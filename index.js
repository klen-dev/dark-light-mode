let toogle = document.getElementById('toogle');
let darkMode = document.getElementById('dark-mode');
let body = document.getElementById('body');
let navbarTwo = document.getElementById("navbar-2");
let navbar = document.getElementById("navbar");

darkMode.addEventListener("click" , function(){
    document.body.classList.toggle('dark');
    
})


toogle.addEventListener("click", ()=>{
    navbarTwo.classList.toggle("navbar-2-active");
    navbar.classList.toggle('navbar-active');
})