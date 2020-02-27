//Animation properties on load
//Everything start hidden 
//and fades in 2000-3000ms  
$(document).ready(function () {
  $("#navHome").hide(0, onloadProperties);
  $("#navExperience").hide(0, onloadProperties);
  $("#navContact").hide(0, onloadProperties);
  $("#logo").hide(0, onloadProperties);
  $("#toTop").hide();
});

function onloadProperties() {
  $(document).ready(function () {
    $("#navHome").fadeIn(2000);
    $("#navExperience").fadeIn(2500);
    $("#navContact").fadeIn(3000);
    $("#logo").fadeTo(3000, 1);
  });
}


/* this is script for back to top button*/
$(window).scroll(function () {
  let height = $(window).scrollTop();
  if (height > 150) {
    /* screen height of display, triggers fadein of button */
    $("#toTop").fadeIn();
  } else {
    $("#toTop").fadeOut();
  }

});


$(document).ready(function () {
  $("#toTop").click(function (event) {
    /*event listener for clicking*/
    event.preventDefault();
    $("html, body").animate({
        scrollTop: 0 /*returns back to 0 point*/
      },
      "fast"
    );
    return false;
  });
});

/*navigation animation toggle for bars and X*/


//modification of photo carousel lecture, 
//plan was to make it modal view pop-up.
//Not the best practice but wanted to try remind how carousel was built without building actual carousel
(function () {
  let modal = "hero-content";
  (items = document.getElementsByClassName(modal)),
  (totalItems = items.length),
  (content = 0);

  function eventListeners() {
    let open = document.getElementsByClassName("btn")[0],
      close = document.getElementsByClassName("closeContent")[0];
    open.addEventListener("click", getContent);
    close.addEventListener("click", closeContent);
  }

  function getContent() {
    items[content].classList.remove("active");
    content = content === totalItems - 1 ? 0 : content + 1;
    items[content].classList.add("active");
  }


  function closeContent() {
    items[content].classList.remove("active");
    content = content === totalItems - 2 ? 0 : content - 1;
    items[content].classList.add("active");

  }


  function initModal() {

    eventListeners();
  }

  initModal();
})();

// progress bar elements, value calculation starts on body scroll


function progressOnload(){
  document.getElementById("progressHtml").setAttribute('value',70);
  document.getElementById("progressCss").setAttribute('value',60);
  document.getElementById("progressJavascript").setAttribute('value',55);
  document.getElementById("progressJava").setAttribute('value',20);
}

// drop down menu for mobile
navContainer.addEventListener("click", function(){
  document.getElementById("mobileNav").classList.toggle("display");
  document.getElementById("navContainer").classList.toggle("toggle");
})


//here is something i was working with but did run out of time with completing this
/*
window.addEventListener("click", function(event) {
 
  if (!event.target.matches('.dropbtn')) {
    let dropmenu = document.getElementsByClassName("animate");
    let i;
    for (i = 0; i < dropmenu.length; i++) {
      let openDropmenu = dropmenu[i];
      if (openDropmenu.classList.contains('display')) {
        openDropmenu.classList.remove('display');
        
      }
      
    }
  }
});*/