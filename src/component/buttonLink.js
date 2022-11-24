export default function Links(links) {
    const dados = links 

    window.deletar = () =>{
        console.log("Alifer")
    }


 
    let cardLink = "";
    dados.forEach((link) => {
   
        cardLink += `  
      
        <a href="${link.URL}" class="link" style="background:${link.COLOR_BUTTONS}" target="_blank">   
        <img class="icone-link-site"src="${link.ICONE}">        
            <h1>${link.NOME_BOTAO  ? link.NOME_BOTAO : link.NOME_ICONE}</h1>   
      </a>      
     
          
     
        `;
    })
    return cardLink

}