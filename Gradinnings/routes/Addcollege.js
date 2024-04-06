const express = require('express')
const router = express.Router();

const Scrappeddata = require('../controller/College')

router.post('/add',Scrappeddata)


module.exports=router;