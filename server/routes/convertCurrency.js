const express = require('express');
const router = express.Router();

const multer = require("../utils/multer")

const { convertCurrency, sendEmail } = require("../controllers/convertCurrency")

router.post("/convertCurrency", multer.single("fileName"), convertCurrency)
router.post("/sendEmail", sendEmail)


module.exports = router