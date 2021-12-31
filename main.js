const menu = document.querySelector(".navbar_links");
const menuBtn = document.querySelector(".navbar_icon");
const overlay = document.querySelector("#overlay");



menuBtn.addEventListener('click',()=>{
	menu.classList.toggle("navbar_open");
	console.log('1');
	overlay.classList.toggle("show");
	

})

overlay.addEventListener('click',()=>{
	menu.classList.toggle("navbar_open");
	overlay.classList.toggle("show");

})