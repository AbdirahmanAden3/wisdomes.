let localstorage = JSON.parse(localStorage.getItem("qoute")) || [];
let qoutes = document.querySelector("#qoute-text");
let number = document.querySelector("#number");
let btnNext = document.querySelector("#next");
let Back = document.querySelector(".Back");

let arryNumber = 0;

const qoutesOne = () => {
  qoutes.innerHTML = `   <i class="fa-solid fa-quote-left"></i>
          ${localstorage[0].qoute}
          <i class="fa-solid fa-quote-right"></i>
                      <p class="author-text" id="author-text">- ${localstorage[0].author} </p>
  `;
};

qoutesOne();

const numberCount = () => {
  let numberCount = arryNumber == 0 ? 1 : arryNumber + 1;
  number.innerHTML = `${numberCount}/${localstorage.length}`;
};
numberCount();

btnNext.addEventListener("click", () => {
  arryNumber++;
  if (arryNumber > localstorage.length - 1) {
    arryNumber = arryNumber--;
  }
  qoutes.innerHTML = `   <i class="fa-solid fa-quote-left"></i>
          ${localstorage[arryNumber].qoute}
                      <i class="fa-solid fa-quote-right"></i>
                      <p class="author-text" id="author-text">- ${localstorage[arryNumber].author} </p>
  `;
  numberCount();
});



