function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const menu = document.querySelector(".menu-links");

// document.body.addEventListener('click', () => {
//     menu.classList.remove('open')
// })

const downloadCv =  document.querySelector('.download-cv');

downloadCv.addEventListener ('click', () => {
    const a = document.createElement("a");
    a.href = "resume.PDF"; 
    a.download = "resume.PDF";

    a.click();
})