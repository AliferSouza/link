import { addBanco, router, Select, navigateTo} from "../lib/index.js"
import gerarLinks from "../page/gerarLinks.js"

export default function home() {
    const linkHTML = document.querySelector("head")
    linkHTML.innerHTML += `<link rel="icon" type="image/svg+xml" href=".././img/facebook.png" />`


    window.salvarLoja = () => {
        const Nome = Select(".Name").value
        const Cor = Select(".Cor").value

        const Logo = Select(".Logo").files[0];
        const reader = new FileReader();

        reader.addEventListener("load", () => {

            const LogoImput = reader.result

            if (!Nome || !Logo || !Cor) {
                alert("Valores obrigatorios para todos os campos")
            } else {

                const miniSite = {
                    Nome,
                    LogoImput,
                    Cor
                }

                addBanco("dono", miniSite)      
                navigateTo("#gerarLinks")
                router({ gerarLinks })
            }


        })

        reader.readAsDataURL(Logo);

    }
  

    return `
<div class="container">
    <div class="forms">
        <div class="form login">
            <span class="title">Crie seu mini MINI-SITE</span>

            <form action="#">
                <div class="input-field">
                    <input type="text" class="Name" placeholder="Digite o nome" required>
                </div>

                <div class="input-field">
                    <input type="file" class="Logo" placeholder="" accept="image/png, image/jpeg" multiple required >
                </div>

                <div class="input-field">
                    <input type="text" class="Cor" placeholder="Cor #fff hexadecimal " required>
                </div>

                <div class="input-field button">
                    <input type="button" value="Salvar" onclick="salvarLoja()">
                </div>
            </form>
        </div>
    </div>
</div>

<script>

</script>
`

}