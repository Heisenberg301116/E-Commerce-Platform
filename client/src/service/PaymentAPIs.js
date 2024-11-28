import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const buyNow = async (data) => {
    try {
        console.log("==================> inside PaymentAPI.js")
        const res = await axios.post(`${BACKEND_URL}/buy`, data)
        console.log("==================> inside PaymentAPI.js and response = ", res)
        return res;
    }
    catch (error) {
        console.log("==================> inside PaymentAPI.js and error = ", error)
        return error.response;
    }
}