const Produccion =()=>{
    const $produccion = document.createElement('section')
    $produccion.id = 'creacion'
    $produccion.classList.add('produccion')
    const $Fragment = document.createDocumentFragment()
    $produccion.innerHTML = `
        <p class="produccion__title">Producción de Eco Bottle</p>
        <img src="resources/image-two.png" alt="https://biopolymers.nurel.com/sites/nurelbiopolymers.com/files/injection_blow_moulding_process.png" class="produccion__image">
        <p class="produccion__description">
            El moldeo por inyección-soplado consiste 
            en la obtención de una preforma del polímero 
            a procesar, similar a un tubo de ensayo, la cual 
            posteriormente se calienta y se introduce en el 
            molde que alberga la geometría deseada, en ocasiones 
            se hace un estiramiento de la preforma inyectada, 
            después se inyecta aire, con lo que se consigue la 
            expansión del material y la forma final de la pieza 
            y por último se procede a su extracción.
        </p>
    `
    $Fragment.appendChild($produccion)
    return $Fragment
}
export default Produccion