import "./css/style.scss"
import { fetchMovies, getMoviesState, setMoviesState } from "./helpers/movies.js";
import { movieCard } from "./components/movieCard.js"
import  { handlerSearch} from "./helpers/handlerSearch.js"
import {message}from "./components/message.js"
import {Loader} from "./components/Loader.js"
import {moviDetail} from "./components/movieDetail.js"
const dynamicContainer = document.getElementById("dynamicContent")




document.addEventListener("DOMContentLoaded", async () => {
    
    const searchForm = document.getElementById("searchForm")

    dynamicContainer.appendChild(Loader())
// primera llamada a la api peliculas por defectos
    await fetchMovies("https://www.omdbapi.com/?s=Batman&page=1&apikey=a64bb1e4")
    dynamicContainer.innerHTML = ""
    getMoviesState().arrayMovies.map(movie => movieCard(dynamicContainer, movie))
        console.log(getMoviesState())

    // buscar peliculas mediante el buscador
    searchForm.addEventListener("submit", async (e)=>{
        resetMessage(e)

        const formValidation = handlerSearch(e)

       if(formValidation.message.length === 0 ){
           dynamicContainer.appendChild(Loader())
           
           await fetchMovies(`https://www.omdbapi.com/?s=${formValidation.textToSearch}&page=1&apikey=a64bb1e4`)

           if(getMoviesState().messages.length === 0){
            dynamicContainer.innerHTML = ""
            getMoviesState().arrayMovies.map(movie => movieCard(dynamicContainer, movie))
            
           }
           
           if(getMoviesState().messages.length > 0){
               dynamicContainer.innerHTML = ""
               getMoviesState().messages.map(text => message(dynamicContainer, text))
           }
        }
            
        if(formValidation.message.length > 0){
            dynamicContainer.innerHTML =""
            formValidation.message.map(text => message(dynamicContainer, text))
        }
        e.target.reset()
        
        
        
    })


})

const resetMessage = (e) => {
    handlerSearch(e).message = 0
    setMoviesState({message: []})
}

const handlerMenu = () => { 
    const menu = document.querySelector("#menu-colllased")
     console.log(menu.classList.contains("show"))

   if(menu.classList.contains("hide")){
       menu.classList.remove("hide")
       menu.classList.add("show")

   }else{
    menu.classList.remove("show")
    menu.classList.add("hide")
   }

//    if(menu.classList.contains("hide")){
//     menu.classList.remove("hide")
//     menu.classList.add("show")
//     }
   
}


const handlerHash = async() => { 

    console.log("hash has change")
    const hash = location.hash
    const newHash =  hash.toString().replace("#","").replace("/","")
   await fetchMovies(`https://www.omdbapi.com/?i=${newHash}&page=1&apikey=a64bb1e4`)

   dynamicContainer.innerHTML = ""
   getMoviesState().arrayMovies.map(movie => moviDetail(movie))

}

document.getElementById("menu-btn").addEventListener("click", handlerMenu)

window.addEventListener("hashchange", handlerHash)



