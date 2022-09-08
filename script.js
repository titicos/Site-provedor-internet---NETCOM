


let menu = document.querySelector(".mobile-imagem");
let mobile=document.querySelector(".mobile");

menu.addEventListener("click",function(event){
event.preventDefault();
mobile.classList.toggle("display");

})