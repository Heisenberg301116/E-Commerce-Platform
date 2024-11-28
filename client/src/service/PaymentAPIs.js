import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const buyNow = async (data) => {
    try {
        console.log("==================> inside route butNow()")
        return await axios.post(`${BACKEND_URL}/buy`, data)
    }
    catch (error) {
        return error.response;
    }
}