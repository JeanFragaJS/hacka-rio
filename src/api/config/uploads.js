const path = require('path')
const multer = require('multer')
const cloudnary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const { MulterError } = require('multer')


  const multerStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..','uploads'))
  },
  
  filename: function (req, file , cb) {
    const fileName = `${file.fieldname}-${Date.now()}${path.extname(file.originalname.toUpperCase())}`
    cb(null,fileName )
    }
});


const  allowedFormats = ['image/jpeg', 'image/jpg', 'image/png'];

cloudnary.config( {
  cloud_name: "dkqneh6jt",
  api_key: "664391951279565",
  api_secret: "MY-PET-STORAGE",
})

const cloudinaryStorage = new CloudinaryStorage({
  cloudinary: cloudnary,
  params: async (req, file) => {
    if(!allowedFormats.includes(file.mimetype)) {
      const err = new MulterError();
      err.message = 'file of this type not allowed';
      throw err;
    }

    const fileName = `${file.fieldname}-${Date.now()}`


    return {
      folder: "hacka",
      formats: ['jpeg', 'png', 'jpg'],
      public_id: fileName
    }
  }
})

module.exports = {
  cloudinaryStorage,
  multerStorage
}
