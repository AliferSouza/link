
import buttonVoltar from "../component/buttonVoltar.js"
import buttonLink from "../component/buttonLink.js"
import compartilhar from "../component/compartilhar.js"
import { pegarUrlData } from "../lib/index.js"


export default function miniSite() {
   const data = pegarUrlData()

   console.log(data.a.LOGO)


  const linkHTML = document.querySelector("head")
  linkHTML.innerHTML += `<link rel="icon" type="image/svg+xml" href="${data.a.LOGO}" />`





  return `
    <div class="componete-minisite" style="background:${data.a.COR}">

  <div class="container-minisite-header" style="background-image: url(${data.a.BANNER});   background-repeat: no-repeat;">
    <div class="componete-link">
      ${compartilhar(data.a)}
      ${localStorage.hasOwnProperty("dono") ? `${buttonVoltar(data.a)}` : ''}
    </div>

    <img style="border: 4px solid ${data.a.COR}" src="${data.a.LOGO}" class="logo logomove" loading=lazy class="mini-site-logo">
    <span  class="minisite-nome logomove">${data.a.NOME}</span>
  </div>

  <div class="container_Links">
    <h2>Seja Bem-vindo! </h2>
    <h2>Visite minhas paginas </h2>

      ${buttonLink(data.b)}
      
  

    </br>  
    <div>
      <a class="link-minisite" href="https://alifersouza.github.io/links" target="_blank">Crie o seu mini site</a>
      <a class="link-minisite" href="https://bitly.com/" target="_blank"> Ecurtador de link</a>
    </div>

  </div>

</div>
</div>
`;

}