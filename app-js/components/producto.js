const Producto = () =>{
    const $producto = document.createElement('section')
    const Dir = 'resources'
    $producto.classList.add('producto')
    const images = [
        `${Dir}/bottle-one.png`,
        `${Dir}/bottle-two.png`,
        `${Dir}/bottle-three.png`
    ]
    images.forEach(el => {
        const $img = document.createElement('img')
        $img.src = el
        $img.alt = 'bottle'
        $img.classList.add('bottle__image')
        $producto.appendChild($img)
    });
    const $Fragment = document.createDocumentFragment()
    $Fragment.appendChild($producto)
    return $Fragment
}
export default Producto