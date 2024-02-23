gsap.to("#page", {
  scrollTrigger: {
    trigger: `.beech-ki-image`,
    start: `top 20%`,
    end: `bottom top`,
    // markers:true,
    pin: true,
    scrub: 0.5,
  },
});

var haka = gsap.timeline({
  scrollTrigger: {
    trigger: `#page1`,
    start: `top 70%`,
    end: `50% 60%`,
    // markers:true,
    scrub: 0.5,
  },
});

haka
  .from("#page1>h1", {
    y: 100,
    opacity: 0,
    duration: 1,
  })
  .from("#page1>h5", {
    y: 100,
    opacity: 0,
    duration: 1,
  });

var main = document.querySelector(".rom-rom");
var circle = document.querySelector(".real");

main.addEventListener("mousemove", function (dets) {
  requestAnimationFrame(() => {
    circle.style.left = dets.clientX - main.getBoundingClientRect().left + "px";
    circle.style.top = dets.clientY - main.getBoundingClientRect().top + "px";
  });
});

main.addEventListener("mouseleave", function () {
  circle.style.left = `0%`;
  circle.style.top = `20%`;
});

gsap.to("#page3 .right", {
  transform: "translateY(-50%)",
  duration: 2,
  scrollTrigger: {
    trigger: "#page3",
    scroller: "body",
    // markers: true,
    start: "top 0",
    end: "end -200%",
    scrub: 2,
    pin: true,
  },
});

gsap.from("#page4 #page4image", {
  x: "-20%",
  opacity: 0,
  scrollTrigger: {
    trigger: "#page4image",
    scroller: "body",
    // markers: true,
    start: "top 60%",
    end: "bottom 90%",
    scrollerStart: "top 10%",
    scrub: 2,
  },
});
gsap.to("#page4 #page4image h1", {
  transform: "translateY(-50%)",
  // duration: 2,
  scrollTrigger: {
    trigger: "#page4",
    scroller: "body",
    // markers: true,
    start: "top -20%",
    end: "end -200%",
    scrub: 3,
    pin: true,
  },
});
gsap.from("#page4 .beech-ki-image p", {
  y: "150%",
  opacity: 0,
  duration: 5,
  fontSize: "1vw",
  scrollTrigger: {
    trigger: "#page4 .beech-ki-image p",
    scroller: "body",
    // markers: true,
    start: "top -90%",
    scrub: 2,
    // scrollerStart: "top 10%",
  },
});

gsap.from("#page4 .texts .textsright", {
  x: "130%",
  duration: 15,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page4 .texts .textsright",
    scroller: "body",
    // markers: true,
    start: "top -110%",
    end: "top -140%",
    scrub: 2,
  },
});
gsap.from("#page4 .texts .textsleft", {
  x: "-130%",
  duration: 15,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page4 .texts .textsright",
    scroller: "body",
    // markers: true,
    start: "top -110%",
    end: "top -140%",
    scrub: 2,
  },
});
gsap.from("#page4 p", {
  y: "150%",
  opacity: 0,
  duration: 5,
  fontSize: "1vw",
  scrollTrigger: {
    trigger: "#page4  p",
    scroller: "body",
    // markers: true,
    start: "top -165%",
    scrub: 2,
  },
});
gsap.from("#page5 .logos #ptop", {
  y: "100%",
  duration: 0.5,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page5 .logos #ptop",
    scroller: "body",
    // markers: true,
    scrub: 2,
    start: "top 80%",
    end: "top 100%",
  },
});
gsap.from("#page5 .logos .alllogo img", {
  y: "100%",
  stagger: 0.3,
  duration: 1,
  // opacity: 0,
  scrollTrigger: {
    trigger: "#page5 .logos .alllogo img",
    scroller: "body",
    // markers: true,
    scrub: 2,

    start: "top 110%",
    end: "top 20%",
  },
});
gsap.from("#page5 .logos #pbottom", {
  y: "100%",
  duration: 0.5,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page5 .logos #pbottom",
    scroller: "body",
    // markers: true,
    scrub: 2,
    start: "top 80%",
    end: "top 100%",
  },
});
