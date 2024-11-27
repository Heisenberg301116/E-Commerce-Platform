const initialState = {
    isLoading: false,
    message: null,
    error: null,

    titles: null,
    categories: null,
    tagline: null,
    slide_prdts: {},
    search: null,
    productDetail: null,
    sellerDetail: null,
    highRes: null,
    lowRes: null,
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FAILURE':
            return { ...state, isLoading: false, error: action.payload.message }

        case 'PRODUCT_TITLES_REQUEST':
            return { ...state, isLoading: true, titles: null }
        case 'PRODUCT_TITLES_SUCCESS':
            return { ...state, isLoading: false, titles: action.payload }
        case 'PRODUCT_TITLES_RESET':
            return { ...state, titles: null }

        case 'CATEGORY_REQUEST':
            return { ...state, isLoading: true, categories: null }
        case 'CATEGORY_SUCCESS':
            return { ...state, isLoading: false, categories: action.payload }
        case 'CATEGORY_RESET':
            // console.log("===========> resetting category to null")
            // console.log("===========> inside reducer and categories = ", state.categories)
            return { ...state, categories: null }

        case 'TAGLINE_REQUEST':
            return { ...state, isLoading: true, tagline: null }
        case 'TAGLINE_SUCCESS':
            return { ...state, isLoading: false, tagline: action.payload }
        case 'TAGLINE_RESET':
            return { ...state, tagline: null }


        case 'SLIDE_REQUEST':
            return { ...state, isLoading: true, slide_prdts: { ...state.slide_prdts, [action.payload.tagline]: null } }
        case 'SLIDE_SUCCESS':
            return { ...state, isLoading: false, slide_prdts: { ...state.slide_prdts, [action.payload.tagline]: action.payload.final_data } }
        case 'SLIDE_RESET':
            return { ...state, isLoading: false, slide_prdts: { ...state.slide_prdts, [action.payload.tagline]: null } }


        case 'QUERY_REQUEST':
            return { ...state, isLoading: true, search: null }
        case 'QUERY_SUCCESS':
            return { ...state, isLoading: false, search: action.payload }
        case 'QUERY_RESET':
            return { ...state, search: null }

        case 'PRODUCT_DETAIL_REQUEST':
            return { ...state, isLoading: true, productDetail: null }
        case 'PRODUCT_DETAIL_SUCCESS':
            return { ...state, isLoading: false, productDetail: action.payload.product }
        case 'PRODUCT_DETAIL_RESET':
            return { ...state, productDetail: null }

        case 'SELLER_DETAIL_REQUEST':
            return { ...state, isLoading: true, sellerDetail: null }
        case 'SELLER_DETAIL_SUCCESS':
            return { ...state, isLoading: false, sellerDetail: action.payload.seller }
        case 'SELLER_DETAIL_RESET':
            return { ...state, sellerDetail: null }

        case 'HIGH_RES_REQUEST':
            return { ...state, isLoading: true, highRes: null }
        case 'HIGH_RES_SUCCESS':
            return { ...state, isLoading: false, highRes: action.payload.data }
        case 'HIGH_RES_RESET':
            return { ...state, highRes: null }

        case 'LOW_RES_REQUEST':
            return { ...state, isLoading: true, lowRes: null }
        case 'LOW_RES_SUCCESS':
            return { ...state, isLoading: false, lowRes: action.payload.LowResImg }
        case 'LOW_RES_RESET':
            return { ...state, lowRes: null }


        default:
            return state
    }
}