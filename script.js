//locomotive js - smooth scrolling

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


//gsap to animate

gsap.from(".nlink", {
    stagger: .2,
    y: 10,
    opacity: 0, 
    duraction: 1,
    ease: Power3
}) 


//shery js to animate images accordingly

Shery.textAnimate("#headings h1", {
    //Parameters are optional.
    style: 2,
    y: 10,
    delay: 0.3,
    duration:2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

  gsap.to(".anim2", {
    y:50,
    stagger: .3,
    // opacity: 0,
    ease: Expo,
    duration: 1
  })

  Shery.imageEffect("#imgntext img", {
    style: 3,
    debug: true
  })