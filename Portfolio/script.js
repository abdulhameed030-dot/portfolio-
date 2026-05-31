// ===== TYPING EFFECT =====

const text = "Frontend Developer";
let index = 0;

function typeEffect(){

    const typing = document.querySelector(".typing-text");

    typing.innerHTML = text.slice(0,index);

    index++;

    if(index > text.length){
        index = 0;
    }

}

setInterval(typeEffect,200);


// ===== SCROLL ANIMATION =====

const sections = document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

    sections.forEach(section=>{

        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < window.innerHeight - 100){

            section.style.opacity = "1";
            section.style.transform = "translateY(0px)";

        }

    });

});