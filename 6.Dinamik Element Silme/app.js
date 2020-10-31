//Dinamik Element Silme

const todoList=document.querySelector("ul.list-group");//ul nin list-groupu
const todos=document.querySelectorAll("li.list-group-item");//li'nin .... leri

/*Remove Metodu
todos[0].remove(); SİLER
*/

/*Remove Child
todoList.removeChild(todoList.lastElementChild); //son çocuğu sildim */

//şunuda belirtmek isterim zaten todosta bu listi almıştık hepsini
todoList.removeChild(todos[3]);//diyerekte silebiliriz


console.log(todos);
console.log(todoList);