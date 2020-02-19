$(function() {
  $(".scroll-down").click(function() {
    $("html, body").animate({ scrollTop: $("#intro").offset().top }, "slow");
    return false;
  });
});

// function myFunction() {
//   var x = document.getElementById("mobile-nav");
//   if (x.className === "mobile-menu") {
//     x.className += " responsive";
//   } else {
//     x.className = "mobile-menu";
//   }
// }
function openNav() {
  document.getElementById("myNav").style.width = "60%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
