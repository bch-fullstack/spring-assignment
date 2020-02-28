// $(document).ready(function () {
//     $('#share').click(function () {
//         $('#share').toggleClass('rotate');
//         $('.facebook').toggleClass('rotate-fb');
//         $('.twitter').toggleClass('rotate-tw');
//         $('.linkedin').toggleClass('rotate-li');
//         $('.codepen').toggleClass('rotate-cp');

//     });

// });

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "-200px";
//   } else {
//     document.getElementById("navbar").style.top = "0px";
//   }
//   prevScrollpos = currentScrollPos;
// };

// ----------------------used for footer-bar------------------
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (currentScrollPos > 100) {
//     document.getElementById("flex").style.bottom = "-50px";
//   } else {
//     document.getElementById("flex").style.bottom = "0 px";
//   }
//   prevScrollpos = currentScrollPos;
// };

// -------------------------------------Script-section------------------------------------

/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height > 100) {
    $("#back2Top").fadeIn();
    $("#flex").fadeIn();
  } else {
    $("#back2Top").fadeOut();
    $("#flex").fadeOut();
  }
});
$(document).ready(function () {
  $("#back2Top").click(function (event) {
    event.preventDefault();
    $("html, body").animate({
        scrollTop: 0
      },
      "slow"
    );
    return false;
  });
  $(".rotate").textrotator({
    animation: "flipUp", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
    separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
    speed: 2000 // How many milliseconds until the next word show.
  });
});

/*Scroll to top when arrow up clicked END*/

particlesJS("particles-js", {
  particles: {
    number: {
      value: 400,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "image",
      stroke: {
        width: 3,
        color: "#fff"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "http://www.dynamicdigital.us/wp-content/uploads/2013/02/starburst_white_300_drop_2.png",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.7,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: false,
        speed: 20,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 50,
      color: "#ffffff",
      opacity: 0.6,
      width: 1
    },
    move: {
      enable: true,
      speed: 5,
      direction: "bottom",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: true,
        rotateX: 300,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 150,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 200,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.2
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});