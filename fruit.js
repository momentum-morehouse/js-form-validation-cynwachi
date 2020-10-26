const email = document.getElementById("mail");

email.addEventListener("input", function (event) {
   if (email.validity.typeMismatch) {
       email.setCustomValidity("I need an email address");
   } else {
       email.setCustomValidity("");
   }
});