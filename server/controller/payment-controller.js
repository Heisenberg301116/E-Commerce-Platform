import crypto from 'crypto';
import axios from 'axios';
import dotenv from 'dotenv'

dotenv.config();

// real
// const CLIENT_URL = process.env.CLIENT_URL;
// const SERVER_URL = process.env.SERVER_URL;
// const SALT_KEY = process.env.SALT_KEY;
// const MERCHANT_ID = process.env.MERCHANT_ID;

// fake
const CLIENT_URL = process.env.CLIENT_URL;
const SERVER_URL = process.env.SERVER_URL;
const PHONE_PE_HOST_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox";
const SALT_KEY = '099eb0cd-02cf-4e2a-8aca-3e6c6aff0399';
const SALT_INDEX = 1;
const MERCHANT_ID = 'PGTESTPAYUAT';
const APP_BE_URL = process.env.SERVER_URL;

export const doPayment = async (req, res) => {
    // console.log("============ >inside doPayment route and salt,merchant,server_url and client_url = ", CLIENT_URL, SERVER_URL, SALT_KEY, MERCHANT_ID)
    const amount = +req.query.amount;

    // User ID is the ID of the user present in our application DB
    let userId = "MUID123";

    // Generate a unique merchant transaction ID for each transaction
    let merchantTransactionId = req.body.transactionId;

    let normalPayLoad = {
        merchantId: MERCHANT_ID,
        merchantTransactionId: merchantTransactionId,
        merchantUserId: userId,
        amount: amount * 100, // converting to paise
        redirectUrl: `${APP_BE_URL}/status/${merchantTransactionId}`,
        redirectMode: "REDIRECT",
        mobileNumber: "9999999999",
        paymentInstrument: {
            type: "PAY_PAGE",
        },
    };

    // Make a base64-encoded payload
    let bufferObj = Buffer.from(JSON.stringify(normalPayLoad), "utf8");
    let base64EncodedPayload = bufferObj.toString("base64");

    // X-VERIFY => SHA256(base64EncodedPayload + "/pg/v1/pay" + SALT_KEY) + ### + SALT_INDEX
    let string = base64EncodedPayload + "/pg/v1/pay" + SALT_KEY;
    let sha256_val = sha256(string);
    let xVerifyChecksum = sha256_val + "###" + SALT_INDEX;

    axios.post(
        `${PHONE_PE_HOST_URL}/pg/v1/pay`,
        { request: base64EncodedPayload },
        {
            headers: {
                "Content-Type": "application/json",
                "X-VERIFY": xVerifyChecksum,
                accept: "application/json",
            },
        }
    )
        .then(function (response) {
            console.log("response->", response.data);
            res.redirect(response.data.data.instrumentResponse.redirectInfo.url);
        })
        .catch(function (error) {
            res.send(error);
        });
}

export const status = async (request, response) => {
    console.log("============ >inside status route")
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
        console.log("================> inside axios.request after .then()")
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