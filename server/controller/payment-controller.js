import crypto from 'crypto';
import axios from 'axios';
import dotenv from 'dotenv'

dotenv.config();
const CLIENT_URL = process.env.CLIENT_URL;
const SERVER_URL = process.env.SERVER_URL;
const SALT_KEY = process.env.SALT_KEY;
const MERCHANT_ID = process.env.MERCHANT_ID;

export const doPayment = async (request, response) => {
    try {
        const transactionId = request.body.transactionId;

        const data = {
            merchantId: MERCHANT_ID,
            merchantTransactionId: transactionId,
            name: request.body.name,
            amount: request.body.amount * 100,      // in paise
            redirectUrl: `${SERVER_URL}/status/${transactionId}`,
            redirectMode: "POST",
            mobileNumber: request.body.number,
            paymentInstrument: {
                type: "PAY_PAGE"
            }
        }

        const payload = JSON.stringify(data)
        const payloadMain = Buffer.from(payload).toString('base64')
        const keyIndex = 1
        const string = payloadMain + '/pg/v1/pay' + SALT_KEY
        const sha256 = crypto.createHash('sha256').update(string).digest('hex')
        const checksum = sha256 + '###' + keyIndex

        const testURL = 'https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay'

        const options = {
            method: "POST",
            url: testURL,
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                'X-VERIFY': checksum
            },
            data: {
                request: payloadMain
            }
        }

        await axios(options).then(function (res) {
            return response.json(res.data)
        }).catch(function (error) {
            return response.status(500).json({ message: `Payment failed ! ${error.message}` })
        })
    }
    catch (error) {
        console.log("===================> error in payment-controller do-payment = ", error.message)
        response.status(500).json({ message: error.message })
    }
}


export const status = async (request, response) => {
    const merchantTransactionId = request.params.txnId;
    const merchantId = MERCHANT_ID;
    const keyIndex = 1
    const string = `/pg/v1/status/${merchantId}/${merchantTransactionId}` + SALT_KEY
    const sha256 = crypto.createHash('sha256').update(string).digest('hex')
    const checksum = sha256 + '###' + keyIndex

    const testURL = `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${merchantId}/${merchantTransactionId}`

    const options = {
        method: 'GET',
        url: testURL,
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            'X-VERIFY': checksum,
            'X-MERCHANT-ID': `${merchantId}`
        }
    }

    axios.request(options).then(function (res) {
        if (res.data.success === true) {
            const url = `${CLIENT_URL}/success`
            response.redirect(url)
        }
        else {
            const url = `${CLIENT_URL}/failed`
            response.redirect(url)
        }
    }).catch(function (error) {
        console.log("===================> error in payment-controller status = ", error.message)
        response.status(500).json({ message: error.message })
    })
}