const fetch = require('node-fetch');

module.exports = async  (amounts) => {
    const currencyConversionRate = await fetch('https://api.exchangeratesapi.io/latest?base=USD&symbols=INR')
    const currencyConversionRateJson = await currencyConversionRate.json()
    for (let i = 0; i < amounts.length; i++) {
        amounts[i].convertedValue = (amounts[i].value / currencyConversionRateJson.rates.INR).toFixed(4)
    }
    return amounts
}
