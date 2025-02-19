require('dotenv').config();
const axios = require('axios');

const COUNTRY_API_BASE_URI = 'https://api.countrylayer.com/v2'

/* getCountriesByCurrency(currency)
 * read the documentation for function overview
 * by jsm
*/
const getCountriesByCurrency = async currency => {
    try {
        const res = await axios.get(`${COUNTRY_API_BASE_URI}/currency/${currency}?access_key=${process.env.COUNTRY_API_KEY}`);
        
        res.data.forEach(country => console.log(country.name));
        
    } catch (err) {
        console.error(err);
    }
}


const CURRENCY_API_BASE_URI = 'https://api.exchangeratesapi.io/v1';
const CURRENCIES = ["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTC","BTN","BWP","BYN","BYR","BZD","CAD","CDF","CHF","CLF","CLP","CNY","CNH","COP","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GGP","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","IMP","INR","IQD","IRR","ISK","JEP","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LVL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRU","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLE","SLL","SOS","SRD","STD","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","UYU","UZS","VES","VND","VUV","WST","XAF","XAG","XAU","XCD","XDR","XOF","XPF","YER","ZAR","ZMK","ZMW","ZWL"]

/* convertCurrency(fromCurrency, toCurrency, amount?)
 * read the documentation for function overview
 * by moOostafas
*/
const convertCurrency = async (fromCurrency, toCurrency, amount=1) => {
    try {
        // validation
        if (!CURRENCIES.includes(fromCurrency) || !CURRENCIES.includes(toCurrency))
            throw new Error("currency/ies is/are not found");

        if (isNaN(amount))
            throw new Error("The amount is not a numeric value");

        // fetch rates to calculate the exchange rate
        const res = await axios.get(`${CURRENCY_API_BASE_URI}/latest?access_key=${process.env.CURRENCY_API_KEY}`);
        
        const rates = res.data.rates;
        
        const exchangeRate = rates[toCurrency] / rates[fromCurrency];

        console.log(`each ${amount} ${fromCurrency} costs ${amount * exchangeRate} ${toCurrency}`);

    } catch (err) {
        console.error(err);
    }
}

// calling test functions
getCountriesByCurrency('EGP');
convertCurrency('EGP', 'BTC');
convertCurrency('EGP', 'BTC', 1000000);
convertCurrency('XXX', 'BTC', 1000000);
convertCurrency('EGP', 'BTC', 'milion');
convertCurrency('XXX', 'US', 2);
