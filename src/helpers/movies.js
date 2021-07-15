const moviesState = {
    arrayMovies:[],
    messages:[]
} 
    let arrayMoviesDb = []




// export const getMoviesState = () => arrayMoviesDb;
export const getMoviesState = () => moviesState;

export const setMoviesState = ({arrayMovies = getMoviesState().arrayMovies,
                             message = []})=> {
                               
    moviesState.arrayMovies.length = 0
    moviesState.arrayMovies = [...arrayMovies]

    if(message.length !== 0 ){
      moviesState.messages.push(message)  
    }

    if(message.length === 0)moviesState.messages.length = 0
    
    //TODO: continuar refactor setMoviesState
    
}


export const fetchMovies = async (url)=>{
    try {
        const response = await fetch(url)
        const data = await response.json()
     
        if(data.Response === "True"){
           setMoviesState( {arrayMovies: data.Search? data.Search: [data] }) 
        }else{
            console.log("no encotro")
           setMoviesState({message: "no se encontro la pelicula"})
        }
        
    } catch (error) {

        setMoviesState({message: error})
        console.log(error)
    }
}

















