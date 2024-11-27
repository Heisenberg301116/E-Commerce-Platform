import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;


export const authenticateSignup = async (data) => {
    try {
        return await axios.post(`${BACKEND_URL}/signup`, data)
    }
    catch (error) {
        return error.response;
    }
}

export const authenticateLogin = async (data) => {
    try {
        return await axios.post(`${BACKEND_URL}/login`, data)
    }
    catch (error) {
        return error.response;
    }
}

export const updateuserInfo = async (data) => {
    try {
        return await axios.post(`${BACKEND_URL}/updateUser`, data)
    }
    catch (error) {
        return error.response;
    }
}

export const deleteUser = async (data) => {
    try {
        return await axios.post(`${BACKEND_URL}/deleteUser`, data)
    }
    catch (error) {
        return error.response;
    }
}

export const removefromCart = async (data) => {
    try {
        return await axios.post(`${BACKEND_URL}/removefromCart`, data)
    }
    catch (error) {
        return error.response;
    }
}

export const addtoCart = async (data) => {
    try {
        return await axios.post(`${BACKEND_URL}/addtoCart`, data)
    }
    catch (error) {
        return error.response;
    }
}

export const addtoMyOrders = async (data) => {
    try {
        return await axios.post(`${BACKEND_URL}/addtoMyOrders`, data)
    }
    catch (error) {
        return error.response;
    }
}

export const userReviewFeedback = async (data) => {
    try {
        return await axios.post(`${BACKEND_URL}/userReviewFeedback`, data)
    }
    catch (error) {
        return error.response;
    }
}

export const userQuestionFeedback = async (data) => {
    try {
        return await axios.post(`${BACKEND_URL}/userQuestionFeedback`, data)
    }
    catch (error) {
        return error.response;
    }
}