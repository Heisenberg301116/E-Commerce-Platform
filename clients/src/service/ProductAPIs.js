import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;


export const productsTitle = async () => {
    try {
        return await axios.get(`${BACKEND_URL}/productsTitle`)
    }
    catch (error) {
        return error.response;
    }
}

export const categoryProducts = async (data) => {
    try {
        return await axios.post(`${BACKEND_URL}/categoryProducts`, data)
    }
    catch (error) {
        return error.response;
    }
}

export const taglineProducts = async (data) => {
    try {
        return await axios.post(`${BACKEND_URL}/taglineProducts`, data)
    }
    catch (error) {
        return error.response;
    }
}

export const searchProducts = async (data) => {
    try {
        return await axios.post(`${BACKEND_URL}/searchProducts`, data)
    }
    catch (error) {
        return error.response;
    }
}

export const highResImgs = async (data) => {
    try {
        return await axios.post(`${BACKEND_URL}/highResImgs`, data)
    }
    catch (error) {
        return error.response;
    }
}

export const lowResImgs = async (data) => {
    try {
        return await axios.post(`${BACKEND_URL}/lowResImgs`, data)
    }
    catch (error) {
        return error.response;
    }
}