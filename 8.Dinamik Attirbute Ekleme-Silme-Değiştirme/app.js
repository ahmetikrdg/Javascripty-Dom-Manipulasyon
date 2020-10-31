const todoInput= document.getElementById("todo");
let element;

element=todoInput;
element=todoInput.classList;//bir clasımız varmış
/*dinamik olarak 2 class daha ekliycez
todoInput.classList.add("newClass");
todoInput.classList.add("NewClass2");
//formcontrolü çıkartıcam 
todoInput.classList.remove("form-control");//bunlar classname üzerindende yapılabilirdi bu farklı bir yöntem bunu tercih ettik
*/

//placeholder içeriğini görelim bunu 2 şekilde yapabiliriz
element=todoInput.placeholder;//bunla
element=todoInput.getAttribute("placeholder");//bu aynı
//placeholder'in değerini yazsını değiştirelim
todoInput.setAttribute("placeholder","Naber");
//veya bu placeholdere olmayan bir özelliğide ekleyebiliriz
todoInput.setAttribute("title","input");
element=todoInput.hasAttribute("required");//böyle bir element varmı yoksa false varsa true
todoInput.removeAttribute("name");//name özelliğini kaldırıyorum
element=todoInput;
console.log(element);