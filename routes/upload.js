const uploadController=require('../controller/upload-controller')
const express =require('express')

const router =express.Router()

router.get('/',uploadController.upload)


module.exports = router