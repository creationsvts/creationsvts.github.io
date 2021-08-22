const Caracteristicas =()=>{
    const $Fragment = document.createDocumentFragment()
    const $caracteristicas = document.createElement('section')
    $caracteristicas.id = 'caracteristicas'
    const $title = document.createElement('h3')
    $caracteristicas.classList.add('caracteristicas')
    const caracteristicasList = [
        {
            icon:`fa-cog`,
            text:'Trabajabilidad'
        },
        {
            icon:`fa-bong`,
            text:'Resistencia termina y quimica'
        },
        {
            icon:`fa-recycle`,
            text:'100% Biodegradables'
        }        
    ]
    $title.textContent = 'Caracteristicas de PBS'
    $title.classList.add('caratersiticas__title')
    $caracteristicas.appendChild($title)
    caracteristicasList.forEach(el => {
        const $caracteristica = document.createElement('article')

        const $caracteristicaText = document.createElement('p')
        $caracteristicaText.textContent = el.text
        $caracteristicaText.classList.add('caracteristica__text')
        const $caracteristicaIcon = document.createElement('i')
        $caracteristicaIcon.classList.add('caracteristica__icon','fas',el.icon)

        $caracteristica.appendChild($caracteristicaIcon)
        $caracteristica.appendChild($caracteristicaText)
        $caracteristicas.appendChild($caracteristica)
    });

    $Fragment.appendChild($caracteristicas)
    return $Fragment
}
export default Caracteristicas