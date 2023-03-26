const db =  require('./fake-db.js') 
 class Controller {

    static async create (req, res) {
      try {
        const  {name, phone, email, role} = req.body; 
        let images  = req.files.images; 
        let url = `http://localhost:8080/uploads/`
        images = images.map(image =>{return {path: `${url}${image.filename}`}})
        const user = db.users = { name, phone, email, role, images: [...images]}; 
        res.send({user})
      } catch (error) {
        res.send({error})
      }
    }
   index (key) {

   }
}
module.exports = Controller; 