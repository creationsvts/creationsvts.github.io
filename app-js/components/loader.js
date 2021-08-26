const Loader = () => {
    const $loader = document.createElement('section')
    const $loaderFramework = document.createElement('div')
    $loader.classList.add('loader')
    $loaderFramework.classList.add('lds-roller')
    for (let i = 0; i <= 8; i++) {
        const $div = document.createElement('div')        
        $loaderFramework.appendChild($div)
    }
    $loader.appendChild($loaderFramework)

    return  $loader
}
export default Loader