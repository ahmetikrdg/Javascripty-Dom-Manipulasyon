//Elementi id'ye göre seçme
let element;

element=document.getElementById("todo-form"); //indexteki formu consolede görebilirsin şimdi seçtik çünkü
console.log(element);

element=document.getElementById("tasks-title");

//Element Class'a göre seçme
element=document.getElementsByClassName("list-group-item");//bu clasa sahip hepsi geldi. ilkini istersen (group-item)[0];yaparım
console.log(element);

element=document.getElementsByClassName("card-header")
console.log(element);


//Etiket Tag'e göre seçme

element=document.getElementsByTagName("li");//etikete sahip sahip hepsi geldi

//JS'de öyle bir metod varki. Tek metodla yukarıdaki üçünün yaptığı işlemi yapabiliriz.
//Query Selector - Css Selector sayfada ilk bulduğu teke elementi seçer. Dezavantajı budur.

element=document.querySelector("#todo-form")// # ile idye göre sıralamak istediğimi söylüyorum
element=document.querySelector("#tasks-title")//id sayfada bir tane olur zaten farklı, # da kullanmak mantıklı

//ancak bu .list-groupta pek mantıklı değil çünkü sadece ilkini alıyoruz bunun yerine queryselecterall kullanabiliriz
element=document.querySelector(".list-group-item")//burada queryselectorü clasa göre kullanmak istediğimi söylüyorum

element=document.querySelector("li");
element=document.querySelector("div");

element=document.querySelectorAll(".list-group-item") //Buradan bize bir node List döner birde hemen bunun içinde gezinelim
console.log(element);

element.forEach(function(el){
console.log(el);
});

