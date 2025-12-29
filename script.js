const slides = Array.from(document.getElementsByClassName('slides'));
const img = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7uLvkEA7rp3F486lanNy-gn-UpwFIqq3m8A&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3y0BjZXNKlZNIwOE77YTZDIhq8JZwfZ_VxQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReAacsS4zZjZMw4TSRBINOBNnKOAMbxlUQCA&s"
]
let current = 0;

function MainSlider() {
  setInterval(() => {
    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(-${current * 100}%)`;
      slide.style.background = `url(${img[index]})`
    });

    current++;

    if (current === slides.length) {
      current = 0;
    }
  }, 3500);
}

MainSlider();
