//Script for "back to top" button, code from w3school

var mybutton = document.getElementById("topBtn");

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Script to show an alert when clicking the .pdfButton button

function showAlert() {
  alert("Such a brave soul! Thanks for clicking and have a nice day!");
}
