import Header from "./components/header.js"
import EcoBottle from "./components/eco_bottle.js"
const $root = document.getElementById('root')
document.addEventListener('DOMContentLoaded',(e)=>{
    $root.appendChild(Header())
    $root.appendChild(EcoBottle())
})