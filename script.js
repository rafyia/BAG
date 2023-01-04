let search = document.querySelector(".search-box");

document.querySelector("#search-icon").onclick = () => {
    search.classList.toggle('active');
}
// navbar 
let navbar = document.querySelector(".navbar");

document.querySelector("#menu-icon").onclick = () => {
    navbar.classList.toggle('active');
}
//Header Animation
let header = document.querySelector('header');

window.addEventListener('scroll' , () =>{
    header.classList.toggle('active' ,window.scrollY > 0);
})
