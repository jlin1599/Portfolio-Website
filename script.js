function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}
let animation = {
    revealDistance: 100,  
    initialOpacity: 0,
    transitionDuration: '1s',
    transitionProperty: 'all',
    transitionTimingFunction: 'ease',
    transitionDelay: '0s',
};

const revealableContainers = document.querySelectorAll('.revealable');

function reveal() {
    for (let i = 0; i < revealableContainers.length; i++) {
        let windowHeight = window.innerHeight;
        let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;

        console.log(`Element ${i}: top=${topOfRevealableContainer}, windowHeight=${windowHeight}`);

        if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
            revealableContainers[i].classList.add('active');
        } else {
            revealableContainers[i].classList.remove('active');
        }
    }
}

window.addEventListener('scroll', reveal);
reveal();  






