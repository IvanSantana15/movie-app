export const message = (container, message) => { 
 const div = document.createElement("div")
 div.classList.add('message')
div.innerHTML = `
<span>${message}</span>
`
container.appendChild(div)

}