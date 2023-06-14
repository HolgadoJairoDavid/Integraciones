import express from 'express'
import morgan from 'morgan'
import { PORT } from './config.js'
import paymentRoutes from './routes/payment.routes.js'
import path from 'path'

const app = express()

app.use(morgan('dev'))

app.use(paymentRoutes)

app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT,() => {
  console.log(`Server on: http://localhost:${PORT}`)
})