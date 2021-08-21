import Header from "./components/header.js"
import EcoBottle from "./components/eco_bottle.js"
import Caracteristicas from "./components/caracteristicas.js"
const $root = document.getElementById('root')
document.addEventListener('DOMContentLoaded',(e)=>{
    $root.appendChild(Header())
    $root.appendChild(EcoBottle())
    $root.appendChild(Caracteristicas())
})