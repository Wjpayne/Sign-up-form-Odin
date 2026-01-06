const form = document.getElementById("signup-form");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const errorMessage = document.getElementById("password-error");

function validatePasswords() {
  if (confirmPassword.value === "") {
    errorMessage.textContent = "";
    confirmPassword.classList.remove("error", "success");
    return false;
  }

  if (password.value !== confirmPassword.value) {
    errorMessage.textContent = "Passwords do not match";
    confirmPassword.classList.add("error");
    confirmPassword.classList.remove("success");
    return false;
  } else {
    errorMessage.textContent = "";
    confirmPassword.classList.remove("error");
    confirmPassword.classList.add("success");
    return true;
  }
}

// Live validation
password.addEventListener("input", validatePasswords);
confirmPassword.addEventListener("input", validatePasswords);

// Block form submission
form.addEventListener("submit", (e) => {
  if (!validatePasswords()) {
    e.preventDefault();
    confirmPassword.focus();
  }
});