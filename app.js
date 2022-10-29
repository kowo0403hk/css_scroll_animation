// create intersection observer for elements
const observer = new IntersectionObserver((entries) => {
  // the IntersectionObserver class takes this callback function in its constructor. When we start observing, we do observer.observe(entries)

  entries.forEach((entry) => {
    // If we want to have the animation happens only once, then we do not need the else statement. However, if we want the animation to be recurring, we need the else statement.

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");

// tell the observer what elements to observe
hiddenElements.forEach((el) => observer.observe(el));
