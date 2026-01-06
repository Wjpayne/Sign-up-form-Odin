const form = document.getElementById("signup-form");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const errorMessage = document.getElementById("password-error");

// Safety check (prevents runtime errors)
if (!form || !password || !confirmPassword || !errorMessage) {
  console.warn("Signup form elements not found");
  return;
}

function setValidationState(isValid, message = "") {
  confirmPassword.classList.toggle("error", !isValid);
  confirmPassword.classList.toggle("success", isValid);
  confirmPassword.setAttribute("aria-invalid", String(!isValid));
  errorMessage.textContent = message;
}

function validatePasswords() {
  const pwd = password.value.trim();
  const confirmPwd = confirmPassword.value.trim();

  // No validation until user starts typing
  if (!confirmPwd) {
    setValidationState(true, "");
    return false;
  }

  // Optional: enforce minimum length consistency
  if (pwd.length < 8) {
    setValidationState(false, "Password must be at least 8 characters");
    return false;
  }

  if (pwd !== confirmPwd) {
    setValidationState(false, "Passwords do not match");
    return false;
  }

  setValidationState(true);
  return true;
}

// Live validation
password.addEventListener("input", validatePasswords);
confirmPassword.addEventListener("input", validatePasswords);

// Block form submission if invalid
form.addEventListener("submit", (e) => {
  if (!validatePasswords()) {
    e.preventDefault();
    confirmPassword.focus();
  }
});