const moviesState = {
    arrayMovies:[]
}


export const getMoviesState = () => moviesState;

export const setMoviesState = ({arrayMovies = getMoviesState().arrayMovies})=> {
    moviesState.arrayMovies = arrayMovies
}


export const fetchMovies = async (url)=>{
    const response = await fetch(url)
    const data = await response.json()
    setMoviesState({arrayMovies: data.Search[0]})
}




