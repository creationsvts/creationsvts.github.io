import HeaderOther from "./header_other.js"
const Docs = ()=>{
    return `
        ${HeaderOther()}
        <section class="docs">
            <article class="doc">
                <i class="docs-icon fas fa-file-word"></i>
                <section class="docs__description">
                    <a href="resources/creations-vts.docx" class="docs__dowload" download="creations-vts-word-file">Descargar el Word </a>
                </section>
            </article>

            <article class="doc">
                <i class="docs-icon fas fa-file-excel"></i>
                <section class="docs__description">
                    <a href="resources/creations-vts.xlsx" class="docs__dowload" download="creations-vts-excel-file">Descargar el Excel </a>
                </section>
            </article>
        </section>
    `
}
export default Docs