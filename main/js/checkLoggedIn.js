/* La función verifica que el usuario ya esté logueado */
/* Está incorporada a todas las vistas del curso excepto login */
/* Si encuentra en localStorage la clave "authPES" con valor "true", 
y con ttl no vencido, permite permanecer en la vista. */
/* Si no encuentra "authPES" redirecciona al login */
/* Si encuentra "authPES" pero el ttl está vencido, elimina la clave "authPES" y redirecciona al login. */

document.onreadystatechange = function(e){
    const authStatus = localStorage.getItem("authPES");
    if (!authStatus) {
      location.href = 'loginCurso.html';
    }
  
    const authStatusData = JSON.parse(authStatus);
    if (!authStatusData.ttl || Date.now() > authStatusData.ttl) {
        localStorage.removeItem("authPES");
        location.href = 'loginCurso.html';
    };
  };