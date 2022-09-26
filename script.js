// Get the container element
var btnContainer = document.getElementById("myDIV");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}


const container = document.querySelector('.container');
const thankscontainer = document.querySelector('.thank-you');
const submitButton = document.querySelector('.submit-button');
const rateAgain = document.querySelector('#rate-again');
const rating = document.querySelector('#rating');
const numbers = document.querySelectorAll('.btn');

submitButton.addEventListener('click', () => {
  thankscontainer.classList.remove('hidden');
  container.classList.add('hidden');
})

rateAgain.addEventListener('click', () => {
  thankscontainer.classList.add('hidden');
  container.classList.remove('hidden');
} )

numbers.forEach((number) => {
  number.addEventListener('click', () => {
    rating.innerHTML = number.innerHTML;
  })

})