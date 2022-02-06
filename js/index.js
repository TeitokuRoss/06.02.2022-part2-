"use strict";

const slides = [
	{
		src: "https://i.pinimg.com/originals/cc/11/66/cc11665c0f6565ab973907a73fa7d8b5.jpg",
		alt: "lanscape 1",
	},
	{
		src: "https://photar.ru/wp-content/uploads/2021/04/Zak-van-Biljon-17.jpg",
		alt: "lanscape 2",
	},
	{
		src: "https://cameralabs.org/media/k2/items/cache/b19561bfe5acb7716f4100f417429700_L.jpg",
		alt: "lanscape 3",
	},
	{
		src: "https://7oom.ru/wp-content/uploads/peizaji-01.jpg",
		alt: "lanscape 4",
	},
];

const ingEL = document.querySelector(".img-wrapper>img");
//const buttons = document.querySelectorAll('button');
const [prevBtn, nextBtn] = document.querySelectorAll("button");

ingEL.src = slides[0].src;
ingEL.alt = slides[0].alt;

const currentSlideIndex = 0;

nextBtn.onclick = () => {
	// currentSlideIndex++;
	currentSlideIndex = (currentSlideIndex + 1) % slides.length;
	ingEL.src = slides[currentSlideIndex].src;
	ingEL.alt = slides[currentSlideIndex].alt;
};

prevBtn.onclick = () => {
	currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
	ingEL.src = slides[currentSlideIndex].src;
	ingEL.alt = slides[currentSlideIndex].alt;
};
class Slider {
    constructor(slides, currentSlideIndex = 0) {
      this.slides = slides;
      this.currentSlideIndex = currentSlideIndex;
    }
  
    set currentSlideIndex(v) {
      if (typeof v !== 'number') {
        throw TypeError();
      }
      if (
        Number.isNaN(v) 
        v < 0 
        v > this.slides.length ||
        !Number.isInteger(v)
      ) {
        throw RangeError();
      }
      this._currentSlideIndex = v;
    }
  
    get currentSlideIndex() {
      return this._currentSlideIndex();
    }
  }