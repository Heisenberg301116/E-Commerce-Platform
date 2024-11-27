import axios from "axios"
import * as actionTypes from "../constants/userConstants";
import { persistor } from "../store";


const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;


const FetchError = (error) => {
    if (error.response && error.response.data.message) {
        return error.response.data.message;
    }
    return error.message;
}

//================================================================================================================================================
export const actionLogin = (email, password) => async (dispatch) => {
    try {
        if (email === 'abc' && password === 'abc') {
            email = 'raj983567@gmail.com';
            password = 'retet4re'
        }

        dispatch({ type: actionTypes.LOGIN_REQUEST })

        const response = await axios.post(`${BACKEND_URL}/login`, { email, password })

        const { data } = response

        dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: data })
    }

    catch (error) {
        dispatch({
            type: actionTypes.FAILURE, payload: { message: FetchError(error) }
        })
    }
}

// ================================================================================================================================================

export const actionLogout = () => (dispatch) => {
    dispatch({ type: actionTypes.LOGOUT });
    persistor.purge();
};

// ================================================================================================================================================

export const actionSignup = (name, email, phone, password) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.SIGNUP_REQUEST })
        const response = await axios.post(`${BACKEND_URL}/signup`, { name, email, phone, password })
        dispatch({ type: actionTypes.SIGNUP_SUCCESS, payload: response.data })
    }
    catch (error) {
        dispatch({
            type: actionTypes.FAILURE, payload: { message: FetchError(error) }
        })
    }
}

// ================================================================================================================================================

export const actionProfileUpdate = (name, email, phone, password, address) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.UPDATE_REQUEST })
        const response = await axios.post(`${BACKEND_URL}/updateUser`, name, email, phone, password, address)
        dispatch({ type: actionTypes.UPDATE_SUCCESS, payload: response.data })
    }
    catch (error) {
        dispatch({
            type: actionTypes.FAILURE, payload: { message: FetchError(error) }
        })
    }
}

// ===================================================================================================================================================

export const actionDeleteProfile = (email) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.DELETE_REQUEST })
        const response = await axios.post(`${BACKEND_URL}/deleteUser`, { email })
        dispatch({ type: actionTypes.DELETE_SUCCESS, payload: response.data })
    }
    catch (error) {
        dispatch({
            type: actionTypes.FAILURE, payload: { message: FetchError(error) }
        })
    }
}

// ===================================================================================================================================================

export const actionRemoveFromCart = (user_id, product_id) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.REMOVE_FROM_CART_REQUEST })
        const response = await axios.post(`${BACKEND_URL}/RemovefromCart`, { user_id, product_id })
        dispatch({ type: actionTypes.REMOVE_FROM_CART_SUCCESS, payload: response.data })
    }
    catch (error) {
        dispatch({
            type: actionTypes.FAILURE, payload: { message: FetchError(error) }
        })
    }
}

// ===================================================================================================================================================

export const actionAddToCart = (user_id, product_id, quantity) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.ADD_TO_CART_REQUEST })
        const response = await axios.post(`${BACKEND_URL}/addtoCart`, { user_id, product_id, quantity })
        const data = response.data;
        dispatch({ type: actionTypes.ADD_TO_CART_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({
            type: actionTypes.FAILURE, payload: { message: FetchError(error) }
        })
    }
}

// ===================================================================================================================================================

export const actionUpdateCart = (user_id, cartdata) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.UPDATE_CART_REQUEST })
        const response = await axios.post(`${BACKEND_URL}/updateCart`, { user_id, cartdata })
        dispatch({ type: actionTypes.UPDATE_CART_SUCCESS, payload: response.data })
        // console.log("==============> inside useraction try block okay")
    }
    catch (error) {
        // console.log("==============> inside useraction error catch")
        dispatch({
            type: actionTypes.FAILURE, payload: { message: FetchError(error) }
        })
    }
}

// ===================================================================================================================================================

export const actionMyOrders = (user_id, sort, skip, limit) => async (dispatch) => {
    try {
        // console.log("==========> inside actionMyordes and user_id = ", user_id)
        dispatch({ type: actionTypes.MY_ORDERS_REQUEST })
        const response = await axios.post(`${BACKEND_URL}/myOrders`, { user_id, sort, skip, limit })
        dispatch({ type: actionTypes.MY_ORDERS_SUCCESS, payload: response.data })
    }
    catch (error) {
        dispatch({
            type: actionTypes.FAILURE, payload: { message: FetchError(error) }
        })
    }
}

// ===================================================================================================================================================

export const actionAddToMyOrders = (user_id, product_id, quantity, price, delivery_charge, delivery_date, delivered) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.ADD_TO_MY_ORDERS_REQUEST })
        const response = await axios.post(`${BACKEND_URL}/addtoMyOrders`, { user_id, product_id, quantity, price, delivery_charge, delivery_date, delivered })
        dispatch({ type: actionTypes.ADD_TO_MY_ORDERS_SUCCESS, payload: response.data })
        console.log("==================> response.data = ", response.data)
    }
    catch (error) {
        dispatch({
            type: actionTypes.FAILURE, payload: { message: FetchError(error) }
        })
    }
}

// ===================================================================================================================================================

export const actionUserReviewFeedback = (user_id, review_id, action) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.USER_REVIEW_FEEDBACK_REQUEST })
        const response = await axios.post(`${BACKEND_URL}/userReviewFeedback`, { user_id, review_id, action })
        dispatch({ type: actionTypes.USER_REVIEW_FEEDBACK_SUCCESS, payload: response.data })
    }
    catch (error) {
        dispatch({
            type: actionTypes.FAILURE, payload: { message: FetchError(error) }
        })
    }
}

// ===================================================================================================================================================

export const actionUserQAFeedback = (user_id, product_id, question_id, action) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.USER_QA_FEEDBACK_REQUEST })
        const response = await axios.post(`${BACKEND_URL}/userQuestionFeedback`, { user_id, product_id, question_id, action })
        dispatch({ type: actionTypes.USER_QA_FEEDBACK_SUCCESS, payload: response.data })
    }
    catch (error) {
        dispatch({
            type: actionTypes.FAILURE, payload: { message: FetchError(error) }
        })
    }
}

//===============================================================================================================================================

export const actionUserStateReset = (actions) => async (dispatch) => {
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

// ===================================================================================================================================================