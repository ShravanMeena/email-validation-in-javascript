var email = document.getElementById("email");
var emailBox = document.querySelector(".emailBox");
var absolute = document.querySelector(".absolute");

const va =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

email.addEventListener("focus", function () {
  absolute.style.display = "block";
});

email.addEventListener("blur", function () {
  if (!email.value) {
    absolute.style.display = "none";
  }
});

email.addEventListener("input", myFunction);

function myFunction(e) {
  email.value = e.target.value;
  if (!email.value) {
    absolute.style.color = "gray";
    email.style.color = "gray";
    emailBox.style.borderColor = "gray";
  } else if (!va.test(email.value)) {
    absolute.style.color = "red";
    email.style.color = "red";
    emailBox.style.borderColor = "red";
  } else {
    absolute.style.color = "green";
    email.style.color = "green";
    emailBox.style.borderColor = "green";
  }
}
