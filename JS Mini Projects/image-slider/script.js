const slides = document.querySelectorAll(".slide")
var counter = 0;
// console.log(slides)
slides.forEach(
    (slide, index) => {
        slide.style.top = `${index * 100}%`
    }
)

// const goPrev = () => {
//     counter--
//     slideImage()
// }

// const goNext = () => {
//     counter++
//     slideImage()
// }
const goNext = () => {
    if (counter < slides.length - 1) {
    counter++;
    slideImage();
    }
    };
    const goPrev = () => {
    if (counter != 0) {
    counter--;
    slideImage();
    }
    };
const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateY(-${counter * 100}%)`
        }
    )
}




// <----------------- chat gpt code ------------------------------->
// let slideIndex = 0;

// function showSlide(n) {
//   const slides = document.querySelectorAll('.slider img');
//   if (n >= slides.length) {
//     slideIndex = 0;
//   } else if (n < 0) {
//     slideIndex = slides.length - 1;
//   }

//   slides.forEach(slide => {
//     slide.style.transform = `translateX(-${slideIndex * 100}%)`;
//   });
// }

// function prevSlide() {
//   showSlide(slideIndex -= 1);
// }

// function nextSlide() {
//   showSlide(slideIndex += 1);
// }

// showSlide(slideIndex);
