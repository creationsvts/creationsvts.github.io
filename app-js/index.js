import Header from "./components/header.js"
const $root = document.getElementById('root')
document.addEventListener('DOMContentLoaded',(e)=>{
    $root.appendChild(Header())
})