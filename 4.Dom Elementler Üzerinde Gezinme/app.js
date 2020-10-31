let value;

const todoList= document.querySelector(".list-group");
const todo=document.querySelector(".list-group-item:nth-child(2)");
const cardrow=document.querySelector(".card.row");
value=todoList;
value=todo;
value=cardrow;
// Child Nodes -text dahil alır
value=todoList.childNodes;
value=todoList.childNodes[0];

//Children - sadece elementleri alır
value=todoList.children;
value=todoList.children[0];
value=todoList.children[2].textContent="Değişti";//değişti yazmazsan normal içindeki gelir Todo2 yazıyordu. Görntüdede değişti yazar

value=cardrow;
value=cardrow.children;
value=cardrow.children[2];
value=cardrow.children[2].children[1].textContent="Burasıda değişti";

value=todoList;
value=todoList.children[0];//ilk çocuğu alır
value=todoList.firstElementChild;//ilk çocuğu alır
value=todoList.lastElementChild;//son çocuğu aldım
value=todoList.children.length;//kaç çocuk var
value=todoList.childElementCount;//kaç çocuk var

value=cardrow;
value=cardrow.parentElement;//cardın bir üst elementini alır
value=cardrow.parentElement.parentElement;//bodyi aldım

//element kardeşleri -ebebeyine ortak olan kardeşler demek
value=todo;
value=todo.previousElementSibling;//bir önceki kardeşe git demek
value=todo.nextElementSibling;//bir sonraki kardeşe gittim

console.log(value);