
import navigateTo from"./navigateTo.js"
import Render from "./Render.js"

export default function Router(Paginas){  
       const pathname = window.document.location.pathname.replace(/^.*\//g, '')     
       const hash = window.location.hash.replace(/([?][a-zA-Z0-9]*)/, "")
       const filterHash = hash.replace("#", "")
    

       Paginas[filterHash] ? Render(Paginas[filterHash]) : Render(Paginas["home"])   

    
       
       window.document.addEventListener("DOMContentLoaded", () => {

           document.body.addEventListener("click", e => {

               if(e.target.matches("[ali-link]")){
                 e.preventDefault()
                 navigateTo(e.target.href)
                }
           })
       })

          
    

    
 }


