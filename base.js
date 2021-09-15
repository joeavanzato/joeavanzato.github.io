

var sidebar = document.querySelector(".sidebar");
var menu_button = document.querySelector(".menu_button");
var openicon = document.querySelector(".material-icons");
var mainlinks = document.querySelectorAll(".sidebarLink");
var backgroundl = document.querySelector(".background");
menu_button.addEventListener("click", toggleSidebar);
var container = document.querySelector(".container");

function toggleSidebar(){
if (sidebar.classList.contains("showMenu")) {
    sidebar.classList.remove("showMenu");
    menu_button.style.display="block";
    backgroundl.style.zIndex="-99";
    container.style.display="flex";
    setTimeout(() => { container.classList.remove("hideContainer");}, 50);

} else {
    sidebar.classList.add("showMenu");
    menu_button.style.display="none";
    backgroundl.style.zIndex="6";
    container.classList.add("hideContainer");
    setTimeout(() => { container.style.display="none";}, 300);
}



window.onload=function(){
Particles.init({
selector:'.background',
connectParticles:true,
color: ['#ff0000', '#000dff', '#a200ff', '#ffffff'],
maxParticles: 400,
speed: .2,
minDistance: 80,
});
};


var typed = new Typed('#typed', {
stringsElement: '#typed-strings',
typeSpeed: 25,
});




$(document).ready(function() {
$('#smarttab').smartTab();
});
$('#smarttab').smartTab({
selected:0,
theme: 'none',
justified: true,
transition: {
animation: 'slide-vertical',
},
autoAdjustHeight: true,
});

