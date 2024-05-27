
    document.getElementById("rgistro").addEventListener("submit", function(event){
        event.preventDefault();
        let nombre = document.getElementById("nombre").value;
        let apellido= document.getElementById("apellido").value;
        let email = document.getElementById("email").value;
        let contraseña = document.getElementById("contraseña").value;
        let fecha = document.getElementById("fechaNacimiento").value;
        let nombreError = document.getElementById("nombreError");
        let emailError = document.getElementById("emailError");
        let apellidoError = document.getElementById("apellidoError");
        let contraseñaError = document.getElementById("contraseñaError");
        let fechaError = document.getElementById("fechaError");
        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        nombreError.textContent ="";
        apellidoError.textContent ="";
        emailError.textContent ="";
        contraseñaError ="";
        fechaError = "";
        
        if (nombre.trim() == ""){
            nombreError.textContent=alert ("Completar campo nombre");
            return;
        }

        if (apellido.trim() == ""){
            apellidoError.textContent=alert ("Completar campo apellido");;
            return;
        }

        if (email.trim() == ""){
            emailError.textContent=alert ("Completar campo email");;

            return;
        }

        if (contraseña.trim() == ""){
            contraseñaError.textContent=alert ("Completar campo contraseña");;
            return;
        }

        if (fecha.trim() == ""){
            fechaError.textContent=alert ("Completar campo fecha");;
            return;
        }

        if(!regexEmail.test(email)){
            emailError.textContent=alert ("No cumple requisito de email");
            return
        }

        

        alert("formulario enviado");
    })

        
    