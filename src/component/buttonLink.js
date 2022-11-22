export default function Links(links) {
    const dados = links 
 
    let cardLink = "";
    dados.forEach((link) => {
 
        cardLink += `       
        <a href="${link.URL}" class="link" style="" target="_blank">
            <img class="icone"
                src="${link.ICONE}">
            <h1>${link.NOME_ICONE}</h1>
        </a>      
        `;
    })
    return cardLink

}