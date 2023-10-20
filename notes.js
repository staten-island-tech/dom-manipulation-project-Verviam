const DOMSelectors = {
  form: document.querySelector("#form"),
  firstName: document.querySelector(".first-name"),
  h2: document.querySelectorAll("h2"), //needs query selector all
};

// console.log(DOMSelectors.firstName);
function makeAlbum (){

}

function addCard(Album){}
document.querySelector(".gallery")
.insertAdjacentHTML("afterbegin", `<div class="card"> <div class="card-title"> ${Album.name}</div></div>`);
DOMSelectors.form.addEventListener("submit", function(event) {
  event.preventDefault();

})  

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(DOMSelectors.firstName.value);
  DOMSelectors.h2.forEach(
    (el) => (el.textContent = DOMSelectors.firstName.value)
  );
});
