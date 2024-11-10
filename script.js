function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}
const toggleDarkMode = () =>{
    document.body.classList.toggle("dark-mode");
}
themeButton.addEventListener("click",toggleDarkMode);