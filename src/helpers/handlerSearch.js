export const handlerSearch = (e)=>{
    e.preventDefault()
    
    const message = []

    const data = new FormData(e.target)
    
    if(data.get("searchMovie") === "" ){
        message.push("Debe introducir el nombre de una pelicula")

    }

    return{
        textToSearch: data.get("searchMovie"),
        message: message
    }
}




