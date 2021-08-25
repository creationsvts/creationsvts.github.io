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
export const WindowModuleVectory = ()=>{
    console.log('hello wordl')
}