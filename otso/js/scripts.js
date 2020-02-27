/* Scroll to top button function */

jQuery(document).ready(function() {
  var btn = $("#topBtn");

  $(window).scroll(function() {
    let height = $(window).scrollTop();
    if (height > 150) {
      $("#topBtn").fadeIn();
    } else {
      $("#topBtn").fadeOut();
    }
  });

  btn.on("click", function(e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });
});

/* Konami Code */

var pattern = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
var current = 0;

var keyHandler = function(event) {
  // If the key isn't in the pattern, or isn't the current key in the pattern, reset
  if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
    current = 0;
    return;
  }

  // Update how much of the pattern is complete
  current++;

  // If complete, alert and reset
  if (pattern.length === current) {
    current = 0;
    window.alert("RIP Kazuhisa Hashimoto");
  }
};

// Listen for keydown events
document.addEventListener("keydown", keyHandler, false);

/* Firebase */

