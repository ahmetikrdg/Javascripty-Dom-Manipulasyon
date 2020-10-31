//const element=document.querySelector("#clear-todos");

//element özellikleri
/*
console.log(element.id);
console.log(element.className); //elementin klası gelir
console.log(element.classList);//içindeki tüm kaslar gelir
console.log(element.classList[1]);
console.log(element.textContent);//butonun içindeki yazı gelir
console.log(element.innerHTML);//aynı yazı
console.log(element.href);//href nereye gidiyor bakarız
console.log(element.style);*/

//style ve element özelliklerini değiştirmek
/*
element.className="btn btn-primary";
element.style.color="#000";
element.style.marginLeft="5px";
element.href="https://www.google.com.tr";
element.target="_blank";
element.textContent="Silin"; buton içindeki yazıyı değiştirdim
element.innerHTML="<span style='color:green'> Silin </silin>" //butonun yazısına html gönderdim inner html ile
*/

//tüm list-grouplerı seçip arka plan rengi ve yazısını değiştirmek
/*
const elements=document.querySelectorAll(".list-group-item");
elements.forEach(function(el) {
    el.style.color="red";
    el.style.background="#eee";
});
*/
//istediğimiz li yi vb. seçmek
let element2=document.querySelector("li:last-child");//son liyi seçer başına first dersen ilk başı seçer
element2=document.querySelector("li:nth-child(2)");//li lerin içinde 2.cisini aldım
element2=document.querySelectorAll("li:nth-child(odd)");//dersem 1,3,5,7 böyle gider seçe seçe tekleri alır
element2=document.querySelectorAll("li:nth-child(even)");//2 şer gider seçe seçe
element2.forEach(function(el) {
    el.style.background="#ccc";
    el.style.color="red";
});
//aslınd böylede seçiliyor alternatif hocaya soracağım
element2=document.querySelectorAll("li")[2];
console.log(element2)
