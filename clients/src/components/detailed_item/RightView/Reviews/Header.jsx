import styled from 'styled-components'
import { useState, useEffect, useContext } from 'react'
import { DataContext } from "../../../../context/DataProvider";

// images
import star_black_img from '../images/star_black.png'
import spinner_gif from '../../../header/images/spinner.gif'

// redux
import { useDispatch, useSelector } from 'react-redux';
import { actionFetchReviewsImgs, actionReviewStateReset } from '../../../../redux/actions/reviewActions'

// remove it later
import { AllReviewPhotos } from '../../../../constants/demo/all_review_photos'        // import it into displaysomeimages component
import { ReviewsData } from '../../../../constants/demo/reviews_data'     // import it into displaysomeimages component

const star_line_mapping = {
    '1': '#f72a2a',
    '2': '#f28511',
    '3': '#14cce0',
    '4': '#166af2',
    '5': '#04b559'
}


const StyledFlexDiv = styled.div`
    display: flex;
    padding: 1rem 1rem 0 1rem;
    gap: 2.5rem;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`

const StyledImg = styled.img`
    width: 5rem;
    height: 5rem; 
    border: 2px solid #020266;    

    &:hover {
        transform: scale(1.04);
        cursor: pointer; 
    }

    @media(max-width:600px){
        width: 4rem;
        height: 4rem;
    }

    @media(max-width:300px){
        width: 3rem;
        height: 3rem;
    }
`

const StyledOverlayDiv = styled.div`
    font-weight: 500;
    font-size: 1.1rem;
    width: 100%;
    text-align: center; 
    position: absolute; 
    bottom: 42%;
    left: 0%; 
    color: white;

    @media(max-width:600px){
        font-size: 0.9rem;
    }

    @media(max-width:300px){
        font-size: 0.7rem;
    }
`

const StarLines = () => {
    const { productdetail } = useContext(DataContext)

    return (
        <div>
            {Object.entries(productdetail.stars).map(([star_num, total_stars], index) => {
                const line_width = (total_stars / productdetail.total_ratings) * 100;

                const line_color = star_line_mapping[star_num];


                return (
                    <div key={index} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'start' }}>
                        <p style={{ fontWeight: 500 }}>{star_num}</p>

                        <img src={star_black_img} alt="Stars" style={{ width: '0.7rem', }} />

                        <span style={{
                            width: '11rem', height: "5px", backgroundColor: '#e3e3e3', display: 'inline-block',
                            borderRadius: '4px', position: 'relative'
                        }}>
                            <span style={{
                                width: `${line_width}%`, height: "100%", backgroundColor: line_color,
                                borderRadius: '4px', display: 'inline-block', position: 'absolute', top: 0, left: 0
                            }}>
                            </span>
                        </span>

                        <p style={{ color: '#575757', fontStyle: 'italic' }}>{total_stars.toLocaleString()}</p>
                    </div>
                )
            })}
        </div>
    )
}

const OtherRatings = () => {
    const { productdetail } = useContext(DataContext)

    return (
        Object.keys(productdetail.other_ratings).length > 0

            ?

            <div style={{ display: "flex", flexDirection: 'row', alignItems: 'center', gap: '2rem', flexWrap: 'wrap', justifyContent: 'start' }}>
                {Object.entries(productdetail.other_ratings).map(([Field, Rating], index) => {
                    const ratio1 = (Rating / 5) * 100;
                    const ratio2 = 100 - ratio1;
                    const RoundedRating = Math.floor(Rating)
                    const stroke_color = star_line_mapping[RoundedRating]

                    return (
                        <div key={index} style={{ display: "flex", flexDirection: 'column', alignItems: 'center', gap: '0.2rem', flexWrap: 'wrap' }}>
                            <svg width="60" height="60" viewBox="0 0 36 36">
                                <circle
                                    cx="18"
                                    cy="18"
                                    r="15.9155"
                                    fill="transparent"
                                    stroke="#edf0f5"
                                    strokeWidth="3"
                                    strokeDasharray="100, 0"

                                />
                                <circle
                                    cx="18"
                                    cy="18"
                                    r="15.9155"
                                    fill="transparent"
                                    stroke={stroke_color}
                                    strokeWidth="3"
                                    strokeDasharray={`${ratio1}, ${ratio2}`}
                                    strokeDashoffset="25"
                                    strokeLinecap="round"
                                />

                                <text
                                    x="50%"
                                    y="50%"
                                    dominantBaseline="middle"
                                    textAnchor="middle"
                                    fontSize="10"
                                    fill="black"
                                    fontWeight="500"
                                >
                                    {Rating.toFixed(1)}
                                </text>
                            </svg>


                            <p style={{ fontWeight: 500 }}>{Field}</p>
                        </div>
                    )
                })}
            </div>


            :

            null
    )
}


const DisplaySomeImages = () => {
    // Redux
    const dispatch = useDispatch();
    const review = useSelector((state) => state.review)
    const { reviews_imgs_modal, isLoading } = review

    const { productdetail, setshowallimagesgrid } = useContext(DataContext)

    const [someimages, setsomeimages] = useState(null)

    const handleImgClick = () => {
        setshowallimagesgrid(AllReviewPhotos)
    }

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const updateScreenWidth = () => {
        setScreenWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', updateScreenWidth);

        dispatch(actionFetchReviewsImgs(productdetail._id, 0, 50, "most-helpful"))

        return () => window.removeEventListener('resize', updateScreenWidth);
    }, []);



    useEffect(() => {
        if (reviews_imgs_modal) {
            // console.log("===============> someimages = ", someimages)
            setsomeimages(reviews_imgs_modal)
            // console.log("===============> reviews_imgs_moddal = ", reviews_imgs_modal)
            dispatch(actionReviewStateReset(['REVIEWS_IMGS_RESET']))
        }
    }, [reviews_imgs_modal])



    let max_imgs_limit, imgs_count = 0;


    if (screenWidth >= 1400)
        max_imgs_limit = 8;
    else if (screenWidth >= 1250)
        max_imgs_limit = 5;
    else if (screenWidth > 950)
        max_imgs_limit = 4;
    else if (screenWidth > 650)
        max_imgs_limit = 6;
    else if (screenWidth > 400)
        max_imgs_limit = 4;
    else
        max_imgs_limit = 3;


    return (
        <>
            {isLoading && <img src={spinner_gif} style={{ width: '5rem', height: '5rem', position: 'fixed', top: '5px', left: '50%', zIndex: '6' }} />}

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                {
                    someimages?.map((obj, obj_index) => {
                        return obj.review_images.map((img_path, img_index) => {
                            imgs_count++;

                            if (imgs_count > max_imgs_limit) {
                                return null;
                            }
                            else if (imgs_count === max_imgs_limit) {
                                const left_images = productdetail.total_review_images - max_imgs_limit + 1;

                                // console.log("===========> left images = ", left_images, "  and total review images = ", productdetail.total_review_images, " and max_imgs_limit = ", max_imgs_limit)

                                return (
                                    <div onClick={handleImgClick} key={`${obj_index}_${img_index}`} style={{ position: 'relative', cursor: 'pointer' }}>
                                        <StyledImg src={require(`../../../${img_path}`)} alt="Product image" style={{ filter: 'brightness(0.3)' }} />

                                        <StyledOverlayDiv>
                                            +{left_images.toLocaleString()}
                                        </StyledOverlayDiv>
                                    </div>
                                )
                            }
                            else {
                                return (
                                    <StyledImg onClick={handleImgClick} key={`${obj_index}_${img_index}`} src={require(`../../../${img_path}`)} alt="Product image" />
                                );
                            }
                        })
                    }
                    )
                }
            </div>
        </>
    )
}



const ReviewsHeader = () => {
    const { productdetail } = useContext(DataContext)
    // console.log("===============> productdetail = ", productdetail)

    return (
        <div style={{ marginBottom: '2rem' }}>
            <StyledFlexDiv>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', justifyContent: 'center' }}>
                        <p style={{ fontSize: '1.7rem', fontWeight: 500 }}>{productdetail.average_stars.toFixed(1)}</p>

                        <img src={star_black_img} alt="Stars" style={{ width: '1.5rem', }} />
                    </div>

                    <p style={{ color: '#787777', textAlign: 'center', fontWeight: 500 }}>{productdetail.total_ratings.toLocaleString()} Ratings & {productdetail.total_reviews.toLocaleString()} Reviews</p>
                </div>

                <StarLines />

                <OtherRatings />

                <DisplaySomeImages />

            </StyledFlexDiv>
        </div >
    )
}

export default ReviewsHeader;