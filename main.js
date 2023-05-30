const myForm = document.querySelector('#myform');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const numberInput = document.querySelector('#phone');
const dateInput = document.querySelector('#date');
const timeInput = document.querySelector('#time');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (
    nameInput.value === '' ||
    emailInput.value === '' ||
    numberInput.value === '' ||
    dateInput.value === '' ||
    timeInput.value === ''
  ) {
    alert('Please enter all fields');
  } else {
    // Store form values in localStorage
    localStorage.setItem('name', nameInput.value);
    localStorage.setItem('email', emailInput.value);
    localStorage.setItem('phone', numberInput.value);
    localStorage.setItem('date', dateInput.value);
    localStorage.setItem('time', timeInput.value);

    console.log('Form values stored in localStorage');
  }
}
