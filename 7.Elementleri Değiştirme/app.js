// Replace 
//<h5 class="card-title" id = "tasks-title">Todolar</h5>

const cardbody=document.querySelectorAll(".card-body")[1];
console.log(cardbody);

const newElement=document.createElement("h3");
newElement.className="card-title";
newElement.id="tasks-title";
newElement.textContent="Yeni Todolor";//burada textcontent kullanabiliriz çünkü tek bir yazı var

// Eski Element
const oldElement=document.querySelector("#tasks-title");//şimdi biz oldelementimizi seçtik yeni elementimizi oluşturduk artık cardbody içindekileri replace etmemiz gerekiyor
cardbody.replaceChild(newElement,oldElement);//yeni elementi ve değiştirmek istediğim elementi dönderdim

console.log(newElement);