const marque = gsap
  .to(".marque", {
    xPercent: -100,
    ease: "none",
    repeat: -1,
    duration: 4,
  })
  .totalProgress(0.5);

const arrow = gsap.to(".marque img", {
  rotate: 180,
});

let scrollDown = true;
window.addEventListener("wheel", (e) => {
  if (e.deltaY > 0 && !scrollDown) {
    scrollDown = true;
    marque.play();
    arrow.play();
  } else if (e.deltaY < 0 && scrollDown) {
    scrollDown = false;
    marque.reverse();
    arrow.reverse();
  }
});