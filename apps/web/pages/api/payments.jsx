const paypal = require('@paypal/checkout-server-sdk')

let clientID = "AYMprwST6h7ZarJYCALE4AjhOg8Xilbls21O109JGDeM0V5AFDeuQW8Z18wI-jj3bOvM6hzLgEBeaJ05"
let clientSecret = "EFwey3HoNI4wzVpUw18-g0LH5VPmarGcSf4-sWtnnpLKImafaR_Tecg-qouihsp-X6Pt_yiBTII-kM2v"

let environment = new paypal.core.SandboxEnvironment(clientID, clientSecret)
let client = new paypal.core.PayPalHttpClient(environment)

export default async function handler(req, res){
    if(req.method === "POST"){
        const request = new paypal.orders.OrdersCreateRequest()
        request.requestBody({
            intent: "CAPTURE",
            purchase_units: [
                {
                    amount: {
                        currency_code: "MXN",
                        value: "3900"
                    }
                }
            ]
        })
        const response = await client.execute(request)
        return res.json({ id: response.result.id})
    }
}