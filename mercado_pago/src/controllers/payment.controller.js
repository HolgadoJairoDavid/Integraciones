import mercadopago from 'mercadopago'

export const createOrder = async (req, res) => {
  
  // Configuraciones para mercado pago

  mercadopago.configure({
    access_token: "TEST-1175470292882246-061221-c0c8a1595ad00fe0e35dcc145d2fec70-1397363589"
  })

  // Creando pedido

  const result = await mercadopago.preferences.create({
    items: [
      {
        title: 'Donación Henry TA',
        unit_price: 300,
        currency_id: 'COP',
        quantity: 1,
      }
    ],
    back_urls: {
      success: 'http://localhost:4001/success',
      failure: 'http://localhost:4001/failure',
      pending: 'http://localhost:4001/pending'
    },
    notification_url: 'https://86c1-204-199-97-150.ngrok-free.app/webhook'
  })

  console.log(result)

  res.send(result.body)

}

export const receiveWebhook = async (req, res) => {
  
  const payment = req.query;

  try {
    if(payment.type === 'payment') {
      const data = await mercadopago.payment.findById(payment["data.id"]);
      console.log(data)
    }
    return res.sendStatus(204)
  } catch (error) {
    console.log(error)
    return res.sendStatus(500).json({error: error.message})
  }
}