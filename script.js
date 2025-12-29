const slides = Array.from(document.getElementsByClassName('slides'));

let current = 0;

function MainSlider() {
  setInterval(() => {
    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(-${current * 100}%)`;
    });

    current++;

    if (current === slides.length) {
      current = 0;
    }
  }, 3500);
}

MainSlider();
