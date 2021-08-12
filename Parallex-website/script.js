let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to(".rock", 10, { y: -300 })
  .to(".girl", 20, { y: -200 }, "-=10")
  .fromTo(".bg1", { y: -50 }, { y: 0, duration: 10 }, "-=10")
  .to(".content", 25, { top: "0%" }, "-=20")
  .fromTo(".content-images", { opacity: 0 }, { opacity: 1, duration: 12 })
  .fromTo(".text", { opacity: 0.9 }, { opacity: 0.7, duration: 12 })
  .to(".content-2", 80, { top: "0%" }, "-=10")
  .fromTo(".content-images-lake", { opacity: 0.5 }, { opacity: 1, duration: 1 })
  .fromTo(".text-2", { opacity: 0 }, { opacity: 1, duration: 3 });

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "300%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);
