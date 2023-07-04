document.getElementById("loginForm").addEventListener("submit", login);

function login(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const data = {
    username: username,
    password: password,
  };

//post request to login endpoint
  fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.redirect) {
        window.location.href = result.redirect; // Redirect to the specified page
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
