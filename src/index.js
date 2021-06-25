import "./css/style.scss"
import {fetchMovies, getMoviesState} from "./helpers/movies.js";


 fetchMovies("https://www.omdbapi.com/?s=Batman&page=2&apikey=a64bb1e4")

console.log(getMoviesState())



