import { useContext, useEffect, useState, useRef } from "react";
import { DataContext } from "../../../../../context/DataProvider";
import styled from 'styled-components'

// images
import backward_img from '../../images/backward.png'
import right_arrow_img from '../../images/right_arrow.png'
import next_img from '../../images/next.png'


const StyledMainDiv = styled.div`
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 65%;
    height: 100%;
    padding: 0rem 0.1rem;
    box-sizing: border-box;
    position: relative;

    @media(max-width: 800px){
        width: 100%;
        height: 89%;
    }

    @media(max-width: 400px){
        height: 80%;
    }

    @media(max-width: 350px){
        height: 70%;
    }
`

const StyledBackImg = styled.img`
    position: absolute;
    top: 0.3rem;
    left: 0.3rem;
    width: 1.8rem;
    height: 1.5rem;   

    &:hover{
        cursor:pointer;
        transform: scale(1.04);
    }

    @media(max-width: 500px){
        width: 1.5rem;
        height: 1.3rem;
    }

    @media(max-width: 400px){
        width: 1.2rem;
        height: 1rem;
    }
`

const StyledUpperDiv = styled.div`
    box-sizing: border-box;
    padding: 0.2rem 1rem 0 1rem;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 1rem;
    height: 82%;

    @media(max-width: 1150px){
        gap: 0.8rem;
    }

    @media(max-width: 1000px){
        gap: 0.5rem;      
    }

    @media(max-width: 800px){
        gap: 1.5rem;    
    }

    @media(max-width: 450px){
        gap: 0.5rem;    
    }
`

const StyledSpotImg = styled.img`
    width: 75%;
    height: 90%;
    // border: 2px solid black;

    @media(max-width: 1150px){
        width: 85%;       
    }

    @media(max-width: 800px){
        width: 70%;       
    }

    @media(max-width: 550px){
       width: 75%
    }

    @media(max-width: 450px){
       width: 80%
    }

    @media(max-width: 400px){
        width: 80%
    }

    @media(max-width: 350px){
        width: 85%
    }
`

const StyledArrowImg = styled.img.withConfig({
    shouldForwardProp: (prop) => prop !== 'arrow'
})`
    width: 2rem;
    opacity: ${(props) => props.end === 'true' ? 0.5 : 1};
    transform: ${(props) => (props.arrow === 'left' ? 'rotate(180deg)' : '')};

    &:hover{
        cursor: ${(props) => props.end !== 'true' ? 'pointer' : 'not-allowed'};
        transform: ${(props) => (props.arrow === 'left' ? 'rotate(180deg) scale(1.04)' : 'scale(1.04)')};
    }

    @media(max-width: 800px){
        width: 1.9rem;
    }

    @media(max-width: 450px){
        width: 1.8rem;       
    }

    @media(max-width: 350px){
        width: 1.5rem;
    }
`

const StyledLowerOverflowDiv = styled.div`
    overflow: hidden;  
    margin-bottom: 1rem;        
`

const StyledImgWrapperDiv = styled.div`
    transition: transform 0.5s ease-in-out;    
    display: flex;
    align-items: center;
    justify-content:start;
    gap: 0.9rem;
    position: relative;
    left: 50%;
    padding: 0.3rem;
`

const StyledBottomImgs = styled.img.withConfig({
    shouldForwardProp: (prop) => prop !== 'isSelected'
})`
    width: 4rem;
    height: 4rem;
    border: ${(props) => props.isSelected ? "2px solid red" : "2px solid black"};
    box-sizing: border-box;

    &:hover{
        cursor:pointer;
        transform: scale(1.04);
    }

    @media(max-width: 1000px){
        width: 3.5rem;
        height: 3.5rem;
    }

    @media(max-width: 500px){
        width: 3rem;
        height: 3rem;
    }

    @media(max-width: 400px){
        width: 2.5rem;
        height: 2.5rem;
    }
`


const LeftModal = () => {
    const { reviews_arr } = useContext(DataContext)
    const { currspotimgind, setcurrspotimgind, setuserreview } = useContext(DataContext)
    const { currarrimgind, setcurrarrimgind } = useContext(DataContext)

    const [singleimgwidth, setsingleimgwidth] = useState(null);

    const RefSingleImg = useRef(null);
    const RefImgWrapper = useRef(null);

    const GiveOffset = (spotlight_index, single_img_width) => {
        if (RefImgWrapper.current) {
            const font_root = parseFloat(getComputedStyle(document.documentElement).fontSize);
            const gapwidth = 0.9 * font_root;
            const offset = - (spotlight_index * (single_img_width + gapwidth) + single_img_width / 2);
            RefImgWrapper.current.style.transform = `translateX(${offset}px)`;
        }
    }


    const handleNext = () => {
        if (currspotimgind < reviews_arr[currarrimgind].review_images.length - 1) {      // show next image of the same review
            GiveOffset(currspotimgind + 1, singleimgwidth)
            setcurrspotimgind(currspotimgind + 1)
        }

        else if (currarrimgind < reviews_arr.length - 1) {   // show first image of the next review    
            setcurrspotimgind(0)
            setcurrarrimgind(currarrimgind + 1)
            setuserreview(reviews_arr[currarrimgind + 1])
            // console.log("===========> reviews_arr[currspotimgind + 1]= ", reviews_arr[currarrimgind + 1])
            GiveOffset(0, singleimgwidth)
        }
    }


    const handlePrev = () => {
        if (currspotimgind > 0) {
            GiveOffset(currspotimgind - 1, singleimgwidth)
            setcurrspotimgind(currspotimgind - 1)
        }

        else if (currarrimgind > 0) {   // show first image of the previous review           
            setcurrspotimgind(0)
            setcurrarrimgind(currarrimgind - 1)
            setuserreview(reviews_arr[currarrimgind - 1])
            GiveOffset(0, singleimgwidth)
        }
    };

    useEffect(() => {
        const updateWidths = () => {
            const spotlight_ind = currspotimgind === null ? 0 : currspotimgind;

            let new_single_width = null;

            if (RefSingleImg.current) {
                const imgRect = RefSingleImg.current.getBoundingClientRect();     // precise dimension object of img
                new_single_width = imgRect.width;       // add gap=0.9rem inside the GiveOffset() function separately !!!
            }

            if (new_single_width !== null) {
                setsingleimgwidth(new_single_width);

                setcurrspotimgind(spotlight_ind);

                GiveOffset(spotlight_ind, new_single_width);
            }
        };

        if (singleimgwidth === null) {
            updateWidths();
        }

        window.addEventListener('resize', updateWidths);

        return () => {
            window.removeEventListener('resize', updateWidths);
        };
    }, [singleimgwidth, currspotimgind])


    const changeSpotImg = (index) => {
        setcurrspotimgind(index)
        GiveOffset(index, singleimgwidth)
    }

    const handleBack = () => {
        setcurrspotimgind(null)
        setcurrarrimgind(null)
    }

    return (
        <StyledMainDiv>

            <StyledBackImg onClick={handleBack} src={backward_img} alt="Go Back" title="Go Back" />

            <StyledUpperDiv>
                {
                    currspotimgind === 0 ?

                        <StyledArrowImg title="View previous review" arrow="left" src={right_arrow_img} onClick={handlePrev} end={currarrimgind === 0 ? 'true' : 'false'} />

                        :

                        <StyledArrowImg title="Previous image" arrow="left" src={next_img} onClick={handlePrev} end='false' />
                }

                <StyledSpotImg src={require(`../../../../${(((reviews_arr)[currarrimgind]).review_images)[currspotimgind]}`)} alt="Spotlight" />

                {
                    currspotimgind === reviews_arr[currarrimgind].review_images.length - 1 ?

                        <StyledArrowImg title="View next review" arrow="right" src={right_arrow_img} onClick={handleNext} end={currarrimgind === ((reviews_arr).length - 1) ? 'true' : 'false'} />

                        :

                        <StyledArrowImg title="Next image" arrow="right" src={next_img} onClick={handleNext} end='false' />
                }

            </StyledUpperDiv>

            <StyledLowerOverflowDiv>
                <StyledImgWrapperDiv ref={RefImgWrapper}>
                    {(((reviews_arr)[currarrimgind]).review_images).map((img_path, index) => (
                        <StyledBottomImgs onClick={() => changeSpotImg(index)} key={index} ref={RefSingleImg} isSelected={index === currspotimgind} src={require(`../../../../${img_path}`)} alt="Others" />
                    ))}
                </StyledImgWrapperDiv>

            </StyledLowerOverflowDiv>
        </StyledMainDiv>
    )
}

export default LeftModal;