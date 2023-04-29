require ('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const clientRoutes = require('./routes/clients')

// express app
const app = express()


// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/clients', clientRoutes)

// connect to db
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  // listen for requests
  app.listen(process.env.PORT, () => {
    console.log('connected to mongodb & listening on port', process.env.PORT)
  })
})
.catch((error) => {
  console.log(error)
})


