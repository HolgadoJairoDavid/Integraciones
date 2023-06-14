import { Router } from 'express'
import {
  createOrder, receiveWebhook,
} from './../controllers/payment.controller.js'

const router = Router()

router.post('/create-order', createOrder)

router.get('/success', (req,res) => {
  res.send('Pago exitoso')
})
router.get('/failure', (req,res) => {
  res.send('Pago fallido')
})
router.get('/pending', (req,res) => {
  res.send('Pago pendiente')
})

router.post('/webhook', receiveWebhook)

export default router