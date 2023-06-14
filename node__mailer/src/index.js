const express = require('express')
const appRoute = require('./routes/index')

const app = express()

const PORT = 4001

// para que entienda los datos del formularios
app.use(express.urlencoded({extended: false}))

app.use(express.json())

// Rutas
app.use('/api', appRoute)

app.listen(PORT,() => {
  console.log(`Server on http://localhost:${PORT}`)
})