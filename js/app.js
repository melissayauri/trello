
window.addEventListener('load',function(){
  var addList = document.getElementById('input-list');
  var formul = document.getElementById('formul');
  var saveButton = document.getElementById('save-button');
  var container = document.getElementById('second-container');
  var cont = document.querySelector('.thrid-container');
  var newform = document.getElementById('formul-list');
var btn = document.getElementById('btn-works');
var formulario= document.getElementById('formulario');
var box = document.querySelector('.box-works');
var añadir = document.getElementById('añadir');
var nuevo = document.getElementById('newtext');

  /*llamando al evento click para añdir el formulario*/
  addList.addEventListener('click', enterForm);
  function enterForm(){
    /*llamando a ocultar el primer boton*/
    /*button.style.display="none";*/
    addList.classList.add('input-list');
  /*aparece el formulario*/
  formul.classList.add('formul1');
  }
  saveButton.addEventListener('click', createTitle);
  function createTitle(){
   formul.classList.toggle('formul1-right');


   container.setAttribute('id','second-container1');


   /*container.style.display="block";*/
   var titleBox = document.getElementById('title-list').value;
   document.getElementById('title-list').value= " ";
   var element = document.createElement("div");
   element.innerHTML = titleBox;
   cont.appendChild(element);
   cont.insertBefore(element,formulario);
  cont.setAttribute('class','thrid-container1');
   btn.setAttribute('id','btn-works1');
 }

btn.addEventListener('click', validation);
function validation(){
  btn.setAttribute('id','btn-works');

  formulario.removeAttribute('id','formulario');

}


añadir.addEventListener('click', newtextos);
function newtextos(){
var myText = document.getElementById('entrada1').value;
var newText= document.createElement('div');
newText.setAttribute('class','new-works');
newText.innerHTML = myText;
cont.appendChild(newText);
cont.insertBefore(newText,formulario);
}
/*
   var titleBox = document.getElementById('title-box').value;
   var element = document.createElement("div");
   element.classList.add('title2');
   element.innerHTML = titleBox;
   container.style.display= "inline-block"
   container.classList.add('second');
   container.appendChild(element);*/



   /*
   buton2.addEventListener('click',function(event){
     button2.style.display='none';
   })*/

   /*
   buton2.innerHTML="Añadir una tarea";


   container.appendChild(buton2);
   button2.classList.add('button2')*/
/*
   var container = document.getElementById('second')
    var titleBox = document.getElementById('title-box').value;
    var element = document.createElement("div");
    console.log(element);
    element.innerHTML = titleBox;
    container.style.display= "inline-block"
    container.appendChild(element);
*/




  /*
  var formul = document.getElementById('formul');
  formul.addEventListener('click', aparecer);
  function aparecer(){
    button.classList.toggle('enter');
  }*/
})
/*
window.addEventListener('load',function(){
  button.addEventListener('click',enterForm);

})
var button = document.getElementById('entrada');
function enterForm(){
button.style.display="none";
}*/
