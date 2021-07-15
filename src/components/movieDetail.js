
  export const moviDetail = ({Actors, Director,Genre,Plot,Poster,Title,Released,Type,Year}) => { 
 const div = document.createElement("div")
 div.classList.add("movie-datail")
 div.innerHTML = `
 <div class="img-container">
    <img src="${Poster}">
 </div>
<div class="movie-description">
   <h3 class="title">${Title}</h3>
   <p class="actors">${Actors}</p>
   <div class="plot">${Plot}<div>
   <h4>Genre: ${Genre}</h4>
   <h4>${Type}</h4>
   <h4>${Year}</h4>
   <h4>${Director}</h4>
   <h4>${Released}</h4>

</div>


 `
document.getElementById("dynamicContent").appendChild(div)

}