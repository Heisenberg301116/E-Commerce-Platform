import styled from 'styled-components'
import { useContext, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { DataContext } from "../../../../context/DataProvider";

// redux
import { useDispatch, useSelector } from 'react-redux';
import { actionFetchReviews, actionReviewStateReset } from '../../../../redux/actions/reviewActions'

// images
import spinner_gif from '../../../header/images/spinner.gif'

// components
import ReviewsHeader from './Header'
import ReviewSection from './Review_Section'
import ImageModal from "./Image_Modal";
import AllImagesGrid from './Multi_Image_Modal/All_Images_Grid';


const Styledh2 = styled.h2`
    // margin: 1rem 0;
    font-size: 1.6rem;
    text-align: center;

    
    @media(max-width: 400px){
        font-size: 1.5rem;
    }
    @media(max-width: 300px){
        font-size: 1.4rem;
    }
`

const StyledButton = styled.button`
    text-align: center;
    font-size: 1.1rem;
    color: blue;
    font-weight: 500;
    display: block;
    margin: auto;
    border: 2px solid black;
    border-radius: 5px;
    padding: 0.43rem 0.5rem;
    background-color: blue;
    color: white;

    &:hover{
        cursor: pointer;
        transform: scale(1.02)
    }
`

const MainReviewContent = () => {
    // Redux
    const dispatch = useDispatch();
    const review = useSelector((state) => state.review)
    const { reviews, isLoading } = review

    const [reviewsarr, setreviewsarr] = useState(null);

    const { productdetail } = useContext(DataContext)

    useEffect(() => {
        // console.log("==============> inside useEffect of Main")

        dispatch(actionFetchReviews(productdetail._id, 0, 2, 'most-helpful'))
    }, [])

    useEffect(() => {
        if (reviews) {
            // console.log("==============> inside useEffect of questions and reviews = ", reviews)

            setreviewsarr(reviews)
            dispatch(actionReviewStateReset(['REVIEWS_RESET']))
        }
    }, [reviews])

    return (
        <>
            {isLoading && <img src={spinner_gif} style={{ width: '5rem', height: '5rem', position: 'fixed', top: '5px', left: '50%', zIndex: '6' }} />}

            <div>
                <div style={{ maxHeight: '28rem', overflow: 'hidden', opacity: 0.7 }}>
                    {
                        reviewsarr?.map((obj, index) => (
                            <ReviewSection key={index} obj={obj} />
                        ))
                    }
                </div>

                {
                    productdetail.total_reviews > 2
                        ?

                        <div style={{ marginTop: '1rem' }}>
                            {/* <hr style={{ border: '1px solid #b5b7ba', marginBottom: '0.9rem' }} /> */}

                            <Link to={`/product/${productdetail._id}/reviews/1`} style={{ textDecoration: 'none' }}>
                                <StyledButton>
                                    See all {productdetail.total_reviews} Reviews
                                </StyledButton>
                            </Link>
                        </div>

                        :

                        null
                }

            </div >
        </>
    )
}


const Reviews_Component = () => {
    const { productdetail, imgmodalInfo, showallimagesgrid } = useContext(DataContext)

    return (
        <>
            <div style={{ border: '2px solid #b5b7ba', marginTop: '2.5rem', padding: '1rem 0rem' }}>

                <Styledh2>Ratings & Reviews</Styledh2>

                <hr style={{ margin: '1rem 0 0.8rem 0', border: '1px solid silver' }} />

                <ReviewsHeader />

                <MainReviewContent />

                {showallimagesgrid && <AllImagesGrid total_images={productdetail.total_review_images} />}

                {imgmodalInfo !== null && <ImageModal />}

            </div >
        </>
    )
}

export default Reviews_Component;