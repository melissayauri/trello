
window.addEventListener('load',function(){
  var button = document.getElementById('entrada');
  var formul = document.getElementById('formul')
  button.addEventListener('click', enterForm);
  function enterForm(){
    /*llamando a ocultar el primer boton*/
  button.classList.add('enter');
  /*aparece el formulario*/
  formul.style.display = "inline-block";
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
