import "./css/style.scss"
import { fetchMovies, getMoviesState, setMoviesState } from "./helpers/movies.js";
import { movieCard } from "./components/movieCard.js"
import  { handlerSearch} from "./helpers/handlerSearch.js"
import {message}from "./components/message.js"
import {Loader} from "./components/Loader.js"




document.addEventListener("DOMContentLoaded", async () => {
    const dynamicContainer = document.getElementById("dynamicContent")
    const searchForm = document.getElementById("searchForm")

    dynamicContainer.appendChild(Loader())

    await fetchMovies("https://www.omdbapi.com/?s=Batman&page=1&apikey=a64bb1e4")
    dynamicContainer.innerHTML = ""
    getMoviesState().arrayMovies.map(movie => movieCard(dynamicContainer, movie))

    searchForm.addEventListener("submit", async (e)=>{
        

        resetMessage(e)

        const formValidation = handlerSearch(e)

       if(formValidation.message.length === 0 ){
           dynamicContainer.appendChild(Loader())
           
           await fetchMovies(`https://www.omdbapi.com/?s=${formValidation.textToSearch}&page=1&apikey=a64bb1e4`)

           if(getMoviesState().messages.length === 0){
            dynamicContainer.innerHTML = ""
            getMoviesState().arrayMovies.map(movie => movieCard(dynamicContainer, movie))
            console.log(formValidation.message, "55")
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
    console.log("aqi") 
    handlerSearch(e).message = 0
    setMoviesState({message: []})
}







