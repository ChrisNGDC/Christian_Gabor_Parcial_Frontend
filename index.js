const entrada = document.querySelectorAll('input');
const tabla = document.getElementById('idTabla');
const mensaje = document.getElementById("mensaje");
const btnBorrar = document.getElementById("btnBorrar");


function borrarTabla() {
    tabla.innerHTML = '<tr id="encabezado"><th>Nombre</th><th>Apellido</th><th>Edad</th></tr>';
    btnBorrar.style.visibility = 'hidden';
}

function generarPersona(callback) {
    for (let index = 0; index < entrada.length; index++) {
        if  (entrada[index].value === '') {
            mensaje.innerText = 'Error! Complete todos los campos para generar una persona.'
            return -1;
        }
    }
    const persona = {
        nombre: entrada[0].value,
        apellido: entrada[1].value,
        edad: entrada[2].value
    }
    callback(persona);
    for (let index = 0; index < entrada.length; index++) {
        entrada[index].value = '';
    }
    mensaje.innerText = '';
    return 0;
}

function agregarEnTabla(persona) {
    tabla.innerHTML += `<tr><td>${persona.nombre}</td><td>${persona.apellido}</td><td>${persona.edad}</td></tr>`;
    btnBorrar.style.visibility = 'visible';
}