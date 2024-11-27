import axios from "axios"
import * as actionTypes from "../constants/productConstants";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;


const FetchError = (error) => {
    if (error.response && error.response.data.message) {
        return error.response.data.message;
    }
    return error.message;
}

//===============================================================================================================================================

export const actionFetchTitles = () => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.PRODUCT_TITLES_REQUEST })
        const response = await axios.get(`${BACKEND_URL}/productsTitle`)
        const { data } = response
        dispatch({ type: actionTypes.PRODUCT_TITLES_SUCCESS, payload: data.titles })
    }
    catch (error) {
        dispatch({
            type: actionTypes.FAILURE, payload: { message: FetchError(error) }
        })
    }
}

//===============================================================================================================================================

export const actionCategoryProducts = (category, skip, limit, sort) => async (dispatch) => {
    try {
        // console.log("================> inside action")
        dispatch({ type: actionTypes.CATEGORY_REQUEST })
        const response = await axios.post(`${BACKEND_URL}/categoryProducts`, { category, skip, limit, sort })
        const data = response.data.data

        // console.log("==========> data", data)

        // Fetch low-resolution images for each product in parallel
        const lowResImagePromises = data.map(async (product) => {
            // console.log("============. product in action = ", product)
            const res = await axios.post(`${BACKEND_URL}/lowResImgs`, { product_id: product._id });
            return { ...product, lowRes: res.data.LowResImg }; // Attach lowRes image to the product
        });

        // Wait for all promises to resolve
        const final_data = await Promise.all(lowResImagePromises);

        // console.log("==========> final data", final_data)

        // console.log("================> inside action and sending CATEGORY SUCCESS")
        dispatch({ type: actionTypes.CATEGORY_SUCCESS, payload: final_data })
    }
    catch (error) {
        // console.log("==================> error of dispatch action = ", error)
        dispatch({
            type: actionTypes.FAILURE, payload: { message: FetchError(error) }
        })
    }
}

//===============================================================================================================================================

export const actionTaglineProducts = (tagline, skip, limit, sort) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.TAGLINE_REQUEST })
        const response = await axios.post(`${BACKEND_URL}/taglineProducts`, { tagline, skip, limit, sort })
        const data = response.data.data

        // Fetch low-resolution images for each product in parallel
        const lowResImagePromises = data.map(async (product) => {
            const res = await axios.post(`${BACKEND_URL}/lowResImgs`, { product_id: product._id });
            return { ...product, lowRes: res.data.LowResImg }; // Attach lowRes image to the product
        });

        // Wait for all promises to resolve
        const final_data = await Promise.all(lowResImagePromises);

        dispatch({ type: actionTypes.TAGLINE_SUCCESS, payload: final_data })
    }
    catch (error) {
        dispatch({
            type: actionTypes.FAILURE, payload: { message: FetchError(error) }
        })
    }
}

//===============================================================================================================================================

export const actionProductSlide = (tagline, skip, limit, sort) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.SLIDE_REQUEST, payload: { tagline: tagline } })
        const response = await axios.post(`${BACKEND_URL}/taglineProducts`, { tagline, skip, limit, sort })

        // console.log("============> tagline, skip, limit, sort = ", tagline, skip, limit, sort)

        const data = response.data.data;

        // console.log("============> data = ", data)

        // Fetch low-resolution images for each product in parallel
        const lowResImagePromises = data.map(async (product) => {
            const res = await axios.post(`${BACKEND_URL}/lowResImgs`, { product_id: product._id });
            return { ...product, lowRes: res.data.LowResImg }; // Attach lowRes image to the product
        });

        // Wait for all promises to resolve
        const final_data = await Promise.all(lowResImagePromises);

        // Dispatch success action with updated data
        dispatch({ type: actionTypes.SLIDE_SUCCESS, payload: { final_data, tagline } });
    }
    catch (error) {
        dispatch({
            type: actionTypes.FAILURE, payload: { message: FetchError(error) }
        })
    }
}

//===============================================================================================================================================

export const actionProductSlideReset = (tagline) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.SLIDE_RESET, payload: { tagline: tagline } })
    }
    catch (error) {
        dispatch({
            type: actionTypes.FAILURE, payload: { message: FetchError(error) }
        })
    }
}

//===============================================================================================================================================

export const actionSearchProducts = (query, skip, limit, sort) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.QUERY_REQUEST })
        const response = await axios.post(`${BACKEND_URL}/searchProducts`, { query, skip, limit, sort })
        const data = response.data.data

        // console.log("===============> data = ", data)

        // Fetch low-resolution images for each product in parallel
        const lowResImagePromises = data.map(async (product) => {
            const res = await axios.post(`${BACKEND_URL}/lowResImgs`, { product_id: product._id });
            return { ...product, lowRes: res.data.LowResImg }; // Attach lowRes image to the product
        });

        // Wait for all promises to resolve
        const final_data = await Promise.all(lowResImagePromises);

        dispatch({ type: actionTypes.QUERY_SUCCESS, payload: final_data })
        // console.log("===============> final_data = ", final_data)
    }
    catch (error) {
        dispatch({
            type: actionTypes.FAILURE, payload: { message: FetchError(error) }
        })
    }
}

//===============================================================================================================================================

export const actionFetchProductDetail = (product_id) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.PRODUCT_DETAIL_REQUEST })
        const response = await axios.post(`${BACKEND_URL}/productDetail`, { product_id })
        const { data } = response

        dispatch({ type: actionTypes.PRODUCT_DETAIL_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({
            type: actionTypes.FAILURE, payload: { message: FetchError(error) }
        })
    }
}

//===============================================================================================================================================

export const actionFetchSellerDetail = (seller_id) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.SELLER_DETAIL_REQUEST })
        const response = await axios.post(`${BACKEND_URL}/sellerDetail`, { seller_id })
        const { data } = response
        dispatch({ type: actionTypes.SELLER_DETAIL_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({
            type: actionTypes.FAILURE, payload: { message: FetchError(error) }
        })
    }
}


//===============================================================================================================================================

export const actionHighResImgs = (product_id) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.HIGH_RES_REQUEST })
        const response = await axios.post(`${BACKEND_URL}/highResImgs`, { product_id })
        const { data } = response
        // console.log("===============> data = ", data)
        dispatch({ type: actionTypes.HIGH_RES_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({
            type: actionTypes.FAILURE, payload: { message: FetchError(error) }
        })
    }
}

//===============================================================================================================================================

export const actionLowResImgs = (product_id) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.LOW_RES_REQUEST })
        const response = await axios.post(`${BACKEND_URL}/lowResImgs`, { product_id })
        const { data } = response
        dispatch({ type: actionTypes.LOW_RES_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({
            type: actionTypes.FAILURE, payload: { message: FetchError(error) }
        })
    }
}

//===============================================================================================================================================

export const actionProductStateReset = (actions) => async (dispatch) => {
    try {
        // console.log("================> inside action reset sending CATEGORY RESET")
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

//===============================================================================================================================================