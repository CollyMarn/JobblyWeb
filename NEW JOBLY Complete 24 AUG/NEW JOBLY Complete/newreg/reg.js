// Toggle burger menu
function toggleMenu() {
  const nav = document.getElementById("navMenu");
  nav.classList.toggle("active");
}

// Show/hide disability types
function toggleDisabilityTypes() {
  const checkbox = document.getElementById("disability-status");
  const section = document.getElementById("disability-types");
  section.style.display = checkbox.checked ? "block" : "none";
}

// Handle registration
const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Collect form values
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("pwd").value.trim();
    const hasDisability = document.getElementById("disability-status").checked;
    const disabilityType = document.getElementById("types-of-disabilities")?.value || "";
    const remarks = document.getElementById("remarks")?.value || "";

    if (!username || !password) {
      alert("Please fill in username and password.");
      return;
    }

    // Save user to localStorage
    const userData = {
      username,
      password,
      hasDisability,
      disabilityType,
      remarks
    };

    localStorage.setItem("user_" + username, JSON.stringify(userData));

    alert("Registration successful! You can now log in.");
    window.location.href = "/newlog/login.html";
  });
}
