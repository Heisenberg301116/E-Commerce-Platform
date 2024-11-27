const initialState = {
    isLoading: false,
    message: null,
    error: null,

    questions: null,
    questions_rating: null,
}

export const questionReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FAILURE':
            return { ...state, isLoading: false, error: action.payload.message }

        case 'QUESTIONS_REQUEST':
            return { ...state, isLoading: true, questions: null }
        case 'QUESTIONS_SUCCESS':
            return { ...state, isLoading: false, questions: action.payload.data }
        case 'QUESTIONS_RESET':
            return { ...state, questions: null }

        case 'QUESTIONS_RATING_REQUEST':
            return { ...state, isLoading: true, questions_rating: null }
        case 'QUESTIONS_RATING_SUCCESS':
            return { ...state, isLoading: false, questions_rating: action.payload.data }
        case 'QUESTIONS_RATING_RESET':
            return { ...state, questions_rating: null }

        default:
            return state
    }
}