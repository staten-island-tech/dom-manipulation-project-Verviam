// const DOMSelectors = {
//   form: document.querySelector("#form"),
//   firstName: document.querySelector(".first-name"),
//   h2: document.querySelectorAll("h2"), //needs query selector all
// };

// // console.log(DOMSelectors.firstName);
// function makeAlbum (){

// }

// function addCard(Album){}
// document.querySelector(".gallery")
// .insertAdjacentHTML("afterbegin", `<div class="card"> <div class="card-title"> ${Album.name}</div></div>`);
// DOMSelectors.form.addEventListener("submit", function(event) {
//   event.preventDefault();

// })  

// DOMSelectors.form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   console.log(DOMSelectors.firstName.value);
//   DOMSelectors.h2.forEach(
//     (el) => (el.textContent = DOMSelectors.firstName.value)
//   );
// });

// // for loop
// for(i=0; i <= 7; i++){
//   console.log(i);
// }

// for(i=0; i <= 7; i+=2){ // i--
//   console.log(i);
// }

// while(i < 7){
//   console.log(i);
//   i++;
// }

nums = [0, 1, 2, 3, 4, 5,6, 7, 8, 8,9,20]
function linearSearch(num, arr) {
  let found;
// For loop is iteration
  for(let i = 0; i < arr.length; i++){
    // evaluations if statements are selection
    if(arr[i] === num){
      found = arr[i];
      break
    }
    else{
      console.log("still looking")
    }
  }
  if (found == null) {
    console.log("not found")
  } else{
  console.log(found);
}
}

linearSearch(0, nums);