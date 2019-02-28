// Author: Jenny Bonsak https://jennurate.com
// GitHub repository: https://github.com/jennur/jquery-slider-plugin

$(document).ready(function() {

  var slides = $('.slideshow__slide');

  //Add navigation bullets
  slides.each(() => { $('.navigation__list').append('<li class="navigation__bullet"></li>'); });
  var navBullets = $('.navigation__bullet');

   
  var slidePosition = 0;
  var hasControllers = $('.navigation__controllers').length;

  if(hasControllers){
    $(slides[0]).show();
    $(navBullets[0]).addClass('navigation__bullet--active');

    navBullets.bind('click', (e) => {
      let navControllers = navBullets.toArray();
      slidePosition = $.inArray(e.target, navControllers);
      changeSlidePosition();
    });

  } else {
    changeSlidePosition();
  }

  function changeSlidePosition() {
    var numberOfSlides = slides.length;
    
    for(let i = 0; i < numberOfSlides; i++) {
      if(i !== slidePosition) {
        $(slides[i]).hide();
        $(navBullets[i]).removeClass('navigation__bullet--active');
      }
      else {
        $(slides[i]).show(); 
        $(navBullets[i]).addClass('navigation__bullet--active');
      }
    }
    slidePosition++;
    if(slidePosition === numberOfSlides) slidePosition = 0;

    if(!hasControllers){
        setTimeout(() => { changeSlidePosition(); }, 3000);
    }
  }
});


  













