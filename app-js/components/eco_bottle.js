const EcoBottle = ()=>{
    const $ecoBottle = document.createElement('section')
    const $ecoBottleImage = document.createElement('img')
    const $ecoBottleDescription = document.createElement('article')
    const $Fragment = document.createDocumentFragment()
    
    $ecoBottleDescription.classList.add('eco-bottle__description__box')
    $ecoBottle.classList.add('eco-bottle')
    $ecoBottleImage.classList.add('eco-bottle__image')
    
    $ecoBottleImage.src = 'resources/image-one.jpg'
    $ecoBottleDescription.innerHTML = `
    <h1 class="eco-bottle__title">Eco Bottle</h1>
    <p class="eco-bottle__description">
        Son botellas 100% biodegradables
        gracias el polimero Succinato de polibutileno(PBS)
        un material muy prometedor para la produccion 
        y comercializacion de productos compostables.
    </p>
    `
    $ecoBottle.appendChild($ecoBottleDescription)
    $ecoBottle.appendChild($ecoBottleImage)
    $Fragment.appendChild($ecoBottle)
    return $Fragment
}
export default EcoBottle