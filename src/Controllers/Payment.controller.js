
const paypal = require('paypal-rest-sdk');

//Configuracion de paypal con credenciales de la empresa(ficticia)
paypal.configure({
    'mode': 'sandbox', //sandbox or live, Sandbox modo de prueba
    'client_id': 'AcNDUgzARvWzOV94AnhY27B6De_J-wR03JQnxep1fEyRzfZSaXyNkBoICPcvAlkVEQfWTY9geE7OMHkw',
    'client_secret': 'EF2HSzfYxevgUN-oFtEQD8ssOPC82TzHJH3FgzGDNDD_YHehdYKAdBudkigHor57dXOOdD8ihVRUr7XY'
});

//Configuracion basica de todas las compras 5$ por hora tutoria como base
const create_payment_json = {
    "intent": "sale",
    "payer": {
        "payment_method": "paypal"
    },
    "redirect_urls": {
        "return_url": "http://localhost:3000/api/execute-payment",
        "cancel_url": "http://localhost:3000/api/cancel"
    },
    "transactions": [{
        "item_list": {
            "items": [{
                "name": "Tutoria",
                "price": "7.00",
                "currency": "USD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "USD",
            "total": "5.00"
        },
        "description": "Pago de una hora de tutoria"
    }]
}

//Crear pago en el servidor 
const createPayment = async (req, res) => {
    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            throw error;
        } else {
            for(let i = 0;i < payment.links.length;i++){
              if(payment.links[i].rel === 'approval_url'){
                res.send(payment.links[i].href);
              }
            }
        }
    })
}

//Ejecutar el pago y recibirlo desde el servidor a paypal
const executePayment = async(req, res) => {
    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;
  
    const execute_payment_json = {
      "payer_id": payerId,
      "transactions": [{
          "amount": {
              "currency": "USD",
              "total": "5.00"
          }
      }]
    };
  
    paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
      if (error) {
          console.log(error.response);
          throw error;
      } else {
          console.log(JSON.stringify(payment));
          res.send('Success');
      }
  });
}

module.exports = {
    createPayment,
    executePayment
}