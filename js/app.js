const urlpath = window. location. pathname;
const ancora =document.getElementById("ancora-home")
if(urlpath == '/index.html'){
    ancora.style.display = 'none';
    ancora.classList.add("ocultar")
}else{
    ancora.classList.remove("ocultar")
}