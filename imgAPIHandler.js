class imgAPIHandler {
   apisrc = 'https://api.thecatapi.com/v1/images/search'

   constructor(){
      this.newImg('cat-img-1')
      this.newImg('cat-img-2')
   }

   newImg(idElement){
      axios.get(this.apisrc)
      .then((content) => {
      const displayImg1 = document.getElementById(idElement)

      displayImg1.src = content.data[0].url

      }).catch((error)=>{
         console.error(error)
      })
   }
}


export default imgAPIHandler
