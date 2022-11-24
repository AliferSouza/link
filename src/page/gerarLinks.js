import { apiGerar } from "../apiQueryString/api.js"
import addBanco from "../lib/src/addBancoMiasIntens.js"
import minisite from "../page/minisite.js"
import areaadm from "../page/areaAdm.js"
import { Select, navigateTo, router } from "../lib/index.js"
import select from "../lib/src/Select.js"
const a = JSON.parse(localStorage.getItem("dono"))



export default function gerarLinks() {
    const data = []    

    window.pegar = (id, src) => {
        
        const url = Select(".url")
        const nomeBotao = Select(".botaonome")
        const colorButtons = Select(".input-color").value
        const valores = {
            URL: url.value,
            NOME_BOTAO: nomeBotao.value,
            ICONE: src,
            NOME_ICONE: id,
            COLOR_BUTTONS: colorButtons
        }

        data.push(valores)

    }

    window.salvarLink = () => {
        const url = Select(".url").value   
        const dataIndexFinal = data[data.length - 1]
     
        if (!url) {
           alert("preencha o campo URL!")
        } else {
       
            addBanco("link", dataIndexFinal)
            Select("form").reset()
            navigateTo("/gerarLinks")
            router({ gerarLinks })

            select(".buttonSite").innerHTML = `<input type="button" value="miniSite" onclick="link()">`

            while (data.length) {
                data.pop();
            }

        }

    }

    window.editar = () => {  
        navigateTo("/areaadm")
        router({ areaadm })

    }



    window.link = () => {
        const dados = apiGerar("dono", "link")
        navigateTo("/minisite" + dados)
        router({ minisite })

    }







    return `
    <div class="container_gerarlink">
    <div class="container" style="background:${a.COR}">
     <span class="title-link">Crie seus links</span>

     <form action="#" class="form-link">

         <input type="text" class="url input-link" placeholder="Digite sua URL de perfil" required>
         <input type="text" class="botaonome input-link" placeholder="Nome do botão" required>

      

             <fieldset class="radio-image escolhaIcone">
                 <label for="M">
                     <img src=".././img/facebook.png" id="facebook" onclick="pegar(id, src)" name="facebook"
                         class="escolha" alt="facebook" height="45px">
                 </label>

                 <label for="F">
                     <img src=".././img/instagram.png" id="instagram" onclick="pegar(id, src)" class="escolha"
                     class="escolha" alt="instagram" height="45px">
                 </label>

                 <label for="A">
                     <img src=".././img/whatsapp.png" id="whatsapp" onclick="pegar(id, src)" class="escolha"
                     class="escolha" alt="whatsapp" height="45px">
                 </label>
                 <label for="B">
                     <img src="../img/youtube.png" id="youtube" onclick="pegar(id, src)" class="escolha" alt="youtube"
                     class="escolha" height="45px">
                 </label>                 
             </fieldset>
             <div class="color-input">
                <span>Escolha a cor dos botões</span>
                <input type="color" class="input-color" required>
             </div>


      

         <button class="button-link" style=" background:${a.COR}" onclick="salvarLink()">Salvar</button>

         ${localStorage.hasOwnProperty("link") ?
          `
          <div class="container-button-link-minisite">
                <button class="button-link-minisite"  style=" background:${a.COR}"  onclick="link()"> MiniSite </button>
                <button class="button-link-minisite"  style=" background:${a.COR}"  onclick="editar()">Enditar site</button>
                <button class="button-link-minisite"  style=" background:${a.COR}"  onclick="editar()">Enditar links</button>
         </div>
         `
           : `</br></br></br>`}
     
     </form>

 </div>
</div>


    `

} 
