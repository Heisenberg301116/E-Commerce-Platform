import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;


export const fetchReviews = async (data) => {
    try {
        return await axios.post(`${BACKEND_URL}/fetchReviews`, data)
    }
    catch (error) {
        return error.response;
    }
}

export const fetchReviewsImgs = async (data) => {
    try {
        return await axios.post(`${BACKEND_URL}/fetchReviewsImgs`, data)
    }
    catch (error) {
        return error.response;
    }
}

export const UserReviewImgs = async (data) => {
    try {
        return await axios.post(`${BACKEND_URL}/UserReviewImgs`, data)
    }
    catch (error) {
        return error.response;
    }
}

export const UserReview = async (data) => {
    try {
        return await axios.post(`${BACKEND_URL}/UserReview`, data)
    }
    catch (error) {
        return error.response;
    }
}

export const updateReviewRating = async (data) => {
    try {
        return await axios.post(`${BACKEND_URL}/updateReviewRating`, data)
    }
    catch (error) {
        return error.response;
    }
}

export const AddUpdateUserReview = async (data) => {
    try {
        return await axios.post(`${BACKEND_URL}/AddUpdateUserReview`, data)
    }
    catch (error) {
        return error.response;
    }
}