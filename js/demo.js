(function () {
  const arrOpts = [
    {},
    {
      direction: "right",
      size: 4,
      speed: 1,
      color: "#0e19a2",
      particlesAmountCoefficient: 1.5,
      oscillationCoefficient: 1,
    },
    {
      type: "triangle",
      easing: "easeOutQuart",
      size: 6,
      particlesAmountCoefficient: 4,
      oscillationCoefficient: 2,
      color: "#0e19a2",
    },
    {
      type: "rectangle",
      duration: 500,
      easing: "easeOutQuad",
      color: "#0e19a2",
      direction: "top",
      size: 8,
    },
    {
      duration: 1300,
      easing: "easeInExpo",
      size: 3,
      speed: 1,
      particlesAmountCoefficient: 10,
      oscillationCoefficient: 1,
    },
    {
      direction: "bottom",
      duration: 1000,
      easing: "easeInExpo",
    },
    {
      type: "rectangle",
      style: "stroke",
      size: 15,
      color: "#e87084",
      duration: 600,
      easing: [0.2, 1, 0.7, 1],
      oscillationCoefficient: 5,
      particlesAmountCoefficient: 2,
      direction: "right",
    },
    {
      type: "triangle",
      style: "stroke",
      direction: "top",
      size: 5,
      color: "blue",
      duration: 1400,
      speed: 1.5,
      oscillationCoefficient: 15,
      direction: "right",
    },
    {
      duration: 500,
      easing: "easeOutQuad",
      speed: 0.1,
      particlesAmountCoefficient: 10,
      oscillationCoefficient: 80,
    },
    {
      direction: "right",
      size: 4,
      color: "#969696",
      duration: 1200,
      easing: "easeInCubic",
      particlesAmountCoefficient: 8,
      speed: 0.4,
      oscillationCoefficient: 1,
    },
    {
      style: "stroke",
      color: "#1b81ea",
      direction: "bottom",
      duration: 1200,
      easing: "easeOutSine",
      speed: 0.7,
      oscillationCoefficient: 5,
    },
    {
      type: "triangle",
      easing: "easeOutSine",
      size: 3,
      duration: 800,
      particlesAmountCoefficient: 7,
      speed: 3,
      oscillationCoefficient: 1,
    },
  ];

  const items = document.querySelectorAll(".grid__item__button");
  items.forEach((el, pos) => {
    const bttn = el.querySelector("button.particles-button");

    let particlesOpts = arrOpts[pos];
    particlesOpts.complete = () => {
      console.log("redirecting user");
      window.location.href = bttn.getAttribute("href");
    };
    const particles = new Particles(bttn, particlesOpts);

    let buttonVisible = true;
    bttn.addEventListener("click", () => {
      if (!particles.isAnimating() && buttonVisible) {
        particles.disintegrate();
        buttonVisible = !buttonVisible;
      }
    });
  });
})();
