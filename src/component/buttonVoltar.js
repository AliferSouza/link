import gerarLinks  from "../page/gerarLinks.js"
import { router, navigateTo } from "../lib/index.js"
export default function buttonVoltar(dadosUrl){

    window.routertMiniSite = () => {       
        navigateTo("/gerarLinks")   
        router({gerarLinks})
    }

    return`
    <button style="color:${dadosUrl.COR}" onclick="routertMiniSite()" class="navegarDeVoltaButton"><</button>
    `
  
}