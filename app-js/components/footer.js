const Footer =()=>{
    const $footer = document.createElement('footer')

    $footer.innerHTML = `
    <div
     style="
     height: 150px; 
     overflow: hidden;">
     <svg 
        viewBox="0 0 500 150"
        preserveAspectRatio="none" 
        style="height: 100%; 
        width: 100%;">
        <path 
            d="M0.00,49.98 C149.99,150.00 349.20,
            -49.98 500.00,49.98 L500.00,150.00 L0.00,
            150.00 Z" 
            style="
            stroke: none; 
            fill:#419F00;
            ">
        </path>
     </svg>
    </div>

        <form id="form">
            <input type="text" name="name" placeholder="Nombre" id="name">
            <input type="text" name="email" placeholder="Correo" id="email">
            <input type="text" name="message" placeholder="Mensaje" id="message">
            <button type="submit" name="send">Enviar</button>
        </form>
    `

    const $Fragment = document.createDocumentFragment()   
    $Fragment.appendChild($footer)
    return $Fragment
}
export default Footer