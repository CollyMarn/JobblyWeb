// Toggle burger menu
function toggleMenu() {
  const nav = document.getElementById("navMenu");
  nav.classList.toggle("active");
}

// Toggle display of disability types
function toggleDisabilityTypes() {
  const checkbox = document.getElementById("disability-status");
  const types = document.getElementById("disability-types");
  types.style.display = checkbox.checked ? "block" : "none";
}

// Handle Registration
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = this.username.value.trim();
    const password = this.pwd.value.trim();

    if (!username || !password) {
      alert("Username and password are required.");
      return;
    }

    const hasDisability = this["disability-status"].checked;
    const disabilityName = hasDisability ? this["types-of-disabilities"].value : "";

    const user = {
      username,
      password,
      hasDisability,
      disabilityName
    };

    localStorage.setItem("user_" + username, JSON.stringify(user));

    alert("Registration successful! You can now log in.");
    window.location.href = "login.html";
  });
}

// Handle Login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = this.username.value.trim();
    const password = this.password.value.trim();

    if (!username || !password) {
      alert("Both fields are required.");
      return;
    }

    const savedUser = localStorage.getItem("user_" + username);
    if (!savedUser) {
      alert("User not found!");
      return;
    }

    const user = JSON.parse(savedUser);
    if (user.password !== password) {
      alert("Incorrect password!");
      return;
    }

    if (user.hasDisability) {
      window.location.href = "dashboard_disability.html";
    } else {
      window.location.href = "dashboard.html";
    }
  });
}
