
window.addEventListener('load',function(){
  var button = document.getElementById('entrada');
  var formul = document.getElementById('formul');

  var saveButton = document.getElementById('save-button');


  button.addEventListener('click', enterForm);
  function enterForm(){
    /*llamando a ocultar el primer boton*/
    /*button.style.display="none";*/
  button.classList.add('enter');
  /*aparece el formulario*/
  formul.style.display = "inline-block";
  }
  saveButton.addEventListener('click', createTitle);
  function createTitle(){
   formul.style.display = "none";
   
   var container = document.getElementById('second')
    var titleBox = document.getElementById('title-box').value;
    var element = document.createElement("div");
    console.log(element);
    element.innerHTML = titleBox;
container.style.display= "inline-block"
    container.appendChild(element);

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
