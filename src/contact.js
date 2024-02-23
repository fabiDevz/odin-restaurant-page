function cargarContact() {


    const content = document.querySelector('#content');

    if (content.innerHTML.trim() != '') {
        content.innerHTML = '';
    }

    //creacion de elementos 
    const nombreLocal = document.createElement('h2');
    const direccionLocal = document.createElement('p');
    const telefonoLocal = document.createElement('p');
    const contentContacto = document.createElement('div');

    // Establecer contenido de los elementos
    nombreLocal.textContent = 'Café Aromático ☕';
    direccionLocal.textContent = 'Dirección: 🏠 Calle Principal, Ciudad';
    telefonoLocal.textContent = 'Contacto:  📞 +123 456 789';

    contentContacto.className = 'content-contact'

    contentContacto.appendChild(nombreLocal);
    contentContacto.appendChild(direccionLocal);
    contentContacto.appendChild(telefonoLocal);

    // Agregar al contenedor principal

    content.appendChild(contentContacto);

}

export default cargarContact;