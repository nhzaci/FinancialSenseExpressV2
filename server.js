const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv/config')

//Import routes
const userRoute = require('./routes/api/users')

// Use Middleware
app.use(express.json())

//Connect to MongoDB
mongoose.connect(process.env.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log(`Connected to MongoDB Atlas, status: ${mongoose.connection.readyState}`)
})

// Log requests
app.use((req, res, next) => {
  console.log(`${req.method} @ ${req.baseUrl}${req.url}`)
  next()
})

//Bring in routes
app.use('/api/users', userRoute)

//Safety net
app.use((req, res) => {
    console.log(`RESP 404 ${req.baseUrl}${req.url} is not recognised`);
    res.status(404).send(`Sorry, ${req.baseUrl}${req.url} is not recognised`);
})

//Error handling mw
app.use((err, req, res) => {
    console.log('RESP 500 ' + err);
    res.status(500).json({ message: err.message });
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Listening on port @ ${PORT}`))