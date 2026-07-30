/* ===========================================
   VESIRA
   app.js
===========================================*/

// Navbar Scroll Effect

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.background = "rgba(255,255,255,.82)";
        header.style.backdropFilter = "blur(18px)";
        header.style.boxShadow = "0 8px 30px rgba(0,0,0,.06)";

    } else {

        header.style.background = "transparent";
        header.style.backdropFilter = "none";
        header.style.boxShadow = "none";

    }

});



/* ===========================================
   Reveal Animation
===========================================*/

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("fade");

    observer.observe(section);

});



/* ===========================================
   Hero Animation
===========================================*/

window.addEventListener("load",()=>{

    const hero = document.querySelector(".hero-content");

    hero.animate([

        {
            opacity:0,
            transform:"translateY(80px)"
        },

        {
            opacity:1,
            transform:"translateY(0)"
        }

    ],{

        duration:1200,
        easing:"ease-out",
        fill:"forwards"

    });

});



/* ===========================================
   Hero Image Parallax
===========================================*/

const heroImage = document.querySelector(".hero-image img");

window.addEventListener("scroll",()=>{

    let value = window.scrollY;

    heroImage.style.transform =
    `translateY(${value*0.12}px)`;

});



/* ===========================================
   Smooth Anchor Scroll
===========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",(e)=>{

        e.preventDefault();

        const target = document.querySelector(anchor.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});



/* ===========================================
   Product Hover
===========================================*/

document.querySelectorAll(".products article").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background =
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(255,255,255,.9),
        #f5f5f7 70%)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="#F5F5F7";

    });

});



/* ===========================================
   Floating Images
===========================================*/

document.querySelectorAll("img").forEach(img=>{

    img.animate([

        {
            transform:"translateY(0px)"
        },

        {
            transform:"translateY(-8px)"
        },

        {
            transform:"translateY(0px)"
        }

    ],{

        duration:5000 + Math.random()*2000,

        iterations:Infinity,

        easing:"ease-in-out"

    });

});



/* ===========================================
   Buttons Ripple
===========================================*/

document.querySelectorAll("button,.primary-btn,.secondary-btn")
.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-3px)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0px)";

    });

});

/* HERO PARALLAX */

const device = document.querySelector(".hero-device");

window.addEventListener("scroll",()=>{

    const y = window.scrollY;

    device.style.transform =
    `translateY(${y*0.18}px) rotate(${y*0.015}deg)`;

});

/* HERO FADE */

const hero = document.querySelector(".hero-center");

window.addEventListener("load",()=>{

    hero.animate([

        {

            opacity:0,

            transform:"translateY(80px)"

        },

        {

            opacity:1,

            transform:"translateY(0)"
        }

    ],{

        duration:1300,

        easing:"ease-out",

        fill:"forwards"

    });

});



/* ===========================================
   Console
===========================================*/

console.log("VESIRA loaded.");
