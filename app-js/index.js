import Header from "./components/header.js"
import EcoBottle from "./components/eco_bottle.js"
import Caracteristicas from "./components/caracteristicas.js"
import Produccion from "./components/produccion.js"
import Producto from "./components/producto.js"
import Footer from "./components/footer.js";
import {WindowMolueForm,WindowModuleVectory} from "./components/modales.js"
const $root = document.getElementById('root')
document.addEventListener('DOMContentLoaded',(e)=>{
    $root.appendChild(Header())
    $root.appendChild(EcoBottle())
    $root.appendChild(Caracteristicas())
    $root.appendChild(Produccion())
    $root.appendChild(Producto())
    $root.appendChild(Footer())
    $root.appendChild(WindowMolueForm())
    $root.appendChild(WindowModuleVectory())
})
document.addEventListener('click',(e)=>{
    if(e.target.matches('.menu-icon')){
        document.querySelector('.menu').classList.add('active')
        document.querySelector('.menu-icon').style.display='none'
    }else if(e.target.matches('.fa-times')){
        document.querySelector('.menu').classList.remove('active')
        document.querySelector('.menu-icon').style.display='block'
    }
    if(e.target.matches('.modal__btn')){
        document.querySelector('.modal__form__box').style.display = 'none'
    }
})
document.addEventListener('submit',(e)=>{
    if(e.target.matches('form')){
        e.preventDefault()
        document.querySelector('.modal__form__box').style.display = 'flex'
    }
})