//Scroll down button
$(function() {
  $(".scroll-down").click(function() {
    $("html, body").animate({ scrollTop: $("#intro").offset().top }, "slow");
    return false;
  });
});

//Overlay menu
function openNav() {
  document.getElementById("myNav").style.width = "60%";
}
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

//Display range value
var slider = document.getElementById("myRange");
var output = document.getElementById("value");
output.innerHTML = slider.value;
slider.oninput = function() {
  output.innerHTML = this.value;
};
