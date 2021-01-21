require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const port = process.env.PORT

const accountRouter = require('./src/routes/account')
const customerRouter = require('./src/routes/customer')
const adminRouter = require('./src/routes/admin')
const productRouter = require('./src/routes/product')

// import morgan dan CORS
const morgan = require('morgan')
const cors = require('cors')

// Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(cors())
// app.use('/image', express.static('./uploads'))
app.use('/images', express.static('./uploads'))


// Config CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  next()
})


app.use('/product', productRouter)
app.use('/account', accountRouter)
app.use('/customer', customerRouter)
app.use('/admin', adminRouter)

app.get('/', (req, res) => {
  res.send('Welcome to Coffee Right')
})

app.listen(port, () => {
  console.log(`Listen Coffee Right backend on port ${port}`)
})
