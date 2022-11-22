
export default function Render(paginaASerRenderizada) {
    window.document.querySelector("#app").innerHTML = paginaASerRenderizada()
}