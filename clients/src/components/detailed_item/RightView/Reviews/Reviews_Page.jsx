import { useState, useContext, useEffect, useRef } from 'react'
import { useParams, Link, useNavigate } from "react-router-dom";
import { DataContext } from "../../../../context/DataProvider";
import styled from 'styled-components';

// components
import ReviewsHeader from './Header'
import ReviewSection from './Review_Section'
import ImageModal from "./Image_Modal";
import AllImagesGrid from './Multi_Image_Modal/All_Images_Grid';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { actionFetchReviews, actionReviewStateReset } from '../../../../redux/actions/reviewActions'

// images
import spinner_gif from '../../../header/images/spinner.gif'

const StyledMainDiv = styled.div`
    display: flex;
    margin-bottom: 0.5rem;
    box-sizing: border-box; 
`

const StyledLeftDiv = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'stickyTop'
})`
    flex-shrink: 0;
    height: 87.9vh;
    width: 30%;
    position: sticky;
    top: ${(props) => props.stickyTop}px;
    box-sizing: border-box; 
    border: 2px solid silver;
    border-right: none;
    background-color: #f6f7f5;
    overflow-y: auto; 
    overflow-x: hidden;

    @media(max-width: 900px){
        display: none;
    }
`

const StyledRightDiv = styled.div`
    flex-shrink: 0;
    box-sizing: border-box;
    border: 2px solid silver;
    width: 70%;

    @media(max-width: 900px){
        width: 100%;        
    }
`

const Styledh2 = styled.h2`
    margin: 1rem 0;
    font-size: 1.6rem;
    text-align: center;

    
    @media(max-width: 400px){
        font-size: 1.5rem;
    }
    @media(max-width: 300px){
        font-size: 1.4rem;
    }
`

const StyledSelect = styled.select`
    padding: 0 0 0 0.1rem;
    height: 2.5rem;
    font-size: 1rem;
    border: 2px solid silver;
    border-radius: 5px;
    background-color: white;
    color: #333;
    outline: none;
    cursor: pointer;    

    &:focus {
        border-color: #007BFF;
    }

    &:hover {
        border-color: #007BFF;
    }

    option {
        background: #fff;
        color: #333;
        padding: 10rem;
    }
`;

const StyledLink = styled(Link)`
    color: ${(props) => props.curr_page === "true" ? 'white' : 'blue'};
    background-color: ${(props) => props.curr_page === "true" ? 'blue' : 'none'};
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 500;
    width: 2rem;
    height: 2rem;
    text-align: center;
    line-height: 2rem;
    border-radius: 50%;

    &:hover {
        color: ${(props) => props.curr_page === "true" ? 'white' : 'red'};
    }
`;


const ReviewsPage = () => {
    // Redux
    const dispatch = useDispatch();
    const review = useSelector((state) => state.review)
    const { reviews, isLoading } = review

    const nav = useNavigate();
    const { id, page: pageString } = useParams();
    const page = parseInt(pageString, 10);


    const [stickyTop, setStickyTop] = useState(0);      // height from top of sticky Left View
    const [currentReviews, setCurrentReviews] = useState([]);
    const [sortmethod, setsortmethod] = useState('most-helpful');
    const [totalPages, settotalPages] = useState(null);

    const { imgmodalInfo, showallimagesgrid, productdetail, setproductdetail } = useContext(DataContext)

    const RefLeftView = useRef(null);

    // Pagination
    const limit = 5;
    // const reviewsPerPage = 1;
    const totnavpages = 3;  // total next or previous pages to display at the bottom in the pages navbar

    ///////////////////////////////////////////////////////////////////////
    useEffect(() => {
        // console.log("=================> productdetail = ", productdetail)
        const total_pages = Math.ceil(productdetail.total_reviews / limit);
        settotalPages(total_pages);
    }, [])


    useEffect(() => {
        // console.log("================> inside useEffect of 1")
        const skip = (page - 1) * limit;
        if (skip > productdetail.total_reviews) {
            return;
        }

        dispatch(actionFetchReviews(productdetail._id, skip, limit, sortmethod))
    }, [page, sortmethod]);


    useEffect(() => {
        if (reviews) {
            // console.log("================> inside useEffect of 2 and questions = ", questions)
            setCurrentReviews(reviews)
            window.scrollTo(0, 0);
            dispatch(actionReviewStateReset(['REVIEWS_RESET']))
        }
    }, [reviews])


    const handleSortingChange = (event) => {
        setsortmethod(event.target.value);
        setCurrentReviews([]);
        nav(`/product/${productdetail._id}/reviews/1`)
        // navigate(`/product/${id}/1`);
    }
    ///////////////////////////////////////////////////////////////////////

    useEffect(() => {
        // Function to set the top dynamically based on header height
        const updateStickyTop = () => {
            const header = document.getElementById('header');
            if (header) {
                const headerHeight = header.offsetHeight;
                setStickyTop(headerHeight); // Set the top to the header's height
            }
        };

        // Call the function once to set the initial value
        updateStickyTop();

        // Add a resize event listener to update the sticky top when window size changes
        window.addEventListener('resize', updateStickyTop);

        return () => {
            // Clean up the event listener
            window.removeEventListener('resize', updateStickyTop);
        };
    }, []);


    return (
        <>
            {isLoading && <img src={spinner_gif} style={{ width: '5rem', height: '5rem', position: 'fixed', top: '5px', left: '50%', zIndex: '6' }} />}

            <div style={{ padding: '0 0.1rem 0 0.1rem' }}>

                <StyledMainDiv>

                    <StyledLeftDiv stickyTop={stickyTop} ref={RefLeftView}>

                        {productdetail !== null && <ReviewsHeader />}

                    </StyledLeftDiv>

                    <StyledRightDiv>

                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>

                            <Styledh2>Ratings & Reviews</Styledh2>

                            <StyledSelect value={sortmethod} onChange={handleSortingChange}>
                                <option value="most-helpful">Most Helpful</option>
                                <option value="most-recent">Most Recent</option>
                                <option value="least-recent">Least Recent</option>
                                <option value="positive-first">Positive First</option>
                                <option value="negative-first">Negative First</option>
                            </StyledSelect>
                        </div>

                        {
                            currentReviews.map((obj, index) => (
                                <ReviewSection key={index} obj={obj} />
                            ))
                        }

                        <hr style={{ border: '1px solid silver' }} />

                        <nav style={{ display: 'flex', fontSize: '1.2rem', margin: '0.5rem 0', gap: '1.5rem', justifyContent: 'center' }}>

                            {Array.from({ length: totnavpages }, (_, index) => totnavpages - index - 1)  // Calculate reverse index directly
                                .map((reverseIndex) => {
                                    if (page - reverseIndex - 1 <= 0) {
                                        return null;
                                    }
                                    else {
                                        return (
                                            <StyledLink key={reverseIndex} to={`/product/${id}/reviews/${page - reverseIndex - 1}`}>
                                                {page - reverseIndex - 1}
                                            </StyledLink>
                                        );
                                    }
                                })}


                            <StyledLink curr_page="true" to={`/product/${id}/reviews/${page}`}>{page}</StyledLink>


                            {Array.from({ length: totnavpages }, (_, index) => {
                                if (page + index + 1 > totalPages) {
                                    return null;
                                }
                                else {
                                    return (
                                        <StyledLink key={index} to={`/product/${id}/reviews/${page + index + 1}`}>
                                            {page + index + 1}
                                        </StyledLink>
                                    );
                                }
                            })}

                        </nav>

                    </StyledRightDiv>
                </StyledMainDiv >


                {showallimagesgrid && <AllImagesGrid total_images={productdetail.total_review_images} />}

                {imgmodalInfo !== null && <ImageModal />}
            </div>
        </>
    )
}

export default ReviewsPage;