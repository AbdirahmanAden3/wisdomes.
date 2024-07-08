let two = document.querySelector(".two");

let html = "";
categories.map((category) => {
  html += `<div class="jaceyl">
  <a href="qoutes.html?id=${category.id}" style="text-decoration: none;" ><h2 class="icon" >${category.icon};</h2></a>
    <h3>${category.name}</h3>
    <span style="display: block; font-size: 20px;" id="number" >${category.qoute.length}</span> 
         </div>`;
});

two.innerHTML = html;
