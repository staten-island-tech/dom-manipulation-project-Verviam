const DOMSelectors  = {   
    title: document.getElementById("title-box"),
    reminder: document.getElementById("reminder-box"),
    image: document.getElementById("img-box"),
    button: document.getElementById("submit")
}
// Notes: 
// queryselectorall takes all instances of repeated classes/ids
// {} encloses objects

function removeReminder(){
  let buttons = document.querySelectorAll ("button");
  buttons.forEach((btn) => 
    btn.addEventListener("click", function (event) {
      console.log(event.target.parentElement);
    }))
}

function clearInputs() {
  DOMSelectors.title.value = "";
  DOMSelectors.reminder.value = "";
  DOMSelectors.image.src = "";
}

function backgroundAndText(background, text){
  background.style.backgroundImage = `url(${DOMSelectors.image.src})`;
  text.textContent = text.value;
}

function addReminder() {
  DOMSelectors.reminder.insertAdjacentHTML("afterbegin", 
  `<div class="reminder-box" style= "background-image: url(${DOMSelectors.image.src});">
    <h2 class="reminder-title-h2">${DOMSelectors.title.value}</h2>
    <p class="reminder-desc">${DOMSelectors.reminder.value}</p>
    <button class="removeReminder"> Remove </button>
  </div>`) 
  
  clearInputs();
  
  const removeButton = DOMSelectors.reminder.querySelector(".removeReminder");
  if (removeButton) { //checks for remove button
    removeButton.addEventListener("click", function(event) {
      console.log(event.target.parentElement)
    })
  }
}

DOMSelectors.button.addEventListener("click", addReminder);


// DOMSelectors.h2.forEach(
//  (el) => (el.textContent = DOMSelectors.firstName.value)
//  );
//  event.preventDefault();

// node: const qsa = (els) => document.queryselectorAll(els);
// const nodelist = qsa('.?')

// to convert from node to array: const array = Array.from(nodelist)

// Using JavaScript you will allow users to input information into a form. The
// form will then push data from a JavaScript object into the HTML through
// DOM manipulation. The project must contain the following
// -Create an object called “DOMSelectors” to hold your DOM Selectors
// -Create a function that creates an object and calls the following functions
// -Create a function that injects the newly created object into the DOM
// -Create a function that clears the input fields after injecting the object
// -Create a function to remove an object after they have been created

// DOMSelectors.button.addEventListener("click", function () {
//   backgroundAndText(DOMSelectors.image, DOMSelectors.reminder)); 
// }
