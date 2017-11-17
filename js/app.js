
window.addEventListener('load',function(){
  var addList = document.getElementById('entrada');
  var formul = document.getElementById('formul');
  var saveButton = document.getElementById('save-button');
  var container = document.getElementById('second')

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

   var titleBox = document.getElementById('title-box').value;
   var element = document.createElement("div");
   element.classList.add('title2');
   element.innerHTML = titleBox;
   container.style.display= "inline-block"
   container.classList.add('second')
   container.appendChild(element);
   var textos = document.createElement('div');
   textos.classList.add('cuadro');
   container.appendChild(textos);
   var buton2= document.createElement("button");
   buton2.innerHTML="Añadir una tarea";
   textos.appendChild(buton2);

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
}



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
