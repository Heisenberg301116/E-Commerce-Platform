const initialState = {
    isLoading: false,
    message: null,
    error: null,

    reviews: null,
    reviews_imgs_modal: null,
    user_imgs: null,
    user_review: null,
    update_rating: null,
    add_update_user_review: null,
    add_update_user_imgs: null,
    uploaded_imgs_urls: null,
    delete_user_imgs: null
}

export const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FAILURE':
            return { ...state, isLoading: false, error: action.payload.message }

        case 'REVIEWS_REQUEST':
            return { ...state, isLoading: true, reviews: null }
        case 'REVIEWS_SUCCESS':
            return { ...state, isLoading: false, reviews: action.payload }
        case 'REVIEWS_RESET':
            return { ...state, reviews: null }

        case 'REVIEWS_IMGS_REQUEST':
            return { ...state, isLoading: true, reviews_imgs_modal: null }
        case 'REVIEWS_IMGS_SUCCESS':
            // console.log("==============> action.payload.data = ", action.payload.data)
            return { ...state, isLoading: false, reviews_imgs_modal: action.payload.data }
        case 'REVIEWS_IMGS_RESET':
            return { ...state, reviews_imgs_modal: null }

        case 'USER_IMGS_REQUEST':
            return { ...state, isLoading: true, user_imgs: null }
        case 'USER_IMGS_SUCCESS':
            return { ...state, isLoading: false, user_imgs: action.payload.data }
        case 'USER_IMGS_RESET':
            return { ...state, user_imgs: null }

        case 'USER_REVIEW_REQUEST':
            return { ...state, isLoading: true, user_review: null }
        case 'USER_REVIEW_SUCCESS':
            return { ...state, isLoading: false, user_review: action.payload.data }
        case 'USER_REVIEW_RESET':
            return { ...state, user_review: null }

        case 'UPDATE_RATING_REQUEST':
            return { ...state, isLoading: true, update_rating: null }
        case 'UPDATE_RATING_SUCCESS':
            return { ...state, isLoading: false, update_rating: action.payload.data }
        case 'UPDATE_RATING_RESET':
            return { ...state, update_rating: null }

        case 'UPLOAD_IMAGES_REQUEST':
            return { ...state, isLoading: true }
        case 'UPLOAD_IMAGES_SUCCESS':
            return { ...state, isLoading: false, message: action.payload.message, uploaded_imgs_urls: action.payload.data }
        case 'UPLOAD_IMAGES_RESET':
            return { ...state, uploaded_imgs_urls: null }

        case 'DELETE_IMAGES_REQUEST':
            return { ...state, isLoading: true, delete_user_imgs: null }
        case 'DELETE_IMAGES_SUCCESS':
            return { ...state, isLoading: false, delete_user_imgs: true }
        case 'DELETE_IMAGES_RESET':
            return { ...state, isLoading: false, delete_user_imgs: null }

        case 'ADD_UPDATE_USER_REVIEW_REQUEST':
            return { ...state, isLoading: true, add_update_user_review: null }
        case 'ADD_UPDATE_USER_REVIEW_SUCCESS':
            return { ...state, isLoading: false, add_update_user_review: true }
        case 'ADD_UPDATE_USER_REVIEW_RESET':
            return { ...state, add_update_user_review: null }

        case 'ADD_UPDATE_USER_IMGS_REQUEST':
            return { ...state, isLoading: true, add_update_user_imgs: null }
        case 'ADD_UPDATE_USER_IMGS_SUCCESS':
            return { ...state, isLoading: false, add_update_user_imgs: true }
        case 'ADD_UPDATE_USER_IMGS_RESET':
            return { ...state, add_update_user_imgs: null }

        default:
            return state
    }
}