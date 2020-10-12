gsap.registerPlugin(ScrollTrigger);

const el = document.querySelector('.ball-1');
gsap.to(".ball-1", {
  x: 200,
  scale: .3,
  duration: 5,
  ease: "elastic.out(1, 0.3)"
});

gsap.to(".ball-2", {
  x: 200,
  scale: .3,
  duration: 7,
  ease: "elastic.out(1, 0.3)",
  scrollTrigger: {
    trigger: ".ball-2",
    //    markers: true,
    start: "top center",
    end: "bottom top",
    toggleActions: "play pause resume reset"
  }
});

/* start/end
1. første værdi handler om elementet / dvs. vores bold (her toppen af elementet)
2. anden værdi handler om viewporten f.eks 75% fra toppen */

gsap.from(".ball-3", {
  x: 300,
  scale: .3,
  rotation: 360,
  duration: 2,
  ease: "bounce.out",
  scrollTrigger: {
    trigger: ".ball-3",
    //    markers: true,
    start: "top center",
    end: "bottom 25%",
    scrub: true,
    pin: true
  }
});

gsap.from(".ball-4", {
  yPercent: 100,
  stagger: .3,
  ease: "none",
  scrollTrigger: {
    trigger: ".ball-4",
    markers: true,
    start: "top 80%",
    end: "top 20%",
    scrub: true,
    //    pin: true
  }
});



//gsap.from
//
//gsap.fromTo
