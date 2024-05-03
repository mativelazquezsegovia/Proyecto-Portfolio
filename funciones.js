function enviar() {
    var nombre = document.getElementById("txtNombre").value;
    var apellido = document.getElementById("txtApellido").value;
    var email = document.getElementById("txtEmail").value;
    var mensaje = document.getElementById("txtMensaje").value;

    if (nombre === '') {
        alert('No se puede crear el contacto porque te falta escribir en el campo Nombre.');
        return;
    }
    if (apellido === '') {
        alert('No se puede crear el contacto porque tefalta escribir en el campo Apellido.');
        return;
    }
    if (email === ''|| email.indexOf('@') === -1) {
        alert('Por favor, ingrese un correo valido.');
        return;
    }
    if (mensaje === '') {
        alert('No se puede crear el contacto porque te falta escribir en el campo Mensaje.');
        return;
    }
    alert('Formulario enviado de manera correcta, en breve se contactaran.\nGracias por ponerse en contacto');
    document.getElementById("txtNombre").value = '';
    document.getElementById("txtApellido").value = '';
    document.getElementById("txtEmail").value = '';
    document.getElementById("txtMensaje").value = '';
}
