const slides = Array.from(document.getElementsByClassName("slides"));
const from = document.getElementById("UserForm");
 const current = 0;
const id = {
  PUBID:"zapaFegkFQmmzyMHx",
  TEMID:"template_buvzdof",
  SERVID :"service_w5us9s2"
}

Object.freeze(id);

const img = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7uLvkEA7rp3F486lanNy-gn-UpwFIqq3m8A&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3y0BjZXNKlZNIwOE77YTZDIhq8JZwfZ_VxQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReAacsS4zZjZMw4TSRBINOBNnKOAMbxlUQCA&s",
];


function MainSlider() {
  setInterval(() => {
    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(-${current * 100}%)`;
      slide.style.background = `url(${img[index]})`;
    });

    current++;

    if (current === slides.length) {
      current = 0;
    }
  }, 3500);
}

window.onload = () => {
  emailjs.init(id.PUBID);
};

from.addEventListener("submit", (event) => {
  event.preventDefault();
  emailjs.sendForm(id.SERVID, id.TEMID,form).then(
    () => {
      console.log("SUCCESS!");
      alert("submitted")
    },
    (error) => {
      console.log("FAILED...", error);
      alert("not submite")
    }
  );
});
