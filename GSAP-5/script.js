var tl = gsap.timeline();
let menuIcon = document.querySelector("#nav i");
let closeIcon = document.querySelector("#full i");
let full = document.querySelector("#full");


    tl.to("#full",{
        right:"0%",
        duration:1,
        ease:"power2.inOut"
    })

    tl.from("#full li", {
        x:100,
        stagger:0.2,
        opacity:0,
        duration:1,
        ease:"power2.inOut"
    })




tl.pause();

menuIcon.addEventListener("click",()=>{
    tl.play();
});

closeIcon.addEventListener("click",()=>{
    tl.reverse();
});


// tl.pause(); this will pause the timeline and we can play it again whenever we want
