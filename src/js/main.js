const slides = document.querySelectorAll('.slider__item');

const slideStatus = document.querySelector('.slide__status');
const slider = new Glide('.slider');

slider.mount();

const currentSlide = slider.slide;

slider.on('move', function (e, f) {
  console.log(slider.index + 1);
  console.log(slider.length);
  const index = '0' + (slider.index + 1);
  console.log(index);
  slideStatus.textContent = index;
});

// slideStatus.textContent = '0' + (slider.index + 1) + '/03';
