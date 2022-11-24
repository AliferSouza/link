import { compartilharURL } from "../lib/index.js"


export default function compartilhar(props){
    compartilharURL("LINK", "Compartilhe o link", window.location.href )
    return`

    <button style="" onclick="compartilhar()" class="compartilhar"><h4 class="animacao">compartilhar➤<h4></button>
 
    `
  
}