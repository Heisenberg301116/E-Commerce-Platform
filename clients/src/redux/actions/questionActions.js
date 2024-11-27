import axios from "axios"
import * as actionTypes from "../constants/questionConstants";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;


const FetchError = (error) => {
    if (error.response && error.response.data.message) {
        return error.response.data.message;
    }
    return error.message;
}

//===============================================================================================================================================

export const actionFetchQuestions = (product_id, skip, limit, sort) => async (dispatch) => {
    try {
        // console.log("===============> product_id, skip, limit, sort = ", product_id, skip, limit, sort)
        dispatch({ type: actionTypes.QUESTIONS_REQUEST })
        const response = await axios.post(`${BACKEND_URL}/fetchQuestions`, { product_id, skip, limit, sort })
        const { data } = response
        dispatch({ type: actionTypes.QUESTIONS_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({
            type: actionTypes.FAILURE, payload: { message: FetchError(error) }
        })
    }
}

//===============================================================================================================================================

export const actionUpdateQuestionRating = (question_id, like, dislike) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.QUESTIONS_RATING_REQUEST })
        const response = await axios.post(`${BACKEND_URL}/updateQuestionRating`, { question_id, like, dislike })
        const { data } = response
        dispatch({ type: actionTypes.QUESTIONS_RATING_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({
            type: actionTypes.FAILURE, payload: { message: FetchError(error) }
        })
    }
}

//===============================================================================================================================================

export const actionQuestionStateReset = (actions) => async (dispatch) => {
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