gsap.from("#page1 #box", {
    duration: 2,
    scale: 0,
    delay: 1,

})

gsap.from("#page2 h1", {
        transform: "translateX(-100%)",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -100%",
        scrub:1,
        pin:true,

        
    }

})