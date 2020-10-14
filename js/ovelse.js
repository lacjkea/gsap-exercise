gsap.registerPlugin(ScrollTrigger);


gsap.to(".ball-2", {
  x: 200,
  scale: .3,
  duration: 7,
  ease: "elastic.out(1, 0.3)",
  scrollTrigger: {
    trigger: ".ball-2",
    //    markers: true,
    start: "center 65%",
    end: "bottom 45%",
  }
});


gsap.from(".ball-3", {
  x: 300,
  scale: .3,
  rotation: 360,
  duration: 2,
  ease: "bounce.out",
  scrollTrigger: {
    trigger: ".ball-3",
    //    markers: true,
    start: "center center",
    end: "center 25%",
    scrub: true,
  }
});

gsap.from(".ball-4", {
  yPercent: 100,
  stagger: .3,
  ease: "none",
  scrollTrigger: {
    trigger: ".ball-4",
    start: "top 80%",
    end: "top 20%",
    scrub: true,
    //        markers: true,
  }
});

ScrollTrigger.create({
  trigger: ".ball-5",
  start: "top center",
  toggleClass: "active",
  //   toggleClass: { targets: "#produkt1 h1", className: "active" },
  once: true,
  markers: true,
});


//
//gsap.to(".ball-2", {
//  x: 200,
//  duration: 2,
//  ease: "elastic.out(1, 0.3)",
//  scrollTrigger: {
//    trigger: ".ball-2",
//    start: "top center",
//    //    markers: true,
//  }
//});
//
//gsap.from(".ball-3", {
//  opacity: 0,
//  scale: .3,
//  duration: 2,
//  ease: "none",
//  scrollTrigger: {
//    trigger: ".ball-3",
//    start: "top center",
//    end: "center top",
//    scrub: true,
//    //    markers: true,
//  }
//});
//
