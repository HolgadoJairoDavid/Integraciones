import {config} from 'dotenv'

config() // Crea las variables globales con el .dotenv

export const PORT = 4001

export const PAYPAL_API_CLIENT = process.env.PAYPAL_API_CLIENT

export const PAYPAL_API_SECRET = process.env.PAYPAL_API_SECRET

export const PAYPAL_API = process.env.PAYPAL_API

export const HOST = process.env.HOST