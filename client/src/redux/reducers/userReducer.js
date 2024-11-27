const initialState = {
    isLoading: false,
    error: null,
    message: null,

    userInfo: null,
    orders: null,
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FAILURE':
            return { ...state, isLoading: false, error: action.payload.message }

        case 'LOGIN_REQUEST':
            return { ...state, isLoading: true, userInfo: null, error: null, message: null }
        case 'LOGIN_SUCCESS':
            return { ...state, isLoading: false, userInfo: action.payload.userInfo, message: action.payload.message }


        case 'LOGOUT':
            return { ...state, userInfo: null, error: null, message: "Logged out Successfully !" }


        case 'SIGNUP_REQUEST':
            return { ...state, isLoading: true, userInfo: null, error: null, message: null }
        case 'SIGNUP_SUCCESS':
            return { ...state, isLoading: false, userInfo: action.payload.userInfo, message: action.payload.message }


        case 'UPDATE_REQUEST':
            return { ...state, isLoading: true, error: null, message: null }
        case 'UPDATE_SUCCESS':
            return { ...state, isLoading: false, userInfo: action.payload.userInfo, message: action.payload.message }


        case 'DELETE_REQUEST':
            return { ...state, isLoading: true, error: null, message: null }
        case 'DELETE_SUCCESS':
            return { ...state, isLoading: false, message: action.payload.message }


        case 'REMOVE_FROM_CART_REQUEST':
            return { ...state, isLoading: true, error: null, message: null }
        case 'REMOVE_FROM_CART_SUCCESS':
            return { ...state, isLoading: false, message: action.payload.message }

        case 'ADD_TO_CART_REQUEST':
            return { ...state, isLoading: true, error: null, message: null }
        case 'ADD_TO_CART_SUCCESS':
            return { ...state, isLoading: false, message: action.payload.message, userInfo: { ...state.userInfo, cart: action.payload.data } }

        case 'UPDATE_CART_REQUEST':
            return { ...state, isLoading: true, error: null, message: null }
        case 'UPDATE_CART_SUCCESS':
            return { ...state, isLoading: false, message: action.payload.message, userInfo: { ...state.userInfo, cart: action.payload.data } }

        case 'MY_ORDERS_REQUEST':
            return { ...state, isLoading: true, error: null, message: null, orders: null }
        case 'MY_ORDERS_SUCCESS':
            return { ...state, isLoading: false, orders: action.payload.data }
        case 'MY_ORDERS_RESET':
            return { ...state, orders: null }

        case 'ADD_TO_MY_ORDERS_REQUEST':
            return { ...state, isLoading: true, error: null, message: null }
        case 'ADD_TO_MY_ORDERS_SUCCESS':
            return { ...state, isLoading: false, userInfo: { ...state.userInfo, orders: action.payload.data } }


        case 'USER_REVIEW_FEEDBACK_REQUEST':
            return { ...state, error: null, message: null }
        case 'USER_REVIEW_FEEDBACK_SUCCESS':
            return { ...state, message: null, userInfo: { ...state.userInfo, reviewsaction: action.payload.data } }


        case 'USER_QA_FEEDBACK_REQUEST':
            return { ...state, error: null, message: null }
        case 'USER_QA_FEEDBACK_SUCCESS':
            return { ...state, error: null, message: null, userInfo: { ...state.userInfo, QaAction: action.payload.data } }

        default:
            return state
    }
}