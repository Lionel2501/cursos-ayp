/* La función se ejecuta al seleccionar una clase en la vista claseActividad */
/* Identifica qué clase fue seleccionada, 
busca el archivo parcial HTML de contenidos
y ejecuta includeHTML() para agregarlo al DOM */

$(".nav li a").on("click", function () {
    var claseTabContent = `./partials/${this.id}.html`;
    var doc = document.getElementsByClassName("tab-content");
    doc[0].setAttribute("w3-include-html", claseTabContent);
    includeHTML();
  });