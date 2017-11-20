
window.addEventListener('load', function() {
  /* variable para el ingreso de la lista*/
  var addList = document.getElementById('input-list');
  /* variable para el primer formulario*/
  var formul = document.getElementById('formul');
  /* variable para el boton */
  var saveButton = document.getElementById('save-button');
  /* contenedor del primer formulario*/
  var container = document.getElementById('second-container');
  /* contenedor de las tareas y el titulo*/
  var containerWorks = document.querySelector('.thrid-container');
  /* botón añadir tareas*/
  var btnWorks = document.getElementById('btn-works');
  /* segundo formulario*/
  var secondFormul = document.getElementById('formulario');
  /* contenedor de las tareas*/
  var box = document.querySelector('.box-works');
  /* botón añadir*/
  var btnAdd = document.getElementById('add');
  var inputWorks = document.getElementById('entrada1');
  /* llamando al evento click en el boton añadir lista*/
  addList.addEventListener('click', enterForm);
  /* funcion para ingresar al primer formulario*/
  function enterForm() {
    /* llamando a ocultar el primer boton añadir lista*/
    addList.classList.add('input-list');
    /* aparece el primer formulario*/
    formul.classList.add('formul1');
  }

  /* llamando al evento click en el boton guardar*/
  saveButton.addEventListener('click', createTitle);
  /* funcion para crear el titulo de la lista*/
  function createTitle() {
    /* el primer formulario aparece en el lado derecho*/
    formul.classList.toggle('formul1-right');
    /* se le agrega estilos al nuevo contenedor del titulo y tareas*/
    container.setAttribute('id', 'second-container1');
    /* tomando los datos para ingresar el titulo*/
    var titleBox = document.getElementById('title-list').value;
    /* vaciando el ingreso del titulo*/
    document.getElementById('title-list').value = '';
    /* creando otro elemento para el titulo*/
    var element = document.createElement('div');
    /* incoporando el titulo en dicho elemento*/
    element.innerHTML = titleBox;
    /* incorporando el elemento en el nuevo contenedor*/
    containerWorks.appendChild(element);
    /* insertandolo antes del segundo formulario*/
    containerWorks.insertBefore(element, secondFormul);
    /* incorporando estilos para el contenedor de las tareas*/
    containerWorks.setAttribute('class', 'thrid-container1');
    /* incoporando estilos para que aparezca el boton añadir tarea*/
    btnWorks.setAttribute('id', 'btn-works1');
  }

  /* llamando al evento click en el boton añadir tarea */
  btnWorks.addEventListener('click', addWorks);
  /* funcion para añadir tareas*/
  function addWorks() {
    /* incorporando estilo para que desaparezca el boton añadir tareas*/
    btnWorks.setAttribute('id', 'btn-works');
    /* removiendo el estilo para que aparezca el formulario con el boton añadir */
    secondFormul.removeAttribute('id', 'formulario');
  }

  /* llamando al evento click en el boton añadir*/
  btnAdd.addEventListener('click', newWorks);
  /* funcion para añadir nuevas tareas*/
  function newWorks() {
    /* recogiendo datos ingresados en el texarea*/
    var myText = document.getElementById('entrada1').value;
    /* limpiando el texarea cuando ya se ingresa un dato*/
    document.getElementById('entrada1').value = '';
    /* creando un elemeneto para la nuevas tareas*/
    var newText = document.createElement('div');

    /* incorporando estilos a las nuevas tareas*/
    newText.setAttribute('class', 'new-works');
    /* añadiendo el texto ingresado al elemento*/
    newText.innerHTML = myText;
    /* incorporando el elemento en el contenedor*/
    containerWorks.appendChild(newText);
    /* incorporando antes del texarea y el boton añadir*/
    containerWorks.insertBefore(newText, secondFormul);
  }
  /* evento focus*/
  inputWorks.addEventListener('focus', selection);
  function selection() {
    inputWorks.classList.add('input-works');
  }
});
