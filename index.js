"use strict";

const firstcontent = document.querySelector(".container1");
const secondcontent = document.querySelector(".container2")
const butn = document.querySelector(".btn");
const rates = document.querySelectorAll('.rate');
const figcaption = document.querySelector(".caption");

let rating = '';


const ratesName = (rate) => {
  if (rate.classList.contains('select')) {
    rate.style.backgroundColor = '';
    rate.style.color = '';
    rate.classList.remove('select');
    content = '';
  } else {
    rates.forEach((c) => {
      c.classList.remove('select');
      c.style.backgroundColor = '';
      c.style.color = '';
    });
    
    rate.style.backgroundColor = "hsl(217, 12%, 63%)";
    rate.style.color = "white";
    rate.classList.add('select');
    rating = rate.innerHTML;
  }
};
rates.forEach((rate) => {
  rate.addEventListener('click', () => ratesName(rate));
});


butn.addEventListener("click", ()=>{
  firstcontent.style.display = "none";
  secondcontent.style.display = "block"; 
  figcaption.textContent = `You selected ${rating} out of 5`;
})