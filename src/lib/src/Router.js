
import navigateTo from"./navigateTo.js"
import Render from "./Render.js"

export default function Router(Paginas){  
       const pathname = window.document.location.pathname.replace(/^.*\//g, '')     
      // const hash = window.location.hash.replace(/([?][A-z]*)([=]).*/, "")
      // const filterHash = hash.replace("#", "")

       const valor =  Object.keys(Paginas)[0] 
       Paginas[pathname] ? Render(Paginas[pathname]) : Render(Paginas[valor])   

    
       window.addEventListener("popstate", Router)
       
       window.document.addEventListener("DOMContentLoaded", () => {

           document.body.addEventListener("click", e => {

               if(e.target.matches("[ali-link]")){
                 e.preventDefault()
                 navigateTo(e.target.href)
                }
           })
       })

          
    

    
 }


