const cloudinaryPKG = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinaryPKG.config({
    cloud_name: "nemuidb",
    api_key: process.env.CLOUDAPI,
    api_secret: process.env.CLOUDSECRET
  });

  var storageOBJ = new CloudinaryStorage({
    cloudinary: cloudinaryPKG,
    params: {
      folder: 'profileImages',
      format: async (req, file) =>'png', // supports promises as well
      public_id: (req, file) => file.originalname,
    },
  });
  
  const uploadCloud = multer({ storage: storageOBJ });
  
  module.exports = uploadCloud;