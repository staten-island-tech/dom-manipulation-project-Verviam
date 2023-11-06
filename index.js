const DOMSelectors  = {   
    title: document.getElementById("title-box"),
    reminder: document.getElementById("reminder-box"),
    image: document.getElementById("img-box")
    
}
// Notes: 
// queryselectorall takes all instances of repeated classes/ids
// {} encloses objects


function addReminder(reminder) {
  DOMSelectors.reminder.insertAdjacentHTML("afterbegin", 
  `<div class="reminder-box">
  <h2 class="reminder-title-h2">${DOMSelectors.title.value}</h2>
  <p class="reminder-text">${DOMSelectors.reminder.value}</p>
  </div>
  
  <button class="removeReminder">Remove </button>`)
  DOMSelectors.form.addEventListener("submit", function(event) {
    event.preventDefault();
  });
  
}

function imgToBackground(filloutdiv){
  // fillout-div.background-Image = url(DOMSelectors.image);

}

function clearInputs(){

}
function removeReminder(){
  let buttons = document.querySelectorAll ("button");
  buttons.forEach((btn) => 
    btn.addEventListener("click", function (event) {
      console.log(event.target.parentElement);
    }))
}


// notes
DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(DOMSelectors.firstName.value);
  DOMSelectors.h2.forEach(
    (el) => (el.textContent = DOMSelectors.firstName.value)
  );
});

function backgroundAndText(background, text){
  background.style.backgroundColor = "red";
  text.innerHTML = "red";
  text.style.fontSize = "40px";
}
backgroundAndText(DOMSelectors.img, DOMSelectors.reminder);
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
