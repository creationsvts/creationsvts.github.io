const Header =()=>{
    const $Fragment = document.createDocumentFragment()
    const $header = document.createElement('header')
    const $nav =document.createElement('nav')
    const $logo = document.createElement('section')
    const $3DBottle = document.createElement('section')
    const $menuIcon = document.createElement('i')
    $menuIcon.classList.add('fas','fa-bars','menu-icon')
    const $items = [
        'Inicio',
        'Creacion',
        'Caracteristicas',
        'Producto'
    ]
    const $ul = document.createElement('ul')
    $ul.classList.add('menu')
    const $close = document.createElement('i')
    $close.classList.add('fas','fa-times')
    $ul.appendChild($close)
    $items.forEach(el =>{
        let $li = document.createElement('li')
        let $a = document.createElement('a')
        $a.href =`#${el.toLocaleLowerCase()}`
        $li.classList.add('menu__item')
        $a.classList.add('menu__link')
        $a.textContent = el
        $li.appendChild($a)
        $ul.appendChild($li)
    })
    $logo.classList.add('logo__box')
    $logo.innerHTML = `
        <img src="resources/zorro-white.png" alt="Logo wolf color white" class="image__logo">
        <h2 class="title__logo">Creations VTS</h2>
    `
    $3DBottle.innerHTML = `
        <iframe 
            id="b33b43d1-70c3-4fa8-b88a-383240e44711"
            src="https://www.vectary.com/viewer/v1/?model=b33b43d1-70c3-4fa8-b88a-383240e44711&env=studio3" 
            frameborder="0" 
            width="100%"
            height="480"
            style="background:#4EA93B;border-radius:0 0 0 80px; "
        ></iframe>

    `
    $3DBottle.classList.add('design-3d')
    $nav.appendChild($menuIcon)
    $nav.appendChild($ul)

    $header.appendChild($nav)
    $header.appendChild($logo)
    $header.appendChild($3DBottle)
    $Fragment.appendChild($header)
    return $Fragment
}
export default Header