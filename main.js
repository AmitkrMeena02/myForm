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
    // Retrieve existing user details from localStorage
    let users = JSON.parse(localStorage.getItem('users'));

    // Create a new user object
    const newUser = {
      name: nameInput.value,
      email: emailInput.value,
      phone: numberInput.value,
      date: dateInput.value,
      time: timeInput.value
    };

    // Add the new user to the users array
    users.push(newUser);

    // Store the updated users array in localStorage
    localStorage.setItem('users', JSON.stringify(users));

    console.log('Form values stored in localStorage');
  }
}

