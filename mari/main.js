//Back to top button
$(document).ready(function() {
  $("#myBtn").hide(0);
});

$(window).scroll(function() {
  let height = $(window).scrollTop();
  if (height > 150) {
    $("#myBtn").fadeIn();
  } else {
    $("#myBtn").fadeOut();
  }
});

$(document).ready(function() {
  $("#myBtn").click(function(event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0
      },
      "fast"
    );
    return false;
  });
});
