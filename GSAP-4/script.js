var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var cursorInitialProperties = "cursor.style.width = '15px', cursor.style.height = '15px', cursor.style.borderRadius = '50%', cursor.style.backgroundColor = '#fff',";


main.addEventListener("mousemove", (e)=>{
    gsap.to(cursor, {
        x: e.x,
        y: e.y,
        duration: 0.5,
        ease: "bounce.out",
    })
})

var image = document.querySelector("#image");

image.addEventListener("mouseenter", ()=>{
    cursor.innerHTML = "View",
    cursor.style.fontSize = "10px",
    cursor.style.width= "fit-content",
    cursor.style.height= "fit-content",
    cursor.style.borderRadius = "20%",
    cursor.style.padding = "5px",
    cursor.style.backgroundColor = "beige",
    
    gsap.to(cursor, {
        scale: 2,
        duration: 0.3,
        ease: "power1.out",
    })    

})

image.addEventListener("mouseout", ()=>{
    cursor.innerHTML = "",
    cursor.style.width= "15px",
    cursor.style.height= "15px",
    cursor.style.borderRadius = "50%",
    cursor.style.padding = "0px",
    cursor.style.backgroundColor = "#fff",

    gsap.to(cursor, {
        scale: 1,
        duration: 0.5,
        ease: "power3.out",
    })    
})