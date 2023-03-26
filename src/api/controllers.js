const db =  require('./fake-db.js') 
 class Controller {

    static async create (req, res) {
      try {
        const  {name, phone, email, role} = req.body; 
        let images  = req.files.images; 
         
        images = images.map(image =>{return {path: `${image.fieldname}-${Date.now()} ${image.originalname.toUpperCase()}`}})
        const user = db.users = { name, phone, email, role, images: [...images]}; 
        res.send({user})
      } catch (error) {
        res.send({error})
        //console.log(error)
      }
    }

   index (key) {

   }
}
module.exports = Controller; 