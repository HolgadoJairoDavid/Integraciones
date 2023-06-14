
import axios from 'axios'
import {HOST, PAYPAL_API,PAYPAL_API_CLIENT,PAYPAL_API_SECRET} from './../config.js'

// ! Create order controller
export const createOrder = async (req, res) => {
  
  try {
    
    // Creamos el pedido
    const order = {
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: '105.70',
  
          },
          description: 'Ayuda para pagar HENRY'
        }
      ],
      application_context: {
        brand_name: 'ArepasCamilo',
        landing_page: 'LOGIN',
        user_action: 'PAY_NOW',
        return_url: `${HOST}/capture-order`,
        cancel_url: `${HOST}/cancel-order`,
      }
    }
  
    // ' Basic authentication
    /* const response = await axios.post(`${PAYPAL_API}/v2/checkout/orders`,order,{
      auth: {
        username: PAYPAL_API_CLIENT,
        password: PAYPAL_API_SECRET
      },
    }) */
  
    // ' Token authentication
  
    // Generamos parámetros para enviar como campos de formulario
    const params = new URLSearchParams()
  
    params.append('grant_type', 'client_credentials')
  
    // Generando el token
    const {data: {access_token}} = await axios.post(
      'https://api-m.sandbox.paypal.com/v1/oauth2/token',
      params, 
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        auth: {
          username: PAYPAL_API_CLIENT,
          password: PAYPAL_API_SECRET
        }
      }
    ) 
  
    // Creando pedido con el token generado
    // Devuelve el pedido
    const {data} = await axios.post(`${PAYPAL_API}/v2/checkout/orders`,order,{
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    })
  
    console.log(data)
  
    return res.status(200).json(data)

  } catch (error) {
    return res.status(500).send('Something went wrong')
  }

  
}

// ! Capture Order Controller
export const captureOrder = async (req, res) => {

  const {token} = req.query

  // Capturamos la orden
  // Si el usuario paga, devuelve objeto con la confirmación
  const {data} = await axios.post(
    `${PAYPAL_API}/v2/checkout/orders/${token}/capture`,
    {}, // no enviamos datos por el body
    {
      auth: {
        username: PAYPAL_API_CLIENT,
        password: PAYPAL_API_SECRET
      }
    }
  )

  return res.redirect('/payed.html')
}

// ! Cancel Order Controller
export const cancelOrder = (req, res) => {
  res.redirect('/')
}