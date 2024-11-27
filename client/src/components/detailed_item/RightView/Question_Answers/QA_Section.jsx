import { useState, useEffect, useContext, useRef } from 'react'
import { DataContext } from "../../../../context/DataProvider";
import styled from 'styled-components'

// redux
import { useDispatch, useSelector } from 'react-redux';
import { actionUpdateQuestionRating } from '../../../../redux/actions/questionActions'
import { actionUserQAFeedback } from '../../../../redux/actions/userActions'

// images
import like_img from '../images/like.png'
import like_blue_img from '../images/like_blue.png'

const StyledGridDiv = styled.div`
    display: grid;
    grid-template-columns: 80% auto;    
    gap: 2rem;
    justify-items: stretch;
    
    @media(max-width: 800px){
        grid-template-columns: 75% auto;
    }

    @media(max-width: 800px){
        grid-template-columns: 65% auto;
    }

    @media(max-width: 400px){
        grid-template-columns: auto;
    }
`

const StyledP = styled.p`
    font-size: 1rem;
    font-weight: 500;

    @media(max-width: 600px){
        width: 1rem;
        font-size: 0.8rem;
    }
`

const StyledLikeImg = styled.img`
    width: 1.3rem;

    &:hover{
        cursor: pointer;
    }

    @media(max-width: 600px){
        width: 1rem;
    }
`

const StyledDislikeImg = styled.img`
    width: 1.3rem;
    transform: rotate(180deg);

    &:hover{
        cursor: pointer;
    }

    @media(max-width: 600px){
        width: 1rem;
    }
`

const QASection = ({ obj }) => {
    // Redux
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user)
    const { userInfo } = user

    const { setalert, productdetail } = useContext(DataContext)

    const [qaobj, setqaobj] = useState(obj);
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
            const hasMatching = userInfo.QaAction.find(item => item.question_id === obj._id)

            if (hasMatching?.action === 'liked') {
                likedRef.current = 1;
                setliked(1);
                setqaobj((prev) => ({ ...prev, likes: prev.likes - 1 }))
            }
            else if (hasMatching?.action === 'disliked') {
                dislikedRef.current = 1;
                setdisliked(1);
                setqaobj((prev) => ({ ...prev, dislikes: prev.dislikes - 1 }))
            }
        }
    }, [])


    useEffect(() => {
        return (() => {
            // console.log("==========> inside unmounitng and obj ")

            if (userInfo) {
                const hasMatching = userInfo.QaAction.find(item => item.question_id === obj._id)

                // console.log("=========.> hasmatching = ", hasMatching)

                if (hasMatching === undefined) {     // if user has not previously liked or disliked the question
                    // console.log("==========> inside unmounitng")
                    if (likedRef.current === 1) {
                        // console.log("==========> inside 1,1")
                        dispatch(actionUserQAFeedback(userInfo._id, productdetail._id, obj._id, 'liked'));
                        dispatch(actionUpdateQuestionRating(obj._id, 1, 0))
                    }
                    else if (dislikedRef.current === 1) {
                        // console.log("==========> inside 1,2")
                        dispatch(actionUserQAFeedback(userInfo._id, productdetail._id, obj._id, 'disliked'));
                        dispatch(actionUpdateQuestionRating(obj._id, 0, 1))
                    }
                }
                else if (hasMatching.action === 'liked') {
                    if (dislikedRef.current === 1) {
                        // console.log("==========> inside 2,1")
                        dispatch(actionUserQAFeedback(userInfo._id, productdetail._id, obj._id, 'disliked'));      // update not add !!!
                        dispatch(actionUpdateQuestionRating(obj._id, -1, 1))
                    }
                    else if (dislikedRef.current === 0 && likedRef.current === 0) {
                        // console.log("==========> inside 2,2")
                        dispatch(actionUserQAFeedback(userInfo._id, productdetail._id, obj._id, 'remove'));      // remove the feedback
                        dispatch(actionUpdateQuestionRating(obj._id, -1, 0))
                    }
                }
                else if (hasMatching.action === 'disliked') {
                    if (likedRef.current === 1) {
                        // console.log("==========> inside 3,1")
                        dispatch(actionUserQAFeedback(userInfo._id, productdetail._id, obj._id, 'liked'));      // update not add !!!
                        dispatch(actionUpdateQuestionRating(obj._id, 1, -1))
                    }
                    else if (dislikedRef.current === 0 && likedRef.current === 0) {
                        // console.log("==========> inside 3,2")
                        dispatch(actionUserQAFeedback(userInfo._id, productdetail._id, obj._id, 'remove'));      // remove the feedback
                        dispatch(actionUpdateQuestionRating(obj._id, 0, -1))
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

    return (
        <div style={{ padding: '0.8rem', borderBottom: '2px solid #b5b7ba' }}>

            <p style={{ fontWeight: 500 }}>Q: {qaobj.question}</p>

            <StyledGridDiv>

                <p style={{ fontWeight: 400, marginTop: '0.2rem', padding: '0.4rem 0 0 0', color: '#3d3d3d' }}>A: {qaobj.answer}</p>


                <div style={{
                    display: 'flex', gap: '1.5rem', alignItems: 'end', justifyContent: 'end',
                    fontSize: '1rem',
                }}>

                    <div style={{
                        display: 'flex', gap: '0.3rem', alignItems: 'end',
                    }}>
                        <StyledLikeImg onClick={handleLike} src={liked === 1 ? like_blue_img : like_img} alt="Likes" />

                        <StyledP style={{ fontWeight: 500 }}>
                            {(qaobj.likes + liked).toLocaleString()}
                        </StyledP>

                    </div>

                    <div style={{
                        display: 'flex', gap: '0.3rem', alignItems: 'end',
                    }}>
                        <StyledDislikeImg onClick={handleDislike} src={disliked === 1 ? like_blue_img : like_img} alt="Dislikes" />

                        <StyledP>
                            {(qaobj.dislikes + disliked).toLocaleString()}
                        </StyledP>
                    </div>
                </div>
            </StyledGridDiv>
        </div>
    )
}

export default QASection;