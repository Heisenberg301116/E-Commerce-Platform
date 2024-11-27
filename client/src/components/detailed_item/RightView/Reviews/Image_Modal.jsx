import { useContext, useEffect, useState, useRef } from "react";
import { DataContext } from "../../../../context/DataProvider";
import styled from 'styled-components'

// images
import next_img from '../images/next.png'

const StyledMainDiv = styled.div` 
    width: 50vw;    
    position: fixed;
    padding: 1rem 0rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border: 2px solid black;
    border-radius: 3px;
    background-color: white;

    @media(max-width: 850px){
        width: 65vw;           
    }

    @media(max-width: 700px){
        width: 70vw;           
    }

    @media(max-width: 600px){
        width: 80vw;             
    }

    @media(max-width: 450px){
        width: 85vw;             
    }
`

const StyledUpperDiv = styled.div`
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 2rem;

    @media(max-width: 600px){
        gap: 1rem;      
    }
`

const StyledSpotImg = styled.img`
    width: 70%;
    height: 25rem;      

    @media(max-width: 1100px){
        width: 65%;
        height: 25rem;
    }

    @media(max-width: 1100px){
        width: 65%;
        height: 22rem;
    }

    @media(max-width: 850px){
        width: 70%;
        height: 22rem;
    }

    @media(max-width: 700px){
        width: 70%;
        height: 22rem;
    }

    @media(max-width: 550px){
        height: 18rem;
    }

    @media(max-width: 450px){
        height: 18rem;
    }

    @media(max-width: 400px){
        height: 15rem;
    }

    @media(max-width: 340px){
        height: 12rem;
    }

   
`

const StyledArrowImg = styled.img.withConfig({
    shouldForwardProp: (prop) => prop !== 'arrow'
})`
    width: 2.5rem;
    height: 2.5rem;
    opacity: ${(props) => props.end === 'true' ? 0.5 : 1};
    transform: ${(props) => (props.arrow === 'left' ? 'rotate(180deg)' : '')};

    &:hover{
        cursor: ${(props) => props.end !== 'true' ? 'pointer' : 'not-allowed'};
        transform: ${(props) => (props.arrow === 'left' ? 'rotate(180deg) scale(1.04)' : 'scale(1.04)')};
    }

    @media(max-width: 800px){
        width: 2rem;
        height: 2rem;
    }

    @media(max-width: 450px){
        width: 1.8rem;
        height: 1.8rem;
    }
`


const StyledLowerOverflowDiv = styled.div`
    overflow: hidden;
`

const StyledImgWrapperDiv = styled.div`
    transition: transform 0.5s ease-in-out;    
    display: flex;
    align-items: center;
    justify-content:start;
    gap: 0.9rem;
    position: relative;
    left: 50%;
    padding: 0.3rem 0; 
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

const ImageModal = () => {
    const { imgmodalInfo, setImgmodalInfo } = useContext(DataContext)

    const [singleimgwidth, setsingleimgwidth] = useState(null);
    const [currspotimgind, setcurrspotimgind] = useState(imgmodalInfo.img_index);

    const RefContainer = useRef(null);
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
        if (currspotimgind < imgmodalInfo.images_arr.length - 1) {
            GiveOffset(currspotimgind + 1, singleimgwidth)

            setcurrspotimgind(currspotimgind + 1)
        }
    };

    const handlePrev = () => {
        if (currspotimgind > 0) {
            GiveOffset(currspotimgind - 1, singleimgwidth)

            setcurrspotimgind(currspotimgind - 1)
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



    useEffect(() => {
        const handleClickOutside = (event) => {
            if (RefContainer.current && !RefContainer.current.contains(event.target)) {
                setImgmodalInfo(null)
            }
        }

        document.body.style.overflow = 'hidden';

        window.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('mousedown', handleClickOutside)
        }
    }, [RefContainer])


    const changeSpotImg = (index) => {
        setcurrspotimgind(index)
        GiveOffset(index, singleimgwidth)
    }

    return (
        <div style={{ position: 'fixed', zIndex: 5, top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
            <StyledMainDiv ref={RefContainer}>
                <StyledUpperDiv>
                    <StyledArrowImg title="Previous image" arrow="left" src={next_img} onClick={handlePrev} end={currspotimgind === 0 ? 'true' : 'false'} />

                    <StyledSpotImg src={require(`../../../${imgmodalInfo.images_arr[currspotimgind]}`)} alt="Scaled Image" />


                    <StyledArrowImg title="Next image" arrow="right" src={next_img} onClick={handleNext} end={currspotimgind === (imgmodalInfo.images_arr.length - 1) ? 'true' : 'false'} />
                </StyledUpperDiv>

                <StyledLowerOverflowDiv>
                    <StyledImgWrapperDiv ref={RefImgWrapper}>
                        {imgmodalInfo.images_arr.map((img_path, index) => (
                            <StyledBottomImgs onClick={() => changeSpotImg(index)} key={index} ref={RefSingleImg} isSelected={index === currspotimgind} src={require(`../../../${img_path}`)} alt="Scaled Image" />
                        ))}
                    </StyledImgWrapperDiv>

                </StyledLowerOverflowDiv>
            </StyledMainDiv>
        </div>
    )
}

export default ImageModal;