/* we will select couple elements from the html, I will add a listener and 
then add and remove class */

const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

/* Create click event listener and add active panel class to 
the event */
//clicking sign up will add the class
signUpButton.addEventListener("click", () =>
  container.classList.add("right-panel-active")
);

//clicking sign in will remove it
signInButton.addEventListener("click", () =>
  container.classList.remove("right-panel-active")
);
