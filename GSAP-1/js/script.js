var tl = gsap.timeline();

// now we can use tl.to and tl.from instead of gsap.to and gsap.from
// The code will execute synchronousely
tl.to("#NavTitle", {
    y: 30,
    duration: 1,
    delay: 0.5,
    opacity: 1,

})
tl.to("h4", {
    y: 30,
    duration: 1,
    delay: 0.5,
    opacity: 1,
    stagger: 0.3
})


gsap.to("#box1", {
    x: 1000,
    y: 300,
    duration: 2,
    delay: 0.1,
    rotate: 360,
    backgroundColor: "beige",
    borderRadius: "40%",
    cornerShape: "bevel",
    // repeat: -1,
    yoyo: true

})

gsap.from("#box2", {
    x: 1000,
    y: 100,
    duration: 2,
    rotate: 180,
    delay: 0.1,
    scale: 0.5,
    borderRadius: "40%",
    opacity: 0.2,
    /* repeat: -1,  Infinite Repeat */
    yoyo: true
    /* repeat: 1, will make the animation repeat one more time */

})

gsap.to("h1", {
    stagger: 0.6, /*Properties go one by one using stagger */
    x: 1020,
    y: -170,
    color: "black",
    duration: 2,
    delay: 1,

})

