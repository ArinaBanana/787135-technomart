var buttonNext = document.querySelector(".slider .slider-controls-next button");
var buttonPrev = document.querySelector(".slider .slider-controls-prev button");

var sliderList = document.querySelector('.slider-list');
var total = sliderList.querySelectorAll('li').length;


var currentIndex = 0;

function translateX(sliderList, currentIndex) {
  var width = sliderList.offsetWidth;
  sliderList.style.transform = 'translateX(' + -width * currentIndex + 'px)';
}

buttonNext.addEventListener('click', function (event) {
  if (currentIndex + 1 < total) {
    currentIndex += 1;
    translateX(sliderList, currentIndex)
  }
});

buttonPrev.addEventListener('click', function (event) {
  if (currentIndex > 0) {
    currentIndex -= 1;
    translateX(sliderList, currentIndex)
  }
});

var buttonDisplay = document.querySelector('#active')
console.log(buttonDisplay)
var modalDisplay = document.querySelector('#active-section')
var buttonClose = document.querySelector('.button-close')

buttonDisplay.addEventListener('click', function (event) {
  event.preventDefault()
  modalDisplay.style.display = 'block'
})
