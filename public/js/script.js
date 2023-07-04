document.getElementById("loginForm").addEventListener("submit", login);

function login(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const data = {
    username: username,
    password: password
  };

  // Make a POST request to the login endpoint
  fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(result => {
    if (result.isAdmin) {
      displayMessage("Admin log in");
    } else {
      displayMessage("Staff log in");
    }
  })
  .catch(error => {
    console.error("Error:", error);
  });
}

function displayMessage(message) {
  const messageElement = document.createElement("p");
  messageElement.textContent = message;
  document.body.appendChild(messageElement);
}
