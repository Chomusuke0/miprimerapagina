function showAlert() {
    alert('¡Hola, esta es una alerta desde JavaScript!');
}
//---------------------------------------------------------------------------
const form = document.getElementById('myForm');

//el if (""""form""""") lo que hace es tranformar el objeto (en este caso "form") a booleano, si form tiene algún valor es verdadero y 
//viceversa (nulo=vacío por lo tanto falso), y en este caso da un falso por eso no entra al condicional....
if (form) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        validateForm();
    })
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}

function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    if (!validateEmail(email)) {
        alert('Por favor ingrese un correo electrónico válido.');
    } else {
        alert('Correo electrónico enviado correctamente.');
    }
}
//---------------------------------------------------------------------------
document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})
                      