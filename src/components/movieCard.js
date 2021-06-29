


export const movieCard = (container, {Title = "",Poster="",Type="" })=>{
   const cardContainer=  document.createElement('div')
   cardContainer.classList.add("card")

   cardContainer.innerHTML = `
   <div class="card-header">
       <img src="${Poster}" alt="" >
   </div>
   <div class="card-info">
        <div class="card-title">
            ${Title}
        </div>
        <div class="card-description">
            ${Type}
        </div>
   `
    
   container.appendChild(cardContainer)
}