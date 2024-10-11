let emailValido = "root@cbtis258.edu.mx";
let passValido = "admin123"

const chequeLogin = (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const mensaje = document.getElementById("LoginMensaje").value;

    if(email === emailValido && password === passValido){
        mensaje.textContent = "Inicio de sesion correcto";
        mensaje.style.color = "green";

        setTimeout  (() => {


        }, 1000);
    }
    else{
        mensaje.textContent = "Email o contraseña Incorrecta"
        mensaje.style.color ="red";
    }
}