// MENU ACTIF AU SCROLL

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});


// HEADER AU SCROLL

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        header.style.padding = "10px 8%";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.15)";
    }else{
        header.style.padding = "15px 8%";
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,.1)";
    }

});


// FORMULAIRE

const form = document.querySelector(".contact-form");

if(form){

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        alert(
            "Merci pour votre message. Nous vous répondrons rapidement."
        );

        form.reset();

    });

}


// ANIMATION D'APPARITION

const elements = document.querySelectorAll(
    ".service-card, .galerie-item, .apropos-content, .apropos-image"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},{
    threshold: 0.2
});

elements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "all .8s ease";

    observer.observe(element);

});