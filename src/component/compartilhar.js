import { gerarQueryString } from "../lib/index.js"

export default function compartilhar(){

    window.addEventListener("DOMContentLoaded", () =>{
        const textArea = document.querySelector("textArea") 
        
        const a = JSON.parse(localStorage.getItem("dono"))
        const b = JSON.parse(localStorage.getItem("link"))
        const valorJutons = {a, b}
        const data = gerarQueryString(valorJutons)

        console.log("alifer")

        textArea.innerHTML = data

    })

    window.compartilhar = () => {     
       
console.log("alifer")
        

     
    }

    return`
    <textarea class="textArea">Texto para copiar</textarea>
    <button onclick="routertMiniSite()" class="compartilhar()">compartilhar</button>
    `
  
}