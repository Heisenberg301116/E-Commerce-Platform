import { useContext, useState, useEffect, useRef } from "react";
import { DataContext } from "../../../../context/DataProvider";
import styled from 'styled-components'

// redux
import { useDispatch, useSelector } from 'react-redux';
import { actionUpdateReviewRating } from '../../../../redux/actions/reviewActions'
import { actionUserReviewFeedback } from '../../../../redux/actions/userActions'

// images
import like_img from '../images/like.png'
import like_blue_img from '../images/like_blue.png'
import profile_img from '../images/profile.png'
import date_img from '../images/date.png'
import star_img from '../images/star.png'


const StyledProductRatingDiv = styled.div`
    background-color: #1e8543;
    padding: 0.15rem 0.3rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    // font-size: 0.77rem;

 
    @media(max-width: 400px){
        padding: 0.08rem 0.23rem 0.1rem 0.23rem;
        font-size: 0.7rem;        
    }
`
const StyledProductStarImg = styled.img`
    height: 0.65rem; 
    background-color: #1e8543;

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

const StyledImg = styled.img`
    width: 4.5rem;
    height: 4.5rem;
    box-sizing: border-box;
    background-color: #403e3f;
    padding:0.05rem;

    &:hover {
        transform: scale(1.04);
        cursor: pointer; 
    }

    @media(max-width:600px){
        width: 3rem;
        height: 3rem;
    }

    @media(max-width:300px){
        width: 2rem;
        height: 2rem;
    }    
`

const StyledLikeImg = styled.img`
    width: 1.3rem;

    &:hover{
        cursor: pointer;
    }
`

const StyledDislikeImg = styled.img`
    width: 1.3rem;
    transform: rotate(180deg);

    &:hover{
        cursor: pointer;
    }
`


function convertToHtmlString(plainString) {
    // Escape special HTML characters
    const escapedString = plainString
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');

    // Replace newlines with <br> tags
    const htmlString = escapedString.replace(/\n/g, '<br>');

    return htmlString;
}


const ReviewSection = ({ obj }) => {
    // Redux
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user)
    const { userInfo } = user

    ///////////////////////////////////////////////////////////////////////
    const [reviewobj, setreviewobj] = useState(obj);
    const [liked, setliked] = useState(0);
    const [disliked, setdisliked] = useState(0);

    // ref
    const likedRef = useRef(0);
    const dislikedRef = useRef(0);


    useEffect(() => {
        // console.log("===============> obj = ", obj)
        if (!userInfo) {
            return;
        }
        else {
            const hasMatching = userInfo.reviewsaction.find(item => item.review_id === obj._id)

            if (hasMatching?.action === 'liked') {
                likedRef.current = 1;
                setliked(1);
                setreviewobj((prev) => ({ ...prev, likes: prev.likes - 1 }))
            }
            else if (hasMatching?.action === 'disliked') {
                dislikedRef.current = 1;
                setdisliked(1);
                setreviewobj((prev) => ({ ...prev, dislikes: prev.dislikes - 1 }))
            }
        }
    }, [])


    useEffect(() => {
        return (() => {
            if (userInfo) {
                const hasMatching = userInfo.reviewsaction.find(item => item.review_id === obj._id)

                // console.log("=========.> hasmatching = ", hasMatching)

                if (hasMatching === undefined) {     // if user has not previously liked or disliked the question
                    // console.log("==========> inside unmounitng")
                    if (likedRef.current === 1) {
                        // console.log("==========> inside 1,1")
                        dispatch(actionUserReviewFeedback(userInfo._id, obj._id, 'liked'));
                        dispatch(actionUpdateReviewRating(obj._id, 1, 0))
                    }
                    else if (dislikedRef.current === 1) {
                        // console.log("==========> inside 1,2")
                        dispatch(actionUserReviewFeedback(userInfo._id, obj._id, 'disliked'));
                        dispatch(actionUpdateReviewRating(obj._id, 0, 1))
                    }
                }
                else if (hasMatching.action === 'liked') {
                    if (dislikedRef.current === 1) {
                        // console.log("==========> inside 2,1")
                        dispatch(actionUserReviewFeedback(userInfo._id, obj._id, 'disliked'));
                        dispatch(actionUpdateReviewRating(obj._id, -1, 1))
                    }
                    else if (dislikedRef.current === 0 && likedRef.current === 0) {
                        // console.log("==========> inside 2,2")
                        dispatch(actionUserReviewFeedback(userInfo._id, obj._id, 'remove'));
                        dispatch(actionUpdateReviewRating(obj._id, -1, 0))
                    }
                }
                else if (hasMatching.action === 'disliked') {
                    if (likedRef.current === 1) {
                        // console.log("==========> inside 3,1")
                        dispatch(actionUserReviewFeedback(userInfo._id, obj._id, 'liked'));
                        dispatch(actionUpdateReviewRating(obj._id, 1, -1))
                    }
                    else if (dislikedRef.current === 0 && likedRef.current === 0) {
                        // console.log("==========> inside 3,2")
                        dispatch(actionUserReviewFeedback(userInfo._id, obj._id, 'remove'));
                        dispatch(actionUpdateReviewRating(obj._id, 0, -1))
                    }
                }
            }
        })
    }, [])


    const handleLike = () => {
        if (!userInfo) {
            setalert({ colour: '#f78f0f', message: 'Please Login first !', fontcolor: 'black' })
        }
        else if (liked === 0) {
            likedRef.current = 1;
            dislikedRef.current = 0;

            setliked(1);
            setdisliked(0);
        }
        else {
            likedRef.current = 0;
            dislikedRef.current = 0;

            setliked(0);
            setdisliked(0);
        }
    }

    const handleDislike = () => {
        if (!userInfo) {
            setalert({ colour: '#f78f0f', message: 'Please Login first !', fontcolor: 'black' })
        }
        else if (disliked === 0) {
            likedRef.current = 0;
            dislikedRef.current = 1;

            setliked(0);
            setdisliked(1);
        }
        else {
            likedRef.current = 0;
            dislikedRef.current = 0;

            setliked(0);
            setdisliked(0);
        }
    }
    ///////////////////////////////////////////////////////////////////////

    // console.log("====================> obj = ", obj)   

    const { setImgmodalInfo, setalert, loggedin } = useContext(DataContext)


    const formattedDate = new Date(reviewobj.date).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const handleImgClick = (index) => {
        setImgmodalInfo({
            'images_arr': reviewobj.images,
            'img_index': index,
            'all_images_arr': null,
            'all_img_index': null
        })
    }

    return (
        <>
            <div style={{ padding: '0rem' }}>

                <div style={{ margin: '0rem 0 1rem 0', display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', justifyContent: 'space-between', fontWeight: 600, fontSize: '1.0rem', backgroundColor: '#dcf3f5', padding: '1rem', border: '2px solid #b5b7ba', borderLeft: 'none', borderRight: 'none' }}>


                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                            <img src={profile_img} alt={"User"} style={{ width: '1.4rem', height: '1.4rem' }} />

                            <p style={{ fontStyle: 'italic', color: 'black' }}>{reviewobj.name}</p>
                        </div>

                        <StyledProductRatingDiv>
                            <p style={{ color: 'white', fontWeight: 600, fontSize: '0.9rem', }}>{reviewobj.rating.toFixed(1)}</p>

                            <StyledProductStarImg src={star_img} alt="Stars" />
                        </StyledProductRatingDiv>

                        <p style={{ fontWeight: 600, fontSize: '110%' }}>{reviewobj.title}</p>
                    </div>


                    <div style={{
                        display: 'flex', gap: '1.5rem', alignItems: 'center',
                        fontSize: '1rem',
                    }}>

                        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '2rem' }}>
                            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                <img src={date_img} alt={"Date Posted"} style={{ width: '1.4rem', height: '1.4rem' }} />

                                <p style={{ fontSize: '90%', color: '#666666', fontWeight: 500 }}>{formattedDate}</p>
                            </div>

                            <div style={{
                                display: 'flex', gap: '0.3rem', alignItems: 'end',
                            }}>
                                <StyledLikeImg onClick={handleLike} src={liked === 1 ? like_blue_img : like_img} alt="Likes" />

                                <p style={{ fontWeight: 500 }}>
                                    {(reviewobj.likes + liked).toLocaleString()}
                                </p>

                            </div>

                            <div style={{
                                display: 'flex', gap: '0.3rem', alignItems: 'end',
                            }}>
                                <StyledDislikeImg onClick={handleDislike} src={disliked === 1 ? like_blue_img : like_img} alt="Dislikes" />

                                <p style={{ fontWeight: 500 }}>{(reviewobj.dislikes + disliked).toLocaleString()}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>


                <div style={{ padding: '0rem 1rem 1.2rem 1rem' }}>
                    <div style={{ display: 'flex', gap: '0.9rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                        {reviewobj.images.map((img_path, index) => (
                            <StyledImg onClick={() => handleImgClick(index)} key={index} src={require(`../../../${img_path}`)} alt="product" />
                        ))}
                    </div>

                    <p dangerouslySetInnerHTML={{ __html: convertToHtmlString(reviewobj.message) }} />
                </div>

            </div >
        </>
    )
}

export default ReviewSection;