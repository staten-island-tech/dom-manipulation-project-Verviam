const DOMSelectors  = { // {} encloses objects
    form: document.querySelector("#form"),
    text: document.querySelector(".text-box"),
    h2: document.querySelectorAll("h2")

}

function addReminder(reminder) {
    document.querySelector(".reminders")
    .insertAdjacentHTML("afterbegin", `<div class="card">< div class="card-title"> ${reminder.title}</div></div>` )
    DOMSelectors.form.addEventListener("submit", function(event)) {
    event.preventDefault();
    }
}

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(DOMSelectors.firstName.value);
  DOMSelectors.h2.forEach(
    (el) => (el.textContent = DOMSelectors.firstName.value)
  );
});


// Using JavaScript you will allow users to input information into a form. The
// form will then push data from a JavaScript object into the HTML through
// DOM manipulation. The project must contain the following
// -Create an object called “DOMSelectors” to hold your DOM Selectors
// -Create a function that creates an object and calls the following functions
// -Create a function that injects the newly created object into the DOM
// -Create a function that clears the input fields after injecting the object
// -Create a function to remove an object after they have been created
