let dropdown = document.getElementById("drop");
let hamburger = document.getElementById("icon-hamburger");

function toggleHamburger(){
    dropdown.classList.toggle("open");
}

document.addEventListener("mousedown", (event) => {
    if(!dropdown.contains(event.target) && !hamburger.contains(event.target)){
        dropdown.classList.remove("open");
    }
})