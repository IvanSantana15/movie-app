

const movieCard = (container, {})=>{
   const cardContainer=  document.createElement('div')
   cardContainer.classList.add("card")
   cardContainer.innerHTML = `
   <div class="card-header">
       <img src="" alt="" >
   </div>
   <div class="card-info">
        <div class="card-title">
            The avengers
        </div>
        <div class="card-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </div>
   `

   container.appendChild(cardContainer)
}