import express from 'express'
import morgan from 'morgan'
import {Server as SocketServer} from 'socket.io'
import http from 'http'
import cors from 'cors'
import { PORT } from './config.js'

const app = express()
const httpServer = http.createServer(app)
const io = new SocketServer(httpServer, {
  cors: {
    origin: '*'
  }
})

app.use(cors())
app.use(morgan('dev'))

io.on('connection', (socket) => {
  socket.on('message',(message) => {
    socket.broadcast.emit('message', {
      body: message,
      from: socket.id
    })
  })
})

httpServer.listen(PORT)
