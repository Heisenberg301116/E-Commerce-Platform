import axios from "axios"
import * as actionTypes from "../constants/reviewConstants";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;


const FetchError = (error) => {
    if (error.response && error.response.data.message) {
        return error.response.data.message;
    }
    return error.message;
}

//===============================================================================================================================================

export const actionFetchReviews = (product_id, skip, limit, sort) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.REVIEWS_REQUEST })

        const response = await axios.post(`${BACKEND_URL}/fetchReviews`, { product_id, skip, limit, sort })

        const { data: reviews } = response.data

        // Use Promise.all to handle asynchronous operations in parallel
        const reviewsWithImgs = await Promise.all(
            reviews.map(async (obj) => {
                const res = await axios.post(`${BACKEND_URL}/UserReviewImgs`, { product_id: obj.product_id, user_id: obj.user_id });
                const imgs = res.data.data;
                return { ...obj, images: imgs }; // Add imgs to the review object
            })
        );

        // console.log("=================> reviewsWithImgs = ", reviewsWithImgs)

        dispatch({ type: actionTypes.REVIEWS_SUCCESS, payload: reviewsWithImgs })
    }
    catch (error) {
        dispatch({
            type: actionTypes.FAILURE, payload: { message: FetchError(error) }
        })
    }
}

//===============================================================================================================================================

export const actionFetchReviewsImgs = (product_id, skip, limit, sort) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.REVIEWS_IMGS_REQUEST })
        const response = await axios.post(`${BACKEND_URL}/fetchReviewsImgs`, { product_id, skip, limit, sort })
        const { data } = response
        dispatch({ type: actionTypes.REVIEWS_IMGS_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({
            type: actionTypes.FAILURE, payload: { message: FetchError(error) }
        })
    }
}

//===============================================================================================================================================

export const actionUserReviewImgs = (product_id, user_id) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.USER_IMGS_REQUEST })
        const response = await axios.post(`${BACKEND_URL}/UserReviewImgs`, { product_id, user_id })
        const { data } = response
        dispatch({ type: actionTypes.USER_IMGS_SUCCESS, payload: data })
    }
    catch (error) {
        // console.log("===============> inside error = ", error.message)
        dispatch({
            type: actionTypes.FAILURE, payload: { message: FetchError(error) }
        })
    }
}

//===============================================================================================================================================

export const actionUserReview = (product_id, user_id) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.USER_REVIEW_REQUEST })
        const response = await axios.post(`${BACKEND_URL}/UserReview`, { product_id, user_id })
        const { data } = response
        dispatch({ type: actionTypes.USER_REVIEW_SUCCESS, payload: data })
        // console.log("==================> inside reviewaction userreview and response = ", response.data)
    }
    catch (error) {
        dispatch({
            type: actionTypes.FAILURE, payload: { message: FetchError(error) }
        })
    }
}

//===============================================================================================================================================

export const actionUpdateReviewRating = (review_id, like, dislike) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.UPDATE_RATING_REQUEST })
        const response = await axios.post(`${BACKEND_URL}/updateReviewRating`, { review_id, like, dislike })
        const { data } = response
        dispatch({ type: actionTypes.UPDATE_RATING_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({
            type: actionTypes.FAILURE, payload: { message: FetchError(error) }
        })
    }
}

//===============================================================================================================================================

export const actionUploadImagesToCloudinary = (formData) => async (dispatch) => {
    try {
        // console.log("===============> inside actionaddupdate and data = ", formData)

        dispatch({ type: actionTypes.UPLOAD_IMAGES_REQUEST })
        const response = await axios.post(`${BACKEND_URL}/uploadImages`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data', // Explicitly set the header
            },
        })
        const { data } = response

        // console.log("===============> inside actionaddupdate and data = ", data)

        dispatch({ type: actionTypes.UPLOAD_IMAGES_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({
            type: actionTypes.FAILURE, payload: { message: FetchError(error) }
        })
    }
}

//===============================================================================================================================================

export const actionDeleteImagesFromCloudinary = (images) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.DELETE_IMAGES_REQUEST })
        const response = await axios.post(`${BACKEND_URL}/deleteImages`, { images })
        const { data } = response

        // console.log("===============> inside actionaddupdate and data = ", data)
        dispatch({ type: actionTypes.DELETE_IMAGES_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({
            type: actionTypes.FAILURE, payload: { message: FetchError(error) }
        })
    }
}

//===============================================================================================================================================

export const actionAddUpdateUserReview = (product_id, user_id, name, date, rating, likes, dislikes, title, message) => async (dispatch) => {
    try {
        // console.log("=================> inside action and product_id, user_id, name, date, rating, likes, dislikes, title, message = ", product_id, user_id, name, date, rating, likes, dislikes, title, message)

        dispatch({ type: actionTypes.ADD_UPDATE_USER_REVIEW_REQUEST })
        const response = await axios.post(`${BACKEND_URL}/AddUpdateUserReview`, { product_id, user_id, name, date, rating, likes, dislikes, title, message })
        const { data } = response

        // console.log("===============> inside actionaddupdate and data = ", data)
        dispatch({ type: actionTypes.ADD_UPDATE_USER_REVIEW_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({
            type: actionTypes.FAILURE, payload: { message: FetchError(error) }
        })
    }
}

//===============================================================================================================================================

export const actionAddUpdateUserReviewImgs = (product_id, user_id, images_arr) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.ADD_UPDATE_USER_IMGS_REQUEST })
        const response = await axios.post(`${BACKEND_URL}/AddUpdateUserReviewImgs`, { product_id, user_id, images_arr })
        const { data } = response
        dispatch({ type: actionTypes.ADD_UPDATE_USER_IMGS_SUCCESS, payload: data })
    }
    catch (error) {
        // console.log("===============> inside error = ", error.message)
        dispatch({
            type: actionTypes.FAILURE, payload: { message: FetchError(error) }
        })
    }
}

//===============================================================================================================================================

export const actionReviewStateReset = (actions) => async (dispatch) => {
    try {
        actions.forEach(actionType => {
            dispatch({ type: actionType }); // Use each action string as the type
        });
    }
    catch (error) {
        dispatch({
            type: actionTypes.FAILURE,
            payload: { message: FetchError(error) }
        });
    }
};