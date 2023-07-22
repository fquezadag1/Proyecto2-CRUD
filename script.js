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

function Mostrar(){

    let lista;

    if (localStorage.getItem('lista') == null) {
        lista = [];
    }else{
        lista = JSON.parse(localStorage.getItem("lista"));
    }

    let html = "";

    lista.forEach(function(element, index){
        html += "<tr>";
        html += "<td>" + element.nombre + "</td>";
        html += "<td>" + element.email + "</td>";
        html += "<td>" + element.contacto + "</td>";
        html += '<td><button onclick="Borrar('+ index +')" class="btn btn-danger">Borrar</button> <button onclick="Actualizar('+ index +')" class="btn btn-info">Editar Registro</button></td>';
        html += "</tr>";
    });

    document.querySelector('#tabla tbody').innerHTML = html;
}

document.onload = Mostrar();

function Agregar(){

    if (ValidarInputs() == true) {

        let nombre = document.getElementById('input-nombre').value;
        let email = document.getElementById('input-email').value;
        let contacto = document.getElementById('input-contacto').value;

        let lista;

        if (localStorage.getItem('lista') == null) {

            lista = [];
            
        }else{

            lista = JSON.parse(localStorage.getItem("lista"));
        }

        lista.push({
            nombre: nombre,
            email: email,
            contacto: contacto,
        });

        localStorage.setItem('lista', JSON.stringify(lista));

        Mostrar();

        document.getElementById('input-nombre').value = "";
        document.getElementById('input-email').value = "";
        document.getElementById('input-contacto').value = "";
    }
}

function Borrar(){

    let lista;

    if (localStorage.getItem('lista') == null) {
        lista = [];

    }else{
        lista = JSON.parse(localStorage.getItem("lista"));
    }

    lista.splice(index, 1);
    localStorage.setItem('lista', JSON.stringify(lista));
    Mostrar();

}

function Actualizar(){
    
    document.getElementById("btnAdd").disabled = true;
    document.getElementById("btnUpdate").disabled = false;

    let lista;
    if (localStorage.getItem('lista') == null) {
        lista = [];
    }else{
        lista = JSON.parse(localStorage.getItem("lista"));
    }

    document.getElementById('input-nombre').value = lista[index].nombre;
    document.getElementById('input-email').value = lista[index].email;
    document.getElementById('input-contacto').value = lista[index].contacto;

    document.querySelector("#btnUpdate").onclick = function(){

        if (ValidarInputs() == true) {
            lista[index].nombre = document.getElementById('input-nombre').value;
            lista[index].email = document.getElementById('input-email').value;
            lista[index].contacto = document.getElementById('input-contacto').value;

            localStorage.setItem('lista', JSON.stringify(lista));
            Mostrar();

            document.getElementById('input-nombre').value = "";
            document.getElementById('input-email').value = "";
            document.getElementById('input-contacto').value = "";

            document.getElementById("btnAdd").disabled = false;
            document.getElementById("btnUpdate").disabled = true;
        }
    };
}