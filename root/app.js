const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const cors = require('cors')

mongoose.connect(process.env.DB_URI)

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', () => {
  console.log('Database connected')
})

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(methodOverride('_method'))

const apiRouter = require(path.resolve(__dirname, './routes/api.js'))
app.use('/api/', apiRouter)

if (
  process.env.NODE_ENV === 'production' ||
  process.env.NODE_ENV === 'staging'
) {
  app.use(express.static('react-app/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/react-app/build/index.html'))
  })
}

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log('Server connected!')
})
