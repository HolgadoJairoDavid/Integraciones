import express from 'express'
import paymentRoutes from './routes/pyament.routes.js'
import {PORT} from './config.js'
import morgan from 'morgan'
import path from 'path'

const app = express()

app.use(morgan('dev'))

app.use(paymentRoutes)

app.use(express.static(path.resolve('src/public')))

app.listen(PORT,() => {
  console.log(`Port on -> http://localhost:${PORT}`)
})