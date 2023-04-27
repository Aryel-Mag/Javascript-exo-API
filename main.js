import factAPIHandler from "./factAPIHandler.js"
import imgAPIHandler from "./imgAPIHandler.js"


const factAPI = new factAPIHandler()
const imgAPI = new imgAPIHandler()



const moreBtn = document.getElementById('moreBtn')

moreBtn.addEventListener("click", () => factAPI.newFact()) 
moreBtn.addEventListener("click", () => imgAPI.newImg('cat-img-1')) 
moreBtn.addEventListener("click", () => imgAPI.newImg('cat-img-2')) 