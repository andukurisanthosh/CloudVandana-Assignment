const surveyForm = document.getElementById('surveyForm');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const dateOfBirthInput = document.getElementById('dateOfBirth');
const countryInput = document.getElementById('country');
const genderInputs = document.querySelectorAll('input[name="gender"]');
const professionInput = document.getElementById('profession');
const emailInput = document.getElementById('email');
const mobileNumberInput = document.getElementById('mobileNumber');
const resetButton = document.getElementById('resetButton');
const submitButton = document.getElementById('submitButton');

resetButton.addEventListener('click', () => {
  surveyForm.reset();
});

submitButton.addEventListener('click', () => {
  if (validateForm()) {
    const popupContent = createPopupContent();
    showPopup(popupContent);
  }
});

function validateForm() {
  let isValid = true;

  if (firstNameInput.value === '') {
    firstNameInput.classList.add('error');
    isValid = false;
  } else {
    firstNameInput.classList.remove('error');
  }
