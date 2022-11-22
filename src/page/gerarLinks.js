import { apiGerar } from "../apiQueryString/api.js"
import addBanco from "../lib/src/addBancoMiasIntens.js"
import minisite from "../page/minisite.js"
import { Select, navigateTo, router } from "../lib/index.js"
import select from "../lib/src/Select.js"


export default function gerarLinks() {
    const data = []

    const dados = apiGerar("dono", "link")



    window.pegar = (id, src) => {
        const url = Select(".url")
        const valores = {
            URL: url.value,
            ICONE: src,
            NOME_ICONE: id
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

            select(".buttonSite").innerHTML = `<input type="button" value="miniSite" onclick="link()">`

            while (data.length) {
                data.pop();
            }

        }

    }


    window.link = () => {
        navigateTo("#minisite")
        router({ minisite })

    }







    return `
    <div class="container">
    <div class="forms">

        <div class="form login">

            <span class="title">Crie seus links</span>

            <form action="#">

                <div class="input-field">
                    <input type="text" class="url" placeholder="" required>
                </div>

                <div class="input-field" >

                    <fieldset class="radio-image escolhaFoto">
                        <label for="M">
                            
                            <img src="./img/facebook.png"id="facebook" onclick="pegar(id, src)" name="facebook" class="escolha" alt="facebook"
                                height="45px">
                        </label>

                        <label for="F">
                           
                            <img src="../img/instagram.png" id="instagram" onclick="pegar(id, src)"  class="escolha" alt="instagram"
                                height="45px">
                        </label>

                        <label for="A">
                           
                            <img src="../img/whatsapp.png" id="whatsapp" onclick="pegar(id, src)"  class="escolha" alt="whatsapp"
                                height="45px">
                        </label>
                        <label for="B">
                            
                            <img src="../img/youtube.png" id="youtube" onclick="pegar(id, src)" class="escolha" alt="youtube" height="45px">
                        </label>
                    </fieldset>

                </div>

                <div class="input-field button">
                    <input type="button" value="Salvar" onclick="salvarLink()">
                </div>
                <br />
                <div class="buttonSite">
                ${localStorage.hasOwnProperty("link") ?  `<input type="button" value="miniSite" onclick="link()">`   : ''}      
                <div>   
               </form>

        </div>
    </div>
</div>
  
    `

} 
