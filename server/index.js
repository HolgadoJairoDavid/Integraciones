// ' Módulos externos

import express from 'express'
import morgan from 'morgan'
import {Server as SocketServer} from 'socket.io'
import http from 'http'
import cors from 'cors'

// ' Módulos propios

import {PORT} from './config.js'

// ' Configuración del server

const app = express()
const httpServer = http.createServer(app)
const io = new SocketServer(httpServer, {
  cors: {
    origin: '*'
  }
})

// ' Middlewares

app.use(cors())
app.use(morgan('dev'))

// ' io

io.on('connection',(socket) => {
  // console.log(socket.id)
  
  socket.on('message', (message) => { // recibe mensaje del front
    socket.broadcast.emit('message', { // envia mensaje a todos los clientes
      body: message,
      from: socket.id
    }) 
  })

})

httpServer.listen(PORT)

console.log(`Server on http://localhost:${PORT}`)

// ! Comentarios

// En este caso, el servidor creado por express, se pasa como parámetro de un servidor creado con http, porque funciona como configuración para el servidor.
// Recordar que estamos usando módulos para importar y exportar. Cuando los módulos que importemos sean propios, creados por nosotros, debemos ponerles, OBLIGATORIAMENTE, su respectiva extensión de archivo.