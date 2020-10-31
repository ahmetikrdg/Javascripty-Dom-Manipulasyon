/*
const newElement= document.createElement("a");//nesne ürettim

newElement.className="text-info text-white";
newElement.id="deneme";
newElement.href="https://github.com/ahmetikrdg?tab=repositories";
newElement.appendChild(document.createTextNode("İçerik Burada"));//içlerini doldurdum
console.log(newElement);

const cardbody=document.getElementsByClassName("card-body")[1].children[1];//gideceği yeri belirttim
cardbody.appendChild(newElement);//ile cardbodye elementi ekledim
console.log(cardbody);

const see=document.getElementsByClassName("card-body")[1].children[1].children[1];//sileceğim yeri seçtim
cardbody.remove(see);//cardbody içinden sildim
console.log(see);

const cardbodyss=document.getElementsByClassName("card-body")[1].children[1];

console.log(cardbodyss);//son haline baktım 
*/

const cardbody=document.querySelectorAll(".card-body")[1];
console.log(cardbody);


const newelement=document.createElement("a");
newelement.target="_blank";
newelement.className="text-info text-dark";
newelement.id="ketenpere";
newelement.href="https://github.com/ahmetikrdg?tab=repositories";
newelement.appendChild(document.createTextNode("eman eman"));
console.log(newelement);

const oldelement=document.querySelector("#ket");
console.log(oldelement);

cardbody.replaceChild(newelement,oldelement);//yeni elementi ve değiştirmek istediğim elementi dönderdim
console.log(newelement);
