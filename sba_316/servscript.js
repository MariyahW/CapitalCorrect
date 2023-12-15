const body = document.querySelector(`body`);
let nav = document.querySelector(`nav-bar`);
let dropdown = document.querySelector(`dropdown-menu`);
const navButton = document.querySelector(`.button_`);


const navLinks = [
    { text: `All Services`, href: `./services.html` },
    { text: "Lending", href: `./extra.html` },
    { text: `Credit Repair`, href: `./phenom.html` },
    { text: `Business Succession`, href: `./contact.html` },
  ];
  


navLinks.forEach((link) => {
  let addOn = document.createElement(`a`);
  addOn.setAttribute(`href`, link.href);
  addOn.textContent = link.text;
  dropdown.appendChild(addOn);
});



navButton.addEventListener("click", (event) => {
  event.stopPropagation();
  dropdown.classList.toggle("active");
});



