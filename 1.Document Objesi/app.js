// console.log(this.document);//indexte var olanları gösterir
let value;
// console.log(document.all);

/*
value=document;
value=document.all;
value=document.all.length;
value=document.all[0];
value=document.all[document.all.length-1];

const elements=document.all;///html collection objesi döner
console.log(elements);
for(let i=0;i<elements.length;i++)
{
    console.log(elements[i]);
}

const collection=Array.from(document.all);
console.log(typeof collection);//olmaz

collection.forEach(function(collect){//olur
console.log(collect);//bütün sayfa başlık alır head body script meta btn vb.
});
*/
//scriptler

value=document.scripts;
console.log(value);
value=document.scripts.length;
value=document.scripts[0];

//linkler
value=document.links;
console.log(value);
value=document.links[0];
value=document.links[document.links.length-1];
value=document.links[document.links.length-1].getAttribute("class");
value=document.links[document.links.length-1].getAttribute("href");
value=document.links[document.links.length-1].className;
console.log(value);
//Formlar
value=document.forms;
value=document.forms.length;
value=document.forms[0];
value=document.forms[0].id;
value=document.forms[0].name;

// console.log(value);