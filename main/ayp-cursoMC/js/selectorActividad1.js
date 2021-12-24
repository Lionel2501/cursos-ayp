/* JS de selección automática de primera actividad */
/* Al cambiar de clase selecciona automáticamente la primera actividad */
/* Lo que hace:
- oculta todas las actividades
- muestra la primera actividad de la clase seleccionada
- destaca el botón de la actividad seleccionada
*/
/* Que remueva las clases "show" y "active" es redundante si se usa en combinación con el reemplazo de contenido HTML con includeHTML() */

$(".nav li a").on("click", function () {
    $(".tab-pane").removeClass("show active");
    $("#" + this.id + "-actividad1").addClass("show active");
    $(".claseList li button").removeClass("active");
    $("#" + (this.id) + "-actividad1-tab").addClass("active");
  });