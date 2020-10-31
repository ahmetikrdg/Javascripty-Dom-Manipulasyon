let element=document.querySelector(".list-group-item:nth-child(3)");
console.log(element.children[0].href="https://www.google.com/");

let value=document.querySelector(".card.row")
value=value.children[2].children[1].textContent="Gemilerde Talim Var";
console.log(value);

value=document.querySelector(".card.row").children[2].children[4].children[2].textContent="Oy Beni Vurun Vurun";
//cardrow'a gittim. 2. çocuğa gittim=card-body. onun 4.cüsüne =ul. onun 2.cisine=li. indisler 0 dan başlar.
console.log(value);
let vv=document.querySelector(".card.row");//karta gittim
vv=vv.parentElement;//kartın bir üstünü aldım
console.log(vv);
