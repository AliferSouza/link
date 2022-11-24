import { addBanco, router, Select, navigateTo } from "../lib/index.js"
import gerarLinks from "../page/gerarLinks.js"

export default function home() {
    const data = []

    window.salvarLoja = () => {
        const NOME = Select(".input-name").value
        const LOGO = Select("[imglogo]").src
        const COR = Select(".input-color").value
        const dataIndexFinal = data[data.length - 1]

        if (!NOME || !LOGO || !COR || !dataIndexFinal) {
            alert("Todos os campos devem ser preenchidos")

        } else {
            const miniSite = {
                NOME,
                LOGO,
                COR,
                BANNER: dataIndexFinal

            }
            addBanco("dono", miniSite)
        }
    }

    window.addEventListener('DOMContentLoaded', () => {
        const $ = document.querySelector.bind(document);
        const previewImg = $('[imglogo]');
        const fileChooser = $('[data-value-logo]');

        fileChooser.onchange = e => {
            const fileToUpload = e.target.files.item(0);
            const reader = new FileReader();
            reader.onload = e => previewImg.src = e.target.result;
            reader.readAsDataURL(fileToUpload);

        };

    })

    window.pegar = (e) => {
        e.style.opacity = "20%"
        data.push(e.src)

    }

    return `
        <div class="container">
            <span class="title">Crie seu mini MINI-SITE</span>

            <form action="/link" class="form">

                <input type="text" class="input-name input" placeholder="Digite o seu nome" required>

                <div class="container-labels">
                    <label class="label">
                        <span class="botao-selecionar">Logo >></span>
                        <input type="file" data-value-logo class="input-logo" accept="image/png, image/jpeg" multiple>
                        <img imglogo class="img" width="80">
                    </label>

                </div>

                <h4> Escolha o Banner</h4>
                <fieldset class="radio-image escolhaIcone  ">
                    <label for="A">
                        <img src=".././banner/1.jpg" id="facebook" onclick="pegar(this)" alt="facebook" class="escolhaa"
                            height="45px">
                    </label>

                    <label for="B">
                        <img src=".././banner/2.jpg" id="instagram" onclick="pegar(this)" alt="instagram" class="escolhaa"
                            height="45px">
                    </label>

                    <label for="C">
                        <img src=".././banner/3.jpg" id="whatsapp" onclick="pegar(this)" alt="whatsapp" class="escolhaa"
                            height="45px">
                    </label>
                    <label for="D">
                        <img src=".././banner/4.jpg" id="youtube" onclick="pegar(this)" alt="youtube" class="escolhaa"
                            height="45px">
                    </label>
                    <label for="E">
                        <img src=".././banner/5.jpg" id="youtube" onclick="pegar(this)" alt="youtube" class="escolhaa"
                            height="45px">
                    </label>
                    <label for="F">
                        <img src=".././banner/6.jpg" id="youtube" onclick="pegar(this)" alt="youtube" class="escolhaa"
                            height="45px">
                    </label>

                </fieldset>

                <div class="color-input">
                    <span>Escolha a cor do seu MINISITE</span>
                    <input type="color" class="input-color" required>
                </div>

                <button class="button-home" onclick="salvarLoja()">Salvar<button>

            </form>
        </div>

`

}