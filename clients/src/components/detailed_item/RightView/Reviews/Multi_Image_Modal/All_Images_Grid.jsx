import { useContext, useRef, useEffect, useState } from "react";
import { DataContext } from "../../../../../context/DataProvider";
import styled from 'styled-components'

// images
import spinner_gif from '../../../../header/images/spinner.gif'

// redux
import { useDispatch, useSelector } from 'react-redux';
import { actionFetchReviewsImgs, actionReviewStateReset } from '../../../../../redux/actions/reviewActions'

// components
import close_img from '../../images/cancel.png'
import LeftModal from "./Left_Modal";
import RightModal from "./Right_Modal";


const StyledMainDiv = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'showscroll'
})`
    position: fixed;
    height: 75vh;
    width: 65vw;        
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding-right: 0rem;
    background-color: white;
    border: 3px solid black;     
    overflow-y: ${(props) => props.showscroll === 'true' ? 'auto' : 'hidden'};

    @media(max-width: 1000px){  
        width: 75vw;     
        height: 70vh;        
    }

    @media(max-width: 700px){   
        width: 85vw;    
        height: 75vh;        
    }

    @media(max-width: 600px){   
        height: 70vh;        
    }

    @media(max-width: 500px){      
        height: 60vh;           
    }
`

const StyledP = styled.p`
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
    padding: 0 2rem;

    // @media(max-width: 750px){      
    //     font-size: 1.7rem;       
    // }

    // @media(max-width: 500px){      
    //     font-size: 1.5rem;       
    // }
`

const StyledBackImg = styled.img`
    // position: sticky;
    position: absolute;
    top: 0.3rem;
    right: 0.3rem;
    width: 1.8rem;

    &:hover{
        cursor:pointer;
        transform: scale(1.04);
    }

    @media(max-width: 500px){
        width: 1.5rem;       
    }   
`

const StyledImageModal = styled.div`
    display: flex; 
    height: 100%;
    width: 100%; 
    gap: 0rem;

    @media(max-width: 800px){
        display: block;
        overflow-y: auto;        
    }
`

const StyledGridDiv = styled.div`
    padding: 1.5rem 1.2rem;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(7,auto);     

     @media(max-width: 1300px){
        grid-template-columns: repeat(6,auto);
        gap: 1.5rem;
    }

    @media(max-width: 1100px){
        grid-template-columns: repeat(5,auto);
    }

    @media(max-width: 800px){
        grid-template-columns: repeat(4,auto);
        gap: 1.2rem;
    }

    @media(max-width: 650px){
        grid-template-columns: repeat(4,auto); 
    }

    @media(max-width: 450px){
        grid-template-columns: repeat(3,auto);     
        gap: 0.7rem;
    }

    @media(max-width: 280px){
        grid-template-columns: repeat(2,auto);     
        gap: 0.7rem;
    }
`

const StyledImg = styled.img`
    width: 6rem;
    height: 6rem;   
    border: 2px solid black;

    &:hover{
        cursor: pointer;
        transform: scale(1.04)
    }

    @media(max-width: 600px){
        width: 4.5rem;
        height: 4.5rem;   
    }

    @media(max-width: 350px){
        width: 3.5rem;
        height: 3.5rem;   
    }
`



const AllImagesGrid = ({ total_images }) => {
    // Redux
    const dispatch = useDispatch();
    const review = useSelector((state) => state.review)
    const { reviews_imgs_modal, isLoading } = review

    const limit = 100;


    const { setcurrspotimgind, currspotimgind, setcurrarrimgind, currarrimgind, setshowallimagesgrid, productdetail, reviews_arr, setreviews_arr } = useContext(DataContext)
    const { setuserreview } = useContext(DataContext)

    const skipRef = useRef(0);

    const RefContainer = useRef(null);

    useEffect(() => {
        if (skipRef.current !== -1 && currarrimgind && reviews_arr.length - currarrimgind <= 2) {
            // console.log("==============> loading more images cause of currentspotind constraint")
            LoadMoreReviews();
        }
        else {
            // console.log("============> no more loading cause skipRef.current = ", skipRef.current, " and currarrimgind = ", currarrimgind, " and reviews_arr.length = ", reviews_arr.length, " and currarrimgind = ", currarrimgind)
        }
    }, [reviews_arr, currarrimgind])


    const handleImgClick = (obj_index, img_index) => {
        setcurrspotimgind(img_index)
        setcurrarrimgind(obj_index)
        setuserreview(reviews_arr[obj_index])
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    useEffect(() => {
        if (!reviews_imgs_modal) {
            const container = RefContainer.current;

            if (container && (container.scrollHeight > container.clientHeight)) {
                return;
            }
            else if (skipRef.current === -1) {
                return;
            }
            else {
                // console.log("=================> running Load function cause content still not scrollable")
                LoadMoreReviews();
            }
        }
    }, [reviews_imgs_modal]);


    useEffect(() => {
        if (reviews_imgs_modal) {
            if (reviews_imgs_modal.length < limit) {
                skipRef.current = -1;
            }
            else {
                skipRef.current += reviews_imgs_modal.length;
            }

            setreviews_arr((prev) => [...prev, ...reviews_imgs_modal])

            // console.log("===============> reviews_arr = ", reviews_arr)
            dispatch(actionReviewStateReset(['REVIEWS_IMGS_RESET']))
        }
    }, [reviews_imgs_modal])


    const LoadMoreReviews = () => {

        if (skipRef.current === -1) {
            // console.log("===============> inside loadmore reviews and skipref = -1 and breaking")
            return;
        }
        else {
            // console.log("===============> inside loadmore reviews and dispatching more")
            dispatch(actionFetchReviewsImgs(productdetail._id, skipRef.current, limit, "most-helpful"))
        }

        // setreviews_arr(reviews_arr => [...reviews_arr, ...AllReviewPhotos]);    
    };
    /////////////////////////////////////////////////////////////////////////////////////////////////////////


    const handleClose = () => {
        setshowallimagesgrid(false)
        setreviews_arr([]);
        setcurrspotimgind(null)
        setcurrarrimgind(null)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (RefContainer.current && !RefContainer.current.contains(event.target)) {
                handleClose();
            }
        }

        const handleScroll = () => {
            if (RefContainer.current) {
                const { scrollTop, scrollHeight, clientHeight } = RefContainer.current;
                if (scrollTop + clientHeight >= scrollHeight - 15) {
                    LoadMoreReviews();
                }
            }
        };

        document.body.style.overflow = 'hidden';        // disable scroll of background window


        if (currspotimgind === null) {
            RefContainer.current?.addEventListener('scroll', handleScroll);
            // console.log("=============> currspotimgind = ", currspotimgind)
        }

        window.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('mousedown', handleClickOutside)
            RefContainer.current?.removeEventListener('scroll', handleScroll);
        }
    }, [RefContainer, currspotimgind])



    return (
        <>
            {isLoading && <img src={spinner_gif} style={{ width: '5rem', height: '5rem', position: 'fixed', top: '5px', left: '50%', zIndex: '6' }} />}

            <div style={{ position: 'fixed', zIndex: 5, top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>

                <StyledMainDiv showscroll={currspotimgind === null ? 'true' : 'false'} ref={RefContainer}>

                    {currspotimgind !== null ?
                        <StyledImageModal>
                            <LeftModal />
                            <RightModal />
                        </StyledImageModal>

                        :

                        <>
                            <div style={{ position: 'sticky', top: 0, zIndex: 5, backgroundColor: 'white', padding: '0.8rem 0', borderBottom: '2px solid black', backgroundColor: '#e6e6eb' }}>
                                <StyledP>User Collection ({total_images} Images)</StyledP>
                                <StyledBackImg onClick={handleClose} src={close_img} alt="Close" title="Close" />
                            </div>

                            <StyledGridDiv>
                                {
                                    reviews_arr.length > 0 && reviews_arr.map((obj, obj_index) => {
                                        return obj.review_images.map((img_path, img_index) => (
                                            <StyledImg key={`${obj_index}_${img_index}`} onClick={() => handleImgClick(obj_index, img_index)} src={require(`../../../../${img_path}`)} alt="Product" />
                                        ))
                                    }
                                    )
                                }
                            </StyledGridDiv>
                        </>
                    }

                </StyledMainDiv>
            </div>


        </>
    )
}

export default AllImagesGrid;