export const WindowMolueForm = ()=>{
    const $modalForm =document.createElement('section')
    $modalForm.classList.add('modal__form__box')
    $modalForm.innerHTML = `
        <article class="modal__form">
            <p class="modal__form_">
                Este formulario de contacto solo es de prueba 
            </p>
            <button class="modal__btn">OK</button>
        </article>
    `
    const $Fragmento = document.createDocumentFragment()
    $Fragmento.appendChild($modalForm)
    return $Fragmento
}
export const WindowModuleVectory = (name)=>{
    const $permitsVectoryBox = document.createElement('section')
    const rules = [
        `Por favor ingresar a <a href="https://www.vectary.com/login/">Vectary.com</a>`,
        `Correo creations.root26@gmail.com`,
        `Contraseña IamAdmin$24`,
        `Mientras permanezcas en esta página manten session iniciada en vectary y podras ver el prototipo 3D`,
        `<i class="fas fa-exclamation-triangle warning-icon"></i> por favor no modifiques nada en vectory`
    ]
    const $menuRules = document.createElement('ul')
    const $rulesImageBox = document.createElement('article')
    const $rulesImageBoxTitle = document.createElement('p')
    const $rulesImageImg = document.createElement('img')
    const $menuRulesBox = document.createElement('section')
    const $iconClosed = document.createElement('i')
    let ruleText = name ? name : ' '

    rules.forEach(el => {
        const $menuRulesItem = document.createElement('li')
        const $menuRulesText = document.createElement('p')
        $menuRulesText.innerHTML = el
        $menuRulesItem.appendChild($menuRulesText)
        $menuRules.appendChild($menuRulesItem)
        $menuRulesItem.classList.add('menu__rules__item')
    });

    $rulesImageBoxTitle.innerHTML = `Hola ${ruleText} para poder ver el Grafico 3D sigue estas intrucciones <i class="fas fa-arrow-right arrow-rules"></i>`
    $rulesImageImg.src = 'resources/pet-and-bottle.svg'
    $permitsVectoryBox.classList.add('rules__box')
    $menuRules.classList.add('menu__rules')
    $rulesImageImg.classList.add('rules__image')
    $rulesImageBoxTitle.classList.add('rules__title')
    $rulesImageBox.classList.add('rules__description')
    $menuRulesBox.classList.add('menu__rules__box')
    $iconClosed.classList.add('fas','fa-times','close-rules')

    $permitsVectoryBox.appendChild($iconClosed)
    $rulesImageBox.appendChild($rulesImageBoxTitle)
    $rulesImageBox.appendChild($rulesImageImg)
    $permitsVectoryBox.appendChild($rulesImageBox)
    $menuRulesBox.appendChild($menuRules)
    $permitsVectoryBox.appendChild($menuRulesBox)
    const $Fragment = document.createDocumentFragment()
    $Fragment.appendChild($permitsVectoryBox)
    return $Fragment
}