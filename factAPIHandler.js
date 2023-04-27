class factAPIHandler {
   apisrc = 'https://cat-fact.herokuapp.com/facts/random'

   constructor(){
      this.newFact()
   }

   newFact(){
      axios.get(this.apisrc)
      .then((content) => {
      const displayFact = document.getElementById('fact')
      const displayType = document.getElementById('type')
      const displayDate = document.getElementById('date')
      const displayUser = document.getElementById('user')

      displayFact.innerHTML = content.data.text
      displayType.innerHTML = content.data.type
      displayDate.innerHTML = content.data.updatedAt
      displayUser.innerHTML = content.data.user
      
      }).catch((error)=>{
         console.error(error)
      })
   }
}


export default factAPIHandler
