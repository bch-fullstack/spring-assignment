$(function(){

  $(document).on( 'scroll', function(){
  
    if ($(window).scrollTop() > 100) {
      $('.scroll-top-wrapper').addClass('show');
    } else {
      $('.scroll-top-wrapper').removeClass('show');
    }
  });
  
  $('.scroll-top-wrapper').on('click', scrollToTop);
  });
  
  function scrollToTop() {
  verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
  element = $('body');
  offset = element.offset();
  offsetTop = offset.top;
  $('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
  }
  
  
  //image slider show below:
  $(document).ready(function(){
  $('.next').on('click', function(){
    var currentImg = $('.active');
    var nextImg = currentImg.next();
    if(nextImg.length) {
      currentImg.removeClass('active').css('z-index', -10);
      nextImg.addClass('active').css('z-index', 10);
    }
  })
  
  $('.prev').on('click', function(){
    var currentImg = $('.active');
    var prevImg = currentImg.prev();
    if(prevImg.length) {
      currentImg.removeClass('active').css('z-index', -10);
      prevImg.addClass('active').css('z-index', 10);
    }
  })
  
  
  });
  
  
  //slide show below:
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }