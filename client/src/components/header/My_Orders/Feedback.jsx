import { useContext, useEffect } from "react";
import { DataContext } from "../../../context/DataProvider";
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

// images
import feedback_img from '../images/feedback.png'
import star_img from '../images/star.png'


const StyledProductRatingDiv = styled.div`
    background-color: #0532fc;
    padding: 0.15rem 0.2rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 0.3rem;
 
    @media(max-width: 400px){
        padding: 0.08rem 0.23rem 0.1rem 0.23rem;
        font-size: 0.7rem;        
    }
`
const StyledProductStarImg = styled.img`
    height: 0.65rem; 
    background-color: #0532fc;

    @media(max-width: 600px){
        height: 0.65rem; 
    }
    @media(max-width: 500px){
        height: 0.6rem; 
    }
    @media(max-width: 370px){
        height: 0.6rem; 
    }
`

const StyledDiv = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
`

const StyledImg = styled.img`
    width: 1.1rem;
`


const ProductRating = ({ stars }) => {
    return (
        <StyledProductRatingDiv>
            <p style={{ color: 'white', fontWeight: 600, fontSize: '0.8rem', }}>{stars}</p>

            <StyledProductStarImg src={star_img} alt="star" />
        </StyledProductRatingDiv>
    )
}

const Feedback = ({ pid, review, review_images }) => {
    const navigate = useNavigate();

    // console.log("=================> pid, review, review_images = ", pid, review, review_images)

    if (review_images.length === 1) {
        // console.log("==============> review = ", review)
    }


    const { setorderreview, setorderreviewimages } = useContext(DataContext);


    const goToWriteReviewPage = () => {
        // console.log("=========> review = ", review, " and imgs = ", review_images)
        if (review !== "") {
            setorderreview(review);
            setorderreviewimages(review_images)
        }
        else {
            setorderreview(null);
            setorderreviewimages([]);
        }

        // console.log("=============> navigating, pid = ", pid)
        navigate(`/product/${pid}/write-review`)
    };


    if (review !== "") {
        // console.log("==============> insde feedback and setting edit review")
        return (
            <StyledDiv>

                <ProductRating stars={review.rating} />

                <p onClick={goToWriteReviewPage} style={{ fontSize: '1rem', fontWeight: 500, color: '#0532fc', cursor: "pointer" }}>
                    Edit review
                </p>

            </StyledDiv >
        )
    }

    else {
        // console.log("==============> insde feedback and setting nopo")
        return (
            <StyledDiv>

                <StyledImg src={feedback_img} alt="feedback" />

                <p onClick={goToWriteReviewPage} style={{ fontSize: '1rem', fontWeight: 500, color: '#056af7', cursor: "pointer" }}>
                    Rate and Review Product
                </p>

            </StyledDiv >
        )
    }
}

export default Feedback;