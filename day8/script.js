const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

function showError(input, message) {
  const errorMsg = input.nextElementSibling;
  errorMsg.innerText = message;
  input.classList.add("error");
  input.classList.remove("success");
}

function showSuccess(input) {
  const errorMsg = input.nextElementSibling;
  errorMsg.innerText = "";
  input.classList.add("success");
  input.classList.remove("error");
}

function validateName() {
  if (nameInput.value.trim() === "") {
    showError(nameInput, "Name is required");
    return false;
  }
  showSuccess(nameInput);
  return true;
}

function validateEmail() {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

  if (emailInput.value.trim() === "") {
    showError(emailInput, "Email is required");
    return false;
  } else if (!emailPattern.test(emailInput.value)) {
    showError(emailInput, "Enter a valid email");
    return false;
  }
  showSuccess(emailInput);
  return true;
}

function validatePassword() {
  if (passwordInput.value.length < 6) {
    showError(passwordInput, "Password must be at least 6 characters");
    return false;
  }
  showSuccess(passwordInput);
  return true;
}

function validateConfirmPassword() {
  if (confirmPasswordInput.value !== passwordInput.value) {
    showError(confirmPasswordInput, "Passwords do not match");
    return false;
  }
  showSuccess(confirmPasswordInput);
  return true;
}
nameInput.addEventListener("keyup", validateName);
emailInput.addEventListener("keyup", validateEmail);
passwordInput.addEventListener("keyup", validatePassword);
confirmPasswordInput.addEventListener("keyup", validateConfirmPassword);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  const isConfirmPasswordValid = validateConfirmPassword();

  if (
    isNameValid &&
    isEmailValid &&
    isPasswordValid &&
    isConfirmPasswordValid
  ) {
    alert("Form submitted successfully!");
    form.reset();
  }
});
