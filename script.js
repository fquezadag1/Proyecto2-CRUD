function ValidarInputs(){

    let nombre = document.getElementById('input-nombre').value;
    let email = document.getElementById('input-email').value;
    let contacto = document.getElementById('input-contacto').value;

    if (nombre == "") {
        alert('Ingrese Nombre');
        return false;
    }

    if (contacto == "") {
        alert('Ingrese Numero de Contacto');
        return false;
    }

    if (email == "") {
        alert('Ingrese Email');
        return false;

    }else if (!email.includes("@")) {
        alert('Email ingresado no es Valido');
        return false;
    }

    return true;
}