var initialPath = `M 10 200 Q 600 200 1500 200`

var path = document.querySelector("#string svg path");
path.setAttribute("d", initialPath);


document.querySelector("#string svg").addEventListener("mousemove", (e) => {
    const finalPath = `M 10 200 Q ${e.x} ${e.y} 1500 200`;
    
    gsap.to(path, {
        attr: { d:finalPath },
        duration:.5,
        ease: "elastic.out(1, 0.1)"
    })    

   
})
 document.querySelector("#string").addEventListener("mouseleave", () => {
        gsap.to(path, {
            attr: { d:initialPath },
            duration:0.6,
            ease: "bounce.out"
        })
    })