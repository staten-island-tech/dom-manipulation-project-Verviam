const DOMSelectors  = {   
    title: document.getElementById("title-box"),
    reminder: document.getElementById("reminder-box"),
    image: document.getElementById("img-box"),
    button: document.getElementById("submit"),
    newReminder: document.getElementById("new-reminder"),
    form: document.getElementById("get-reminder")
}
// Notes: 
// queryselectorall takes all instances of repeated classes/ids
// {} encloses objects

function clearInputs() {
  DOMSelectors.title.value = "";
  DOMSelectors.reminder.value = "";
  DOMSelectors.image.src = "";
}

function removeCard(){
  document.querySelectorAll(".remove-reminder-button").forEach((button) => {
     button.addEventListener("click", function(event){
         event.target.parentElement.remove();
     });
  });
}

function addReminder() {
  DOMSelectors.newReminder.insertAdjacentHTML("afterend", 
  `<div class="reminder-box">
    <h2 class="reminder-title-h2">${DOMSelectors.title.value}</h2>
    <p class="reminder-desc">${DOMSelectors.reminder.value}</p>
    <img src= "${DOMSelectors.image.src}" alt = "image" class = "new-reminder-image"/>
    <button class="remove-reminder-button"> Remove </button>
  </div>`) 
  
  clearInputs();
  removeCard();
}

DOMSelectors.form.addEventListener("submit", function(event) {
  event.preventDefault();
  addReminder();
})


// node: const qsa = (els) => document.queryselectorAll(els);
// const nodelist = qsa('.?')

// to convert from node to array: const array = Array.from(nodelist)


// form will then push data from a JavaScript object into the HTML through
// DOM manipulation. The project must contain the following
// -Create an object called “DOMSelectors” to hold your DOM Selectors
// -Create a function that creates an object and calls the following functions
// -Create a function that injects the newly created object into the DOM
// -Create a function that clears the input fields after injecting the object
// -Create a function to remove an object after they have been created
