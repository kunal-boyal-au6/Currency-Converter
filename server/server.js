const express = require('express');
const cors = require('cors')


const convertCurrencyRoutes = require('./routes/convertCurrency')

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(convertCurrencyRoutes)

app.get('/', (req, res) => {
    return res.json({ message: "Hello" })
})

app.listen(5000, () => {
    console.log("Server Connected on port 5000")
})