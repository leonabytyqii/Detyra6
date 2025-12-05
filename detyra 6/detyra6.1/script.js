document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // parandalon refresh-in e faqes

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

   alert("U logove si: " + email);


  console.log("Email:", email);
  console.log("Password:", password);

  document.body.innerHTML = "<h1 style='font-family:Arial;'>" + email + "</h1>";

});