const FORM = document.querySelector("form");
const EMAIL = document.querySelector("#email");
const CONTRASEÑA = document.querySelector("#contraseña");

FORM.addEventListener("submit", (event) => {
    if (!chequearValidez()) {
        event.preventDefault();
    }
    
    const inputs = document.querySelectorAll("input");
    inputs.forEach((elemento)=> {
        elemento.classList.add("validado");
    })
});

function chequearValidez() {
    return EMAIL.checkValidity() && CONTRASEÑA.checkValidity();
}