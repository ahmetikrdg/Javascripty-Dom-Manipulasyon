//Yeni Element Oluşturma
//<a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>      bunun gibi         

const newLink=document.createElement("a"); //a etiketi oluşturucam

newLink.id="clear-todos";//a etiketime id ekledim
newLink.className="btn btn-danger";//clas verdim
newLink.href="https://www.google.com.tr";
newLink.target="_blank";

const cardbody=document.getElementsByClassName("card-body")[1];

//linke içerik ekleyelim
//newLink.textContent="Farklı sayfaya git";
//ancak bu yöntem hiç güvenli bir yöntem değil. ilkcontente yazıyı verir ondan sonrakilerin hepsi silinir.
//güvenilir yol Text Node çocuk gibi eklenebilir başına sonuna ortasına heryerine eklenebilir ancak biz bunu textcontente yapamıyoruz
const text=document.createTextNode("Naber");
//bunu cardbodynin sonuna yerleştiririm
cardbody.appendChild(text);//appenchild metodunu kullandım en son çocuktan sonra bir sonraki text eklemek istediğimizi söyleyecek
//evet textcont ve textnodenin farkını gördük devamke
newLink.appendChild(document.createTextNode("Farklı Sayfaya git"));
//oluşturduk fakat carbodynin içine eklemedik. Ekleyelim
cardbody.appendChild(newLink);
console.log(newLink);