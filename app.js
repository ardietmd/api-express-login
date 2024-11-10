const express = require('express')
const app = express()

const categoriesEndpoint = require('./routes/categories')
const loginEndpoint = require('./routes/login')
const morgan = require('morgan')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()

//middleware
app.use(express.json())
app.use((req, res, next) => {
    req.requestTime = new Date().toString()
    next()
    
})
app.use(cors())

app.use(morgan("dev"))

app.use('/api/v1/categories', categoriesEndpoint)
app.use('api/v1/login', loginEndpoint)
app.use('/', categoriesEndpoint)

const port = process.env.PORT
app.listen(port, ()=> {
    console.log(`server running ${port}`);
    
})