
window.addEventListener('load',function(){
  var addList = document.getElementById('entrada');
  var formul = document.getElementById('formul');
  var saveButton = document.getElementById('save-button');
  var container = document.getElementById('second');
  var cont = document.querySelector('.cont');
  var newform = document.getElementById('formul-list');
var btn = document.getElementById('btn-list');
var formulario= document.getElementById('formulario');
var box = document.querySelector('.boxnew');

  /*llamando al evento click para añdir el formulario*/
  addList.addEventListener('click', enterForm);
  function enterForm(){
    /*llamando a ocultar el primer boton*/
    /*button.style.display="none";*/
    addList.classList.add('enter');
  /*aparece el formulario*/
  formul.classList.add('formul1');
  }
  saveButton.addEventListener('click', createTitle);
  function createTitle(){
   formul.classList.toggle('formul2');
   container.setAttribute('id','second1');
   /*container.style.display="block";*/
   var titleBox = document.getElementById('title-box').value;
   document.getElementById('title-box').value= " ";
   var element = document.createElement("div");
   element.innerHTML = titleBox;
   cont.appendChild(element);
   btn.setAttribute('id','btn-list1');
 }

btn.addEventListener('click', validation);
function validation(){
  btn.setAttribute('id','btn-list');
  formulario.removeAttribute('id','formulario');
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
