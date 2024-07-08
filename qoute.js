let qoutes = document.querySelector("#qoute-text");
let btnNext = document.querySelector("#next");
let copy = document.querySelector(".fa-copy");
let number = document.querySelector("#number");
let start = document.querySelector("#star");
let back = document.querySelector(".Back");





let getUrlId = window.location.search;
let params = new URLSearchParams(getUrlId);
// let params = new URLSearchPgitarams(getUrlId);
let id = params.get("id");

let arryNumber = 0;

let data = categories.filter(function (category) {
  if (category.id == id) {
    return category;
  }
});

if(data.length == 0) {
  window.location = "index.html";
}


start.addEventListener("click", () => {
  let dataStart = data[0].qoute[arryNumber];

  let localstorage = JSON.parse(localStorage.getItem("qoute")) || [];

  localstorage.push(dataStart);
  localStorage.setItem("qoute", JSON.stringify(localstorage));
});

const qoutesOne = () => {
  qoutes.innerHTML = `   <i class="fa-solid fa-quote-left"></i>
        ${data[0].qoute[0].qoute}


        <i class="fa-solid fa-quote-right"></i>
                    <p class="author-text" id="author-text">- ${data[0].qoute[0].author} </p>
`;
};

qoutesOne();

btnNext.addEventListener("click", () => {
  arryNumber++;
  if (arryNumber > data[0].qoute.length - 1) {
    arryNumber = arryNumber--;
  }
  qoutes.innerHTML = `   <i class="fa-solid fa-quote-left"></i>
        ${data[0].qoute[arryNumber].qoute}
                    <i class="fa-solid fa-quote-right"></i>
                    <p class="author-text" id="author-text">- ${data[0].qoute[arryNumber].author} </p>

                    
`;
  numberCount();
});

back.addEventListener("click", () => {
 arryNumber--;
  qoutes.innerHTML = `   <i class="fa-solid fa-quote-left"></i>
        ${data[0].qoute[arryNumber].qoute}
                    <i class="fa-solid fa-quote-right"></i>
                    <p class="author-text" id="author-text">- ${data[0].qoute[arryNumber].author} </p>
                  
                    
`;


});



copy.addEventListener("click", () => {
  copy.onclick = () => {
    const text = document.querySelector(".qoute-text");
    navigator.clipboard.writeText(text.innerText);
  };
  alert("copied successfully");
});

const numberCount = () => {
  let numberCount = arryNumber == 0 ? 1 : arryNumber + 1;
  number.innerHTML = `${numberCount}/${data[0].qoute.length}`;

}

