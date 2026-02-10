
function BreakText(){
var H1 = document.querySelector("#Text h1");
var H1Text = H1.textContent;
var clutter = "";
var splittedText = H1Text.split("");
var halfVal = Math.floor((splittedText.length)/2);

splittedText.forEach((elem,idx)=>{
    clutter += ( idx < halfVal ) ? `<span class="left">${elem}</span>` : `<span class="right">${elem}</span>`;
})

H1.innerHTML = clutter;
 }

BreakText();


gsap.from("#Text h1 .left",{
    y:50,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.15,
    ease:"power2.out"
})

gsap.from("#Text h1 .right",{
    y:50,
    opacity:0,
    delay:0.5,
    duration:1,
    stagger:-0.15,
    ease:"power2.out"
})