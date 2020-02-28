$(function() {
  $(".scroll-down").click(function() {
    $("html, body").animate({ scrollTop: $("#intro").offset().top }, "slow");
    return false;
  });
});
