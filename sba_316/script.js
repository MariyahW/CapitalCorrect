const body = document.querySelector(`body`);
let nav = document.querySelector(`nav-bar`);
let dropdown=document.querySelector(`dropdown-menu`)
const start=document.getElementById(`start`);
const serv=document.getElementById(`serv`);
const navLinks = [
      { text: "Lending", href: `./lending` },
      { text: `Credit Repair`, href: `/credit` },
      { text: `Business Succession`, href: `./buyouts` },
    ];
 
navLinks.forEach((link) => {
    let addOn = document.createElement(`a`);
    addOn.setAttribute(`href`, link.href);
    addOn.textContent = link.text;
    dropdown.appendChild(addOn);
  });
  
  //Part 2-1
//   let subMenuEl = document.querySelector(`sub-menu`);
// //   subMenuEl.style.position = `absolute`;
//   subMenuEl.style.top = `0`;
  
  start.addEventListener(`click`,(event) =>{
    event.stopPropagation();
    location.href=`./contact.html`

  });

  serv.addEventListener(`click`,(event) =>{
    event.stopPropagation();
    location.href=`./services.html`

  });