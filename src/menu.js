function cargarMenu()
{
    const content = document.querySelector('#content');
    const tituloMenu = document.createElement('h1');

    if (content.innerHTML.trim() != '') {
        content.innerHTML = '';
    } 
    const productosMenu = [
        { nombre: 'Espresso Italiano', descripcion: 'Un espresso intenso y robusto, elaborado con granos de café seleccionados cuidadosamente de las regiones montañosas de Italia.', url: './img/menu_producto_1.jpg' },
        { nombre: 'Latte Caramel Macchiato', descripcion: 'Una deliciosa combinación de espresso suave, leche espumada al vapor y un toque de caramelo, coronado con una generosa capa de espuma de leche.', url: './img/menu_producto_2.jpg' },
        { nombre: 'Cappuccino Clásico', descripcion: 'La combinación perfecta de espresso fuerte y cremosa espuma de leche, adornada con un toque de cacao en polvo.', url: './img/menu_producto_3.jpg' },
        { nombre: 'Café de Filtro Etiopía ', descripcion: 'Una experiencia sensorial única, con notas florales y afrutadas que provienen de los exuberantes campos de café de Etiopía.', url: './img/menu_producto_4.jpg' },
        { nombre: 'Té Matcha Latte', descripcion: 'Una opción reconfortante para los amantes del té, preparado con té matcha de alta calidad, leche vaporizada y un toque de miel.', url: './img/menu_producto_5.jpg' },
        { nombre: 'Croissant de Mantequilla', descripcion: 'Un clásico francés horneado a la perfección, con capas de hojaldre crujiente y un rico relleno de mantequilla.', url: './img/menu_producto_6.jpg' },
        { nombre: 'Tarta de Zanahoria', descripcion: 'Una indulgente y esponjosa tarta con zanahoria, nueces y un suave glaseado de queso crema.', url: './img/menu_producto_7.jpg' }
    ];
    tituloMenu.textContent = 'El menú de hoy';
    tituloMenu.className = 'titulo-menu';
    const menu = document.createElement('div');
    menu.className = 'content-menu';

    productosMenu.forEach((producto) =>{
       menu.appendChild(cargarProducto(producto.nombre, producto.url,producto.descripcion));
    });
    content.appendChild(tituloMenu);
    content.appendChild(menu);
}

function cargarProducto(nombre, url, descripcion)
{   
    
    //creacion elementos para producto
    const nombreProducto = document.createElement('h3');
    const imgProducto = document.createElement('img');
    const descripcionProducto = document.createElement('p');
    const producto = document.createElement('div');
    
    

    //asignacion de clases
    producto.classList.add('product-menu');

    //tratamiento de elementos
    nombreProducto.textContent = nombre;
    imgProducto.src = url;
    imgProducto.alt = 'Producto del menú';
    descripcionProducto.textContent = descripcion;
    
    //asignacion
    producto.appendChild(nombreProducto);
    producto.appendChild(imgProducto);
    producto.appendChild(descripcionProducto);
    
    return producto;

}
export default cargarMenu;