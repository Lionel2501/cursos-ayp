/* La función elimina "authPES" de localStorage y redirecciona al login */

document.getElementById("logoutForm").addEventListener('click', () => {
    let auth = localStorage.getItem("authPES");
    if(auth){
      localStorage.removeItem("authPES");
    };
    location.href = '../index.html';
  });