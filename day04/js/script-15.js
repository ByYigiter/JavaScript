// querySelector eşleşen ilk elemanı seçer
const headEl = document.querySelector("h1");
console.log(headEl);
const aboutUsEl = document.querySelector("#aboutUs");
console.log(aboutUsEl);
const spanEl = document.querySelector("#aboutUs span");
console.log(spanEl);
const menuEl = document.querySelector("ul.menu");
console.log(menuEl);
const menuItem3El = document.querySelector("ul.menu li:nth-child(3)");
console.log(menuItem3El);


headEl.innerText="Hello javascript"

//querySelectorAll eşlesen tüm elemanları getirir   
const spanEls = document.querySelectorAll("#aboutUs>span");
console.log(spanEls);

spanEls[0].innerText="değiştirdim"

// listenin 2 elemanı al en sona ekle
const menuItem3El2 = document.querySelector("ul.menu li:nth-child(3)");

// Listenin ikinci elemanını alıp, son elemanına ekleyen kod
const listItemText = document.querySelector(".menu li:nth-child(2)").innerText;
console.log(listItemText)
document.querySelector(".menu li:last-child").innerText += listItemText;
 // 2 yol
const menuItem3El3 = document.querySelector(".menu li:nth-child(3)");
const menuEl3 = document.querySelector(".menu");
menuEl.appendChild(menuItem3El);
