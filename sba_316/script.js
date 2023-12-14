const body = document.querySelector(`body`);
let nav = document.querySelector(`nav-bar`);
let dropdown = document.querySelector(`dropdown-menu`);
const start = document.getElementById(`start`);
const serv = document.getElementById(`serv`);
const navButton = document.querySelector(`.button_`);


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


navButton.addEventListener("click", (event) => {
  event.stopPropagation();
  dropdown.classList.toggle("active");
});



