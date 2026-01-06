const form = document.getElementById("signup-form");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const phone = document.getElementById("phone");
const errorMessage = document.getElementById("password-error");

if (!form || !password || !confirmPassword || !phone || !errorMessage) {
  throw new Error("Required form elements not found");
}

function showError(message, field) {
  errorMessage.textContent = message;
  field.focus();
}

function clearError() {
  errorMessage.textContent = "";
}

function isValidPhone(value) {
  // Remove non-digits (handles spaces, dashes, parentheses)
  const digits = value.replace(/\D/g, "");
  return digits.length === 10;
}

function validateOnSubmit() {
  // Phone validation
  if (!isValidPhone(phone.value)) {
    showError("Phone number must be exactly 10 digits", phone);
    return false;
  }

  // Password length
  if (password.value.length < 8) {
    showError("Password must be at least 8 characters long", password);
    return false;
  }

  // Password match
  if (password.value !== confirmPassword.value) {
    showError("Passwords do not match", confirmPassword);
    return false;
  }

  clearError();
  return true;
}

form.addEventListener("submit", (e) => {
  if (!validateOnSubmit()) {
    e.preventDefault();
    e.stopImmediatePropagation();
  }
});