const Producto = () =>{
    const $producto = document.createElement('section')
    $producto.id = 'producto'
    const Dir = 'resources'
    const $titleProducto = document.createElement('p')
    const $imagesBox =document.createElement('article')
    $producto.classList.add('producto')
    const images = [
        `${Dir}/bottle-one.png`,
        `${Dir}/bottle-two.png`,
        `${Dir}/bottle-three.png`
    ]
    $titleProducto.textContent='Producto'
    $titleProducto.classList.add('producto__title')
    $producto.appendChild($titleProducto)

    images.forEach(el => {
        const $img = document.createElement('img')
        $img.src = el
        $img.alt = 'bottle'
        $img.classList.add('bottle__image')
        $imagesBox.appendChild($img)
        $producto.appendChild($imagesBox)
    });
    const $Fragment = document.createDocumentFragment()
    $Fragment.appendChild($producto)
    return $Fragment
}
export default Producto