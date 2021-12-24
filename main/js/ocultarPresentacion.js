/*JS de para ocultar la sección del video de presentación al seleccionar una clase (en CA) */

$(".nav li a").on("click", function () {
    $(".presentacion").addClass("d-none");
    $(".actividades").removeClass("d-none");
  });