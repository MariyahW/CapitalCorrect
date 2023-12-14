const body = document.querySelector(`body`);
let nav = document.querySelector(`nav-bar`);
let dropdown = document.querySelector(`dropdown-menu`);
const start = document.getElementById(`start`);
const serv = document.getElementById(`serv`);
const navButton = document.querySelector(`.button_`);
const form = document.getElementById(`form-group`);
const formName = document.getElementById(`name`);
let error = document.querySelector(`err-mess`);

const navLinks = [
  { text: `All Services`, href: `./services.html` },
  { text: "Lending", href: `https://www.davidallencapital.com/102159514` },
  { text: `Credit Repair`, href: `/credit` },
  { text: `Business Succession`, href: `./buyouts` },
];

navLinks.forEach((link) => {
  let addOn = document.createElement(`a`);
  addOn.setAttribute(`href`, link.href);
  addOn.textContent = link.text;
  dropdown.appendChild(addOn);
});

start.addEventListener(`click`, (event) => {
  event.stopPropagation();
  location.href = `./contact.html`;
});

serv.addEventListener(`click`, (event) => {
  event.stopPropagation();
  location.href = `./services.html`;
});

// navButton.forEach(button=>{
navButton.addEventListener("click", (event) => {
  event.stopPropagation();
  dropdown.classList.toggle("active");
});

// });

form.addEventListener(`submit`, (event) => {
  debugger;

  if (userVal()) {
    event.preventDefault();
    error.textContent = `Username must not contain special characters.`;
    error.style.display = `block`;
    setTimeout(() => {
      error.style.display = `none`;
    }, 2000);
  }

  if (email.value.includes(`example.com`)) {
    event.preventDefault();
    error.textContent = `example.com is not a valid domain name`;
    error.style.display = `block`;
    setTimeout(() => {
      error.style.display = `none`;
    }, 2000);
  }
});

function userVal() {
  const regEx = /[\W]/;
  console.log(regEx.test(formName));
  return regEx.test(formName);
}
