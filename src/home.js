
function cargarHome() {
   

    
    const content = document.querySelector('#content');

    if (content.innerHTML.trim() != '') {
        content.innerHTML = '';
    } 

    //creacion de elementos 
    const titulo = document.createElement('h2');
    const descripcion = document.createElement('p');
    const imagen = document.createElement('img');
    const home = document.createElement('div');

    //asignacion de clases
    home.classList.add('content-home');

    //tratamiento de elementos
    titulo.textContent = 'Café Aromático';
    descripcion.textContent = 'Café Aromático es un oasis para los amantes del café, ubicado en el corazón de la bulliciosa ciudad.';
    imagen.src = 'img/coffee_closeup.jpg';
    imagen.alt = 'imagen de taza de café';

    // asignacion de contenido

    home.appendChild(titulo);
    home.appendChild(descripcion);
    home.appendChild(imagen);
    content.appendChild(home);

    

}

export default cargarHome;