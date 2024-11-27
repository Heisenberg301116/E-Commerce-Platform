import { useContext, useState, useEffect, useRef } from "react";

import { DataContext } from "../../../../../context/DataProvider";

import styled from 'styled-components'

// redux
import { useDispatch, useSelector } from 'react-redux';
import { actionUpdateReviewRating } from '../../../../../redux/actions/reviewActions'
import { actionUserReviewFeedback } from '../../../../../redux/actions/userActions'

// images
import like_img from '../../images/like.png'
import like_blue_img from '../../images/like_blue.png'
import profile_img from '../../images/profile.png'
import date_img from '../../images/date.png'
import star_img from '../../images/star.png'

const StyledMainDiv = styled.div`
    overflow-y: auto;
    height: 100%;
    border-left: 2px solid #b5b7ba;
    font-size: 0.85rem;
    background-color: #edebeb;

    @media(max-width: 800px){
        overflow-y: hidden;
        border-left: none;
        height: auto;
    }
`

const StyledHeadlineDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem; align-items: center;
    justify-content: space-between;
    font-weight: 600; background-color: #dcf3f5;
    border-bottom: 2px solid #b5b7ba;
    padding: 0.8rem 0.5rem;

    @media(max-width: 800px){
        border-top: 2px solid #b5b7ba;
    }
`

const StyledProductRatingDiv = styled.div`
    background-color: #1e8543;
    padding: 0.03rem 0.18rem 0.1rem 0.18rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 0.1rem;
    font-size: 80%;

 
    @media(max-width: 400px){
        padding: 0.08rem 0.23rem 0.1rem 0.23rem;
        font-size: 0.7rem;        
    }
`
const StyledProductStarImg = styled.img`
    height: 0.5rem; 
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

const StyledLikeImg = styled.img`
    width: 0.9rem;

    &:hover{
        cursor: pointer;
    }
`

const StyledDislikeImg = styled.img`
    width: 0.9rem;
    transform: rotate(180deg);

    &:hover{
        cursor: pointer;
    }
`

const RightModal = () => {
    // Redux
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user)
    const { userInfo } = user

    const { userreview, setalert } = useContext(DataContext)

    ///////////////////////////////////////////////////////////////////////
    const [reviewobj, setreviewobj] = useState(userreview);
    const [liked, setliked] = useState(0);
    const [disliked, setdisliked] = useState(0);

    // ref
    const likedRef = useRef(0);
    const dislikedRef = useRef(0);

    useEffect(() => {
        // console.log("===============> obj = ", obj)
        setreviewobj(userreview)
        if (!userInfo) {
            return;
        }
        else {
            const hasMatching = userInfo.reviewsaction.find(item => item.review_id === userreview._id)

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
    }, [userreview])


    useEffect(() => {
        return (() => {
            if (userInfo) {
                const hasMatching = userInfo.reviewsaction.find(item => item.review_id === userreview._id)

                console.log("=========.> hasmatching = ", hasMatching)

                if (hasMatching === undefined) {     // if user has not previously liked or disliked the question
                    // console.log("==========> inside unmounitng")
                    if (likedRef.current === 1) {
                        console.log("==========> inside 1,1")
                        dispatch(actionUserReviewFeedback(userInfo._id, userreview._id, 'liked'));
                        dispatch(actionUpdateReviewRating(userreview._id, 1, 0))
                    }
                    else if (dislikedRef.current === 1) {
                        console.log("==========> inside 1,2")
                        dispatch(actionUserReviewFeedback(userInfo._id, userreview._id, 'disliked'));
                        dispatch(actionUpdateReviewRating(userreview._id, 0, 1))
                    }
                }
                else if (hasMatching.action === 'liked') {
                    if (dislikedRef.current === 1) {
                        console.log("==========> inside 2,1")
                        dispatch(actionUserReviewFeedback(userInfo._id, userreview._id, 'disliked'));
                        dispatch(actionUpdateReviewRating(userreview._id, -1, 1))
                    }
                    else if (dislikedRef.current === 0 && likedRef.current === 0) {
                        console.log("==========> inside 2,2")
                        dispatch(actionUserReviewFeedback(userInfo._id, userreview._id, 'remove'));
                        dispatch(actionUpdateReviewRating(userreview._id, -1, 0))
                    }
                }
                else if (hasMatching.action === 'disliked') {
                    if (likedRef.current === 1) {
                        console.log("==========> inside 3,1")
                        dispatch(actionUserReviewFeedback(userInfo._id, userreview._id, 'liked'));
                        dispatch(actionUpdateReviewRating(userreview._id, 1, -1))
                    }
                    else if (dislikedRef.current === 0 && likedRef.current === 0) {
                        console.log("==========> inside 3,2")
                        dispatch(actionUserReviewFeedback(userInfo._id, userreview._id, 'remove'));
                        dispatch(actionUpdateReviewRating(userreview._id, 0, -1))
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


    const formattedDate = new Date(userreview.date).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return (
        <StyledMainDiv>

            <StyledHeadlineDiv>

                <div style={{ display: 'flex', gap: '0.9rem', alignItems: 'center', flexWrap: 'wrap' }}>
                    <img src={profile_img} alt={"User"} style={{ width: '1.4rem', height: '1.2rem' }} />

                    <p style={{ fontStyle: 'italic', color: 'black' }}>{userreview.name}</p>

                    <StyledProductRatingDiv>
                        <p style={{ color: 'white', fontWeight: 600, }}>{userreview.rating.toFixed(1)}</p>

                        <StyledProductStarImg src={star_img} alt="Stars" />
                    </StyledProductRatingDiv>

                    <p style={{ fontWeight: 600, fontSize: '105%' }}>{userreview.title}</p>

                    <div style={{ display: 'flex', gap: '0.3rem', alignItems: 'center' }}>
                        <img src={date_img} alt={"Date Posted"} style={{ width: '1rem', height: '1rem' }} />

                        <p style={{ fontSize: '90%', color: '#666666', fontWeight: 500 }}>{formattedDate}</p>
                    </div>

                    <div style={{
                        display: 'flex', gap: '0.5rem', alignItems: 'end'
                    }}>
                        <div style={{
                            display: 'flex', gap: '0.2rem', alignItems: 'end',
                        }}>
                            <StyledLikeImg onClick={handleLike} src={liked === 1 ? like_blue_img : like_img} alt="Likes" />

                            <p style={{ fontWeight: 500, fontSize: '90%' }}>
                                {(reviewobj.likes + + liked).toLocaleString()}
                            </p>

                        </div>

                        <div style={{
                            display: 'flex', gap: '0.3rem', alignItems: 'end',
                        }}>
                            <StyledDislikeImg onClick={handleDislike} src={disliked === 1 ? like_blue_img : like_img} alt="Dislikes" />

                            <p style={{ fontWeight: 500, fontSize: '90%' }}>{(reviewobj.dislikes + disliked).toLocaleString()}
                            </p>
                        </div>
                    </div>

                </div>
            </StyledHeadlineDiv>

            <div style={{ padding: '0.2rem 1rem 1rem 1rem' }}>
                <p>{reviewobj.message}</p>
            </div>
        </StyledMainDiv >
    )
}

export default RightModal;