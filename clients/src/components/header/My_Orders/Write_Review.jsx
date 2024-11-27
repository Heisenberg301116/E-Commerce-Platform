import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../../context/DataProvider";
import { useParams } from "react-router-dom";
import styled from 'styled-components'

// redux
import { useDispatch, useSelector } from 'react-redux';
import { actionUpdateProductRating } from '../../../redux/actions/productActions'
import { actionAddUpdateUserReview, actionAddUpdateUserReviewImgs, actionDeleteImagesFromCloudinary, actionUploadImagesToCloudinary, actionReviewStateReset } from '../../../redux/actions/reviewActions'

// images
import spinner_gif from '../images/spinner.gif'

// components
import UploadImages from './UploadImages'

const StyledReviewForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  margin: 0.1rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
`

const StyledRatingDiv = styled.div`
    display: flex;
    gap: 0.8rem;
    align-items: center;
`

const RatingStars = styled.div`
  display: flex;
  gap: 0.5rem;
  cursor: pointer;
  align-items: center;

  .star {
    font-size: 2.2rem;
    color: #a405fa;
  }
`

const StyledP = styled.p`
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 0;    
`

const StyledInput = styled.input`
  padding: 0.7rem;
  font-size: 1.1rem;
  font-weight: 500;
  border: 2px solid silver;
  border-radius: 4px;
`

const StyledTextarea = styled.textarea`
  padding: 0.7rem;
  font-size: 15px;
  font-weight: 400;
  border: 2px solid silver;
  border-radius: 4px;
  resize: vertical;
  line-height: 1.4;

  @media(max-width: 1000px){
    font-size: 14px;
  }
`

const SubmitButton = styled.button`
  padding: 1rem;
  font-size: 1.15rem;
  background-color: #05b305;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: auto;

  &:hover {
    background-color: #049a04;
  }
`

const color_mapping = {
    '1': '#f72a2a',
    '2': '#fc6603',
    '3': '#04a0d4',
    '4': '#0707f7',
    '5': '#03993a'
}

const text_mapping = {
    '1': 'Very Bad',
    '2': 'Bad',
    '3': 'Good',
    '4': 'Very Good',
    '5': 'Excellent'
}

const getFormattedDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};


const WriteReview = () => {
    // Redux
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user)
    const { userInfo } = user
    const review = useSelector((state) => state.review)
    const { isLoading, add_update_user_review, uploaded_imgs_urls, add_update_user_imgs, delete_user_imgs } = review

    const { setalert, orderreview, setorderreview, orderreviewimages, setorderreviewimages } = useContext(DataContext);

    // console.log("============> inside useeffect 1 and reviewimgs = ", orderreviewimages)

    // const [updatedReview, setUpdatedReview] = useState(orderreview);
    // const [updatedReviewImgs, setUpdatedReviewImgs] = useState(orderreviewimages);

    const { id } = useParams();     // Product ID

    const [hoverRating, setHoverRating] = useState(0);

    const [rating, setRating] = useState(orderreview === null ? 0 : orderreview.rating.toString());
    const [title, setTitle] = useState(orderreview === null ? '' : orderreview.title);
    const [description, setDescription] = useState(orderreview === null ? '' : orderreview.message);
    const [imagesArr, setImagesArr] = useState(orderreviewimages === null ? [] : orderreviewimages);
    const [uploadedimages, setuploadedimages] = useState([]);
    const [deleteImgsArr, setdeleteImgsArr] = useState([]);

    const [loadingReview, setloadingReview] = useState(null);
    const [loadingReviewImgs, setloadingReviewImgs] = useState(null);
    const [isImgsDeleted, setisImgsDeleted] = useState(null);

    const handleStarClick = (value) => {
        setRating(value.toString());
    };

    const handleStarMouseEnter = (value) => {
        setHoverRating(value);
    };

    const handleStarMouseLeave = () => {
        setHoverRating(0);
    };

    useEffect(() => {
        if ((loadingReview === false || loadingReview === false === null) && (loadingReviewImgs === false || loadingReviewImgs === null) && (isImgsDeleted === false || isImgsDeleted === null)) {
            setalert({ colour: '#1cba34', message: 'Review Submitted !' })
            setloadingReview(null);
            setloadingReviewImgs(null);
            setisImgsDeleted(null);
        }
    }, [loadingReview, loadingReviewImgs, isImgsDeleted])

    useEffect(() => {
        if (add_update_user_imgs !== null) {
            setloadingReviewImgs(false)
            dispatch(actionReviewStateReset(['ADD_UPDATE_USER_IMGS_RESET']))
        }
    }, [add_update_user_imgs])

    useEffect(() => {
        if (delete_user_imgs !== null) {
            setisImgsDeleted(false)
            dispatch(actionReviewStateReset(['DELETE_IMAGES_RESET']))
        }
    }, [delete_user_imgs])

    useEffect(() => {
        if (add_update_user_review) {
            // console.log("============> inside useeffect 1 and add_update_user_review = ", add_update_user_review)

            setorderreview((prev) => ({ ...prev, title: title, rating: Number(rating), message: description }))

            setloadingReview(false);

            dispatch(actionReviewStateReset(['ADD_UPDATE_USER_REVIEW_RESET']))
        }
    }, [add_update_user_review, title, rating, description])


    useEffect(() => {
        if (uploaded_imgs_urls !== null) {
            // console.log("================> inside useeffect 2 and uploaded urls = ", uploaded_imgs_urls)

            const new_imgs_arr = [...imagesArr, ...uploaded_imgs_urls]
            dispatch(actionAddUpdateUserReviewImgs(id, userInfo._id, new_imgs_arr))

            setImagesArr(new_imgs_arr)
            setuploadedimages([]);
            setorderreviewimages(new_imgs_arr)

            dispatch(actionReviewStateReset(['UPLOAD_IMAGES_RESET']))
        }
    }, [uploaded_imgs_urls, imagesArr])

    const handleImageUpload = () => {
        // console.log("============> inside handleImageUpload and uploadedimages = ", uploadedimages)
        const formData = new FormData();

        // Append each file to the FormData object
        uploadedimages.forEach((file) => {
            // console.log("================> file = ", file)
            formData.append('images', file);
        });

        dispatch(actionUploadImagesToCloudinary(formData))
    };


    const handleSubmit = (e) => {
        if (rating === 0) {
            setalert({ colour: '#f71505', message: 'Please rate the product !' })
            return;
        }

        e.preventDefault();

        if (uploadedimages.length > 0) {
            setloadingReviewImgs(true)
            // console.log("============> handling uploads")
            handleImageUpload();
        }
        else if (imagesArr !== orderreviewimages) {
            setloadingReviewImgs(true);
            // console.log("============> no img uploaded, only removed")
            setorderreviewimages(imagesArr)
            dispatch(actionAddUpdateUserReviewImgs(id, userInfo._id, imagesArr))
        }

        if (orderreview !== null && (rating !== orderreview.rating.toString() || description !== orderreview.message || title !== orderreview.title)) {
            setloadingReview(true);
            // console.log("============> modifying textual content")
            dispatch(actionAddUpdateUserReview(id, userInfo._id, userInfo.name, (new Date()).toISOString(), Number(rating), 0, 0, title, description))
        }
        else if (orderreview === null && (rating !== 0 || description !== "" || title !== "")) {
            setloadingReview(true);
            // console.log("============> modifying textual content")
            dispatch(actionAddUpdateUserReview(id, userInfo._id, userInfo.name, (new Date()).toISOString(), Number(rating), 0, 0, title, description))
        }

        if (deleteImgsArr.length > 0) {
            // console.log("============> deleting removed ones from database")
            setdeleteImgsArr([]);
            setisImgsDeleted(true);
            dispatch(actionDeleteImagesFromCloudinary(deleteImgsArr))
        }
    };


    return (
        <>
            {(loadingReview !== null || loadingReviewImgs !== null || isImgsDeleted !== null) && <img src={spinner_gif} style={{ width: '5rem', height: '5rem', position: 'fixed', top: '5px', left: '50%', zIndex: '6' }} />}

            <StyledReviewForm>
                <h1 style={{ margin: 'auto' }}>Write a Review</h1>

                <StyledRatingDiv>

                    <h2>Rating: </h2>

                    <RatingStars>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                className="star"
                                onClick={() => handleStarClick(star)}
                                onMouseEnter={() => handleStarMouseEnter(star)}
                                onMouseLeave={handleStarMouseLeave}
                                style={{ color: hoverRating >= star ? color_mapping[hoverRating] : color_mapping[rating] }}
                            >
                                {hoverRating >= star || Number(rating) >= star ? '★' : '☆'}
                            </span>
                        ))}
                    </RatingStars>

                    {rating !== 0 && <StyledP style={{ color: color_mapping[rating] }}>
                        {text_mapping[rating]}
                    </StyledP>}

                </StyledRatingDiv>

                <StyledInput
                    type="text"
                    placeholder="Title of your review (optional)"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <StyledTextarea
                    rows="15"
                    placeholder="Describe the product (optional)"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <UploadImages imagesArr={imagesArr} setImagesArr={setImagesArr} uploadedimages={uploadedimages} setuploadedimages={setuploadedimages} setdeleteImgsArr={setdeleteImgsArr} />

                {orderreview === null ?
                    rating !== 0 || description !== "" || title !== "" || imagesArr !== orderreviewimages || uploadedimages.length > 0 ?
                        <SubmitButton onClick={handleSubmit}>
                            Submit
                        </SubmitButton>
                        :
                        <SubmitButton style={{ opacity: '0.7', backgroundColor: 'grey', cursor: 'not-allowed' }} >
                            Submit
                        </SubmitButton>

                    :

                    rating !== orderreview.rating.toString() || description !== orderreview.message || title !== orderreview.title || imagesArr !== orderreviewimages || uploadedimages.length > 0 ?
                        <SubmitButton onClick={handleSubmit}>
                            Submit
                        </SubmitButton>
                        :
                        <SubmitButton style={{ opacity: '0.7', backgroundColor: 'grey', cursor: 'not-allowed' }} >
                            Submit
                        </SubmitButton>

                }


            </StyledReviewForm>
        </>
    );
};

export default WriteReview;