
import buttonVoltar from "../component/buttonVoltar.js"
import buttonLink from"../component/buttonLink.js"

import compartilhar from"../component/compartilhar.js"


export default function miniSite() {
const a = JSON.parse(localStorage.getItem("dono"))
const b = JSON.parse(localStorage.getItem("link"))

const linkHTML = document.querySelector("head")
const title = document.querySelector("title")
linkHTML.innerHTML += `<link rel="icon" type="image/svg+xml" href="${a.LogoImput}" />`
title.innerHTML = `${a.Nome}`




    return `

    
    <div class="componete-link">  
   
    <div class="container-link">
 
    ${localStorage.hasOwnProperty("dono") ? buttonVoltar() : ''}         
    <img src="${a.LogoImput}" class="logo"  loading=lazy  class="mini-site-logo">          
    </div> 
     <span>${a.Nome}</span>

    <h1 style="color:" > </h1>
    <div class="container_Links">
    <h2>Seja Bem-vindo! </h2>
    <h2>Visite minhas paginas </h2>
       
   ${buttonLink(b)}
      
    <br>    
    <h1  style=" color:"> </h1>
    </a>
    </div>
    <div>
`;




}