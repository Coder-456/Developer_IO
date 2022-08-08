const express = require('express')
const bodyParser = require('body-parser')

const routes = require('./routes/api')
const dotenv = require('dotenv')
const cors = require('cors')


dotenv.config()

const app = express()

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)
app.use(
    cors({
      origin: `${process.env.CLIENT_URL}`,
    })
)

app.listen(5000, () => { 
    console.log("Server started in port 5000") 
})

app.use(bodyParser.json())
app.use('/api', routes)





