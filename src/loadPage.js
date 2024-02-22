import cargarHome from "./home";
import cargarMenu from "./menu";
import cargarContact from "./contact";

function setButtons()
{   
    const buttonHome = document.querySelector('#home');
    buttonHome.addEventListener('click', (e) =>{
        cargarHome();
    });

    const buttonMenu = document.querySelector('#menu');
    buttonMenu.addEventListener('click', (e) =>{
        cargarMenu();
    });

    const buttonContact = document.querySelector('#contact');
    buttonContact.addEventListener('click', (e) =>{
        cargarContact();
    });
}

function inicializarWebPage()
{
    cargarHome();
    setButtons();
}

export default inicializarWebPage;