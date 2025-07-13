var tl = gsap.timeline();

tl.from("h1", {
  y: -30,
  opacity: 0,
  color: "white",
  duration: 0.5,
  delay: 0.2,
  stagger: 0.5
});

tl.from("h2", {
    y: -30,
    opacity: 0,
    color: "white",
    duration: 0.5,
    delay: 0.2,
    stagger: 0.5
  });

  tl.from("h4", {
    scale:0,
    opacity: 0,
    color: "white",
    duration: 0.5,
    delay: 0.2,
    stagger: 0.5
  });
  tl.to("h4", {
    rotate:360,
    
    color: "red",
    duration: 0.5,
    delay: 0.2,
    stagger: 0.5
  });

  tl.to("h4", {
    
    x:1200,
    color: "white",
    duration: 0.5,
    delay: 0.2,
    stagger: 0.5
  });