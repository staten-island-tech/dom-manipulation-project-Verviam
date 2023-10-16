const DOMSelectors = {
  form: document.querySelector("#form"),
  firstName: document.querySelector(".first-name"),
  h2: document.querySelectorAll("h2"), //needs query selector all
};

// console.log(DOMSelectors.firstName);

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(DOMSelectors.firstName.value);
  DOMSelectors.h2.forEach(
    (el) => (el.textContent = DOMSelectors.firstName.value)
  );
});
