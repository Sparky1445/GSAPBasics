let tl = gsap.timeline();

function playAnimation1(){
tl.from("nav h1",{
    y:-20,
    opacity:0,
    duration:0.5,
    delay:0.2,
    ease: "power2.out"
})
tl.from("nav .nav-part2 h4 , nav .nav-part2 button",{
    y:-20,
    opacity:0,
    duration:0.5,
    ease: "power2.out",
    stagger:0.1
})

tl.from(".center-1 h1",{
    translateX:-30,
    opacity:0,
    duration:0.4,
    ease: "power2.inOut"
})

tl.from(".center-2 img",{
    translateX:40,
    opacity:0,
    duration:0.5,
    ease: "power2.out"
})

tl.from(".center-1 h4, .center-1 button",{
    translateX:-30,
    opacity:0,
    duration:0.4,
    ease: "power2.inOut",
    stagger:0.3
})

gsap.from(".AffCompanies img",{
    translateX:30,
    opacity:0,
    duration:0.3,
    ease: "power2.out",
    stagger:0.2,
    scrollTrigger:{
        trigger:".AffCompanies",
        scroller:"body",
        start:"top 75%",
    }

})

}

function playAnimation2(){
    gsap.from(".services",{
        translateX:30,
        duration:1,
        opacity:0,
        ease:"power2.out",
        scrollTrigger:{
            scroller:"body",
            trigger:".services",
            
            start:"top 70%",
            
        }
    })
}



// Loop through every .cardContainer
gsap.utils.toArray(".cardContainer").forEach((container) => {
    
    let leftCard = container.children[0];
    let rightCard = container.children[1];

 
    gsap.from(leftCard, {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
            trigger: container,    
            start: "top 95%",
            end:"bottom 70%",
            scrub:1
        },
    });

    gsap.from(rightCard, {
        x: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
            trigger: container,   
            start: "top 95%",
            end:"bottom 70%",
            scrub:1
        }
    });
});


playAnimation1();
playAnimation2();


