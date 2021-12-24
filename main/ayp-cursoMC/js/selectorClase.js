/* JS de selección de clase */
/* Lo que hace:
- destaca el botón de la clase seleccionada
- oculta todas las clases
- muestra la clase seleccionada
*/

$(".nav li a").on("click", function () {
    $(".nav li a").removeClass("active");
    $(this).addClass("active");
    $(".claseList").removeClass("d-flex");
    $(".claseList").addClass("d-none");
    $("#" + this.id + "List").removeClass("d-none");
    $("#" + this.id + "List").addClass("d-flex");
  });