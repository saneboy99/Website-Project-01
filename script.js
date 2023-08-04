const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function circleMouseFollower() {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
  });
}

circleMouseFollower();

function firstPageAnimation() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
    .to(".boundingelem", {
      y: "0",
      duration: 1.5,
      stagger: 0.2,
      ease: Expo.easeInOut,
    })
    .from("#herofooter", {
      y: "-10",
      opacity: 0,
      duration: 1,
      ease: Expo.easeInOut,
    });
}

firstPageAnimation();
