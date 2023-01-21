//fixed header
const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 200);
});


//feedback
const btn = document.querySelector('.submit');

btn.addEventListener('click', function(){
	alert("It is not working yet")
});

//navbar hamburger
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.header-list');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
};