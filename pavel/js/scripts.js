$(document).ready(function() {
  $(".fixed-action-btn").floatingActionButton();
}); /// floating action button initialization///

///open e-mail client with button///
$(function() {
  $(".SendEmail").click(function(event) {
    var email = "p.fakhrutdinov@gmail.com";
    var subject = "Test";
    var emailBody = "Hi Pavel,";
    document.location =
      "mailto:" + email + "?subject=" + subject + "&body=" + emailBody;
  });
});
///initialization mobile nav///
$(document).ready(function() {
  $(".sidenav").sidenav();
});
///particles effect for nyan cat start
particlesJS("particles-js", {
  particles: {
    number: { value: 100, density: { enable: false, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "star",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: {
        src:
          "http://wiki.lexisnexis.com/academic/images/f/fb/Itunes_podcast_icon_300.jpg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 4,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 14,
      direction: "left",
      random: false,
      straight: true,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    events: {
      onhover: { enable: false, mode: "grab" },
      onclick: { enable: true, mode: "repulse" },
      resize: true
    },
    modes: {
      grab: { distance: 200, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});
///particles js end

//smooth scrolling
// Scroll to specific values
// scrollTo is the same
window.scroll({
  top: 2500,
  left: 0,
  behavior: "smooth"
});

// Scroll certain amounts from current position
window.scrollBy({
  top: 100, // could be negative value
  left: 0,
  behavior: "smooth"
});

// Scroll to a certain element
document.querySelector(".hello").scrollIntoView({
  behavior: "smooth"
});
