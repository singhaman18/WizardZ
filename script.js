function page1Animation() {
  var tl = gsap.timeline();

  tl.from("nav h1, nav h4, nav button", {
    y: -40,
    opacity: 0,
    delay: 0.5,
    duration: 0.7,
    stagger: 0.15,
  });

  tl.from(
    ".center-part1 h1",
    {
      x: -200,
      opacity: 0,
      duration: 0.5,
    },
    "-=0.3"
  );

  tl.from(".center-part1 p", {
    x: -100,
    opacity: 0,
    duration: 0.4,
  });

  tl.from(".center-part1 button", {
    opacity: 0,
    duration: 0.4,
  });

  tl.from(
    ".center-part2 img",
    {
      opacity: 0,
      duration: 0.5,
      x: 200,
    },
    "-=0.7"
  );

  tl.from(".section1bottom img", {
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.15,
  });
}

page1Animation();

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2",
    scroller: "body",
    start: "top 50%",
    scrub: 2,
    end: "top -50%",
  },
});

tl2.from(".services", {
  y: 30,
  opacity: 0,
  duration: 0.5,
});

tl2.from(
  ".elem.line1.left",
  {
    x: -300,
    opacity: 0,
    duration: 1,
  },
  "anim1"
);

tl2.from(
  ".elem.line1.right",
  {
    x: 300,
    opacity: 0,
    duration: 1,
  },
  "anim1"
);

tl2.from(
  ".elem.line2.left",
  {
    x: -300,
    opacity: 0,
    duration: 1,
  },
  "anim2"
);

tl2.from(
  ".elem.line2.right",
  {
    x: 300,
    opacity: 0,
    duration: 1,
  },
  "anim2"
);

tl2.from(
  ".elem.line3.left",
  {
    x: -300,
    opacity: 0,
    duration: 1,
  },
  "anim3"
);

tl2.from(
  ".elem.line3.right",
  {
    x: 300,
    opacity: 0,
    duration: 1,
  },
  "anim3"
);

tl2.from(
  ".elem.line4.left",
  {
    x: -300,
    opacity: 0,
    duration: 1,
  },
  "anim4"
);

tl2.from(
  ".elem.line4.right",
  {
    x: 300,
    opacity: 0,
    duration: 1,
  },
  "anim4"
);

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section3",
    scroller: "body",
    start: "top 80%",
    scrub: 2,
    end: "top -10%",
  },
});

tl3.from(".contact h3", {
  x: -30,
  opacity: 0,
  delay: 5,
  duration: 1,
});

tl3.from(".contact p", {
  x: -30,
  opacity: 0,
  delay: 1.5,
  duration: 7,
});

tl3.from(".contact button", {
  y: 30,
  opacity: 0,
  delay: 1,
  duration: 40,
});
