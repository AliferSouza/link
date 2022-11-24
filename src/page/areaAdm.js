import buttonVoltar from "../component/buttonVoltar.js"

export default function areaAdm(){
    const b = JSON.parse(localStorage.getItem("link"))
    const a = JSON.parse(localStorage.getItem("dono"))
    let admlink = `${buttonVoltar(a)}<h1> Delete os links</h1>`

    window.deletelink = (e) =>{
        b.splice(e, 1)  
        localStorage.setItem("link", JSON.stringify(b))
        document.location.reload(true)
    }

 
    b.forEach((element, key)  => {

        console.log(key)
        admlink += `
          
            <div  class="container-admLink">
                <button onclick="deletelink(this)" id="${key}" class="admLink" style="background:${element.COLOR_BUTTONS}; color: #ffffff">${element.NOME_BOTAO}</button>
                <h1  class="h1adm">&#x2715</h1>
           </div>
            `
        
    });

    return admlink
  
}