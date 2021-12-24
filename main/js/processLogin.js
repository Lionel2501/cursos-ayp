/* Valores para autorización del curso */
let keyName = "authPES"; /* Curso que estamos autorizando */
let keyValue = true;
let ttl = 1; /* Duración de la autorización (TTL) */


/* Función para agregar autorización en localStorage con vencimiento (ttl) */
const setAuth = (keyName, keyValue, ttl) => {
  const data = {
      value: keyValue,
      // ttl: Date.now() + (ttl * 1000 * 3600), /* multiplicador para TTL en hora */
      ttl: Date.now() + (ttl * 86400000), /* multiplicador para TTL en días */
  }
  localStorage.setItem(keyName, JSON.stringify(data));
};


/* Recibe el formulario y verifica si está autorizado */
/* El acceso al curso es válido por 45 días. "validFor" calcula el tiempo de validez */
/* Si no encuentra al usuario devuelve alerta */
/* Si encuentra al usuario pero la contraseña no coincide devuelve alerta */
/* Si encuentra al usuario y coincide la contraseña, pero han pasado más de 45 días desde la suscripción devuelve alerta */
/* Si encuentra al usuario y coincide la contraseña guarda la autorización en localStorage por el tiempo que se haya determinado arriba en TTL */
let form = document.getElementById("loginForm");
form.addEventListener('submit', (event) => {
  let validFor = 45 * 86400000;
  let email = emailInput.value;
  let password = passwordInput.value;
  let userFound = users.find(user => user.username == email);
  if(!userFound){
    location.href = 'loginCurso.html';
    alert("El usuario ingresado no tiene acceso al curso");
  }
  if(userFound){
    let subscriptionDate = userFound.subscriptionDate.split("-");
    let subscriptionDateFormatted = new Date( subscriptionDate[2], subscriptionDate[1] - 1, subscriptionDate[0]);
    let expiryTimestamp = subscriptionDateFormatted.getTime() + validFor;
    if(userFound.password != password){
      location.href = 'loginCurso.html';
      alert("La contraseña no es válida");
    };
    if(Date.now() > expiryTimestamp){
      location.href = 'loginCurso.html';
      alert("Su acceso al curso expiró");
    } else if(userFound.password == password){
      setAuth(keyName, keyValue, ttl);
    };
  };
});


/* Verifica que esté autorizado en localStorage y redirige al curso */
let authStatus = localStorage.getItem("authPES");
let authStatusData = JSON.parse(authStatus);
if(authStatusData.value == true){
  window.location.href = 'index.html';
};