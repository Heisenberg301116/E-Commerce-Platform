import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;


export const fetchQuestions = async (data) => {
    try {
        return await axios.post(`${BACKEND_URL}/fetchQuestions`, data)
    }
    catch (error) {
        return error.response;
    }
}

export const updateQuestionRating = async (data) => {
    try {
        return await axios.post(`${BACKEND_URL}/updateQuestionRating`, data)
    }
    catch (error) {
        return error.response;
    }
}