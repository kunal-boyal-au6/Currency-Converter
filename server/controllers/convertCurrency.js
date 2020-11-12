const fs = require('fs');
const csv = require('csv-parser')
const path = require("path");

const currencyConversion = require("../utils/currencyConversion")
const arithmeticOperations = require("../utils/arithmeticOperations")
const emailSender = require('../utils/generateEmail')

module.exports = {
    convertCurrency: async (req, res) => {
        try {
            const csvFilePath = path.join(__dirname, '../', 'uploads', req.file.originalname)
            const csvJs = []
            fs.createReadStream(csvFilePath)
                .pipe(csv())
                .on("data", (row) => {
                    csvJs.push({ value: +Object.values(row) })
                })
                .on('end', async () => {
                    fs.unlinkSync(csvFilePath);
                    const convertedCurrency = await currencyConversion(csvJs)
                    const basicOperations = arithmeticOperations(csvJs)
                    const today = new Date
                    res.json({
                        convertedCurrency: convertedCurrency,
                        message: "Success",
                        minimum: basicOperations.minimum,
                        maximum: basicOperations.maximum,
                        median: basicOperations.median,
                        date: `${today.getDate()}-${today.getMonth()}-${today.getFullYear()}`,
                        time: `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`
                    })
                });
        } catch (error) {
            console.log(error.message)
        }
    },
    sendEmail: async (req, res) => {
        try {
            const email = req.body.email;
            console.log(email)
            await emailSender(email)
            res.json({message:"success"})
        } catch (error) {
            console.log(error)
        }
    }

}