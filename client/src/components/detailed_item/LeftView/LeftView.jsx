import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components'

// images
import up from './images/up.png'
import down from './images/down.png'

// components
import AddtoCart from './AddtoCart'
import BuyNow from './BuyNow'

const StyledMainContainer = styled.div`
    display: flex;   
    gap: 2rem;
    margin: 1rem 1rem;

    @media(max-width:600px){
        flex-direction:column;        
    }
`

const Styleddiv = styled.div`  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start; 
    gap:0.5rem;

    @media(max-width:600px){
       flex-direction:row;
       justify-content: center; 
       gap:0rem;
    }
`

const OverflowImageWrapper = styled.div`    
    max-height: 21.3rem;
    overflow: hidden;
    padding: 0.2rem 0.5rem;

    @media(max-width:1000px){ 
        max-height: 18rem;    
    }

    @media(max-width:600px){
       max-width: 18rem;
    }

    @media(max-width:500px){        
        max-width: 15rem;
    }

    @media(max-width:370px){
        max-width: 11rem;
    }

    @media(max-width:300px){
        max-width: 9rem;
    }
`

const ImageContainer = styled.div`    
    gap: 0.9rem;
    display: flex;
    flex-direction:column;        
    transition: transform 0.38s ease-in-out;
    align-items:center;
    justify-content:flex-start;

    @media(max-width:600px){
       flex-direction:row;
       align-items:center;
       justify-content:flex-start;
       
    }
`

const StyledImg = styled.img.withConfig({
    shouldForwardProp: (prop) => prop !== 'isselected'
})`
    width: 4rem;
    height: 4rem;
    box-sizing: border-box;
    border: ${(props) => (props.isselected ? '3px solid red' : '1px solid black')};

    &:hover {
        transform: scale(1.1);
        cursor: pointer; 
    }

    @media(max-width:1000px){
        width: 3rem;
        height: 3rem;
        border: ${(props) => (props.isselected ? '2px solid red' : '1px solid black')};
    }

    @media(max-width:600px){
        width: 3rem;
        height: 3rem;
        border: ${(props) => (props.isselected ? '2px solid red' : '1px solid black')};
    }

    @media(max-width:300px){
        width: 2rem;
        height: 2rem;
        border: ${(props) => (props.isselected ? '2px solid red' : '1px solid black')};
    }    
`

const StyledSelected = styled.img`
    width: 22rem;    
    height: 27.2rem;
    border: 2px solid #1f6e08;
    border-radius: 5px;
    box-sizing: border-box;

   @media(max-width:1000px){
        width: 20rem;    
        height: 24rem;    
    }    

    @media(max-width:400px){        
         width: 18rem;    
        height: 22rem;   
    }

    @media(max-width:320px){        
         width: 16rem;    
        height: 20rem;   
    }

    @media(max-width:300px){
        width: 12rem;
        height: 16rem;       
    }
`

const StyledButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 22rem;

    @media(max-width:1000px){
        width: 20rem;       
    }    

    @media(max-width:400px){        
         width: 18rem;    
    }

    @media(max-width:320px){        
         width: 16rem;     
    }

    @media(max-width:300px){
        width: 12rem;    
    }
`

const ClickableArrowWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 0.05rem;
    width: 3rem;
    background-color: #e0dede;
    border: 2px solid #807d7d;
    border-radius: 3px;
    cursor: pointer;

    @media(max-width:600px){
       transform: rotate(270deg);
    }
`

const UnClickableArrowWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 0.05rem;
    width: 3rem;
    background-color: #e0dede;
    opacity: 0.4;
    border: 2px solid #807d7d;
    cursor: not-allowed;

    @media(max-width:600px){
       transform: rotate(270deg);
    }
`

const LeftView = ({ images_arr }) => {
    const [singleimgheight, setsingleimgheight] = useState(null);      // in px
    const [wrapperheight, setwrapperheight] = useState(null);      // in px

    const [curr_height, setCurr_height] = useState(null);
    const [totalimgsheight, settotalimgsheight] = useState(null);
    const [offset, setoffset] = useState(0);
    const [choosen_img, setChoosen_img] = useState(0);

    const RefSingleImage = useRef(null);
    const RefWrapper = useRef(null);
    const componentRef = useRef(null);

    const root = document.documentElement;

    useEffect(() => {
        const updateHeights = () => {
            const font_root = parseFloat(getComputedStyle(root).fontSize);

            const ratio = curr_height === null ? 0 : Math.round(curr_height / totalimgsheight);

            let new_single_height = null, new_wrapper_height = null;

            if (RefSingleImage.current) {
                new_single_height = RefSingleImage.current.clientHeight + 0.9 * font_root;
            }

            if (RefWrapper.current) {
                new_wrapper_height = window.innerWidth <= 600
                    ? RefWrapper.current.clientWidth
                    : RefWrapper.current.clientHeight
            }

            if (new_single_height !== null && new_wrapper_height !== null) {
                setsingleimgheight(new_single_height);

                setwrapperheight(new_wrapper_height);

                const new_total_imgs_height = new_single_height * (images_arr.length) + 10;

                settotalimgsheight(new_total_imgs_height)

                const new_curr_height = Math.max(new_wrapper_height, ratio * new_total_imgs_height);
                setCurr_height(new_curr_height);

                const new_offset = - (new_curr_height - new_wrapper_height)

                GiveOffset(0, new_offset);

                setoffset(new_offset)
            }
        };

        if (singleimgheight === null) {
            updateHeights();
        }

        window.addEventListener('resize', updateHeights);

        return () => {
            window.removeEventListener('resize', updateHeights);
        };
    }, [curr_height, singleimgheight]);     // don't remove curr_height, singleimgheight from dependency array cause initially when site gets loaded we want to set these 2 states.


    const GiveOffset = (old_offset, new_offset) => {
        if (componentRef.current) {
            if (window.innerWidth <= 600) {
                componentRef.current.style.transform = `translateX(${new_offset + old_offset}px)`;
            }
            else {
                componentRef.current.style.transform = `translateY(${new_offset + old_offset}px)`;
            }
        }
    }


    const handleNext = () => {
        if (curr_height < totalimgsheight) {
            const max_imgs_in_wrapper = wrapperheight / singleimgheight;

            const tot_imgs_to_slide = Math.round(max_imgs_in_wrapper * 0.6);

            const new_offset = - Math.min(tot_imgs_to_slide * singleimgheight, totalimgsheight - curr_height);

            GiveOffset(offset, new_offset)

            setoffset(offset + new_offset)

            setCurr_height(curr_height - new_offset)
        }
    };

    const handlePrev = () => {
        if (curr_height > wrapperheight) {
            const max_imgs_in_wrapper = wrapperheight / singleimgheight;

            const tot_imgs_to_slide = Math.round(max_imgs_in_wrapper * 0.6);

            const new_offset = Math.min(tot_imgs_to_slide * singleimgheight, curr_height - wrapperheight);

            GiveOffset(offset, new_offset)

            setoffset(offset + new_offset)

            setCurr_height(curr_height - new_offset)

        }
    };

    return (
        <StyledMainContainer>
            <Styleddiv>
                {curr_height > wrapperheight ?
                    <ClickableArrowWrapper onClick={handlePrev}>
                        <img src={up} alt="View previous" style={{ width: '1.2rem' }} />
                    </ClickableArrowWrapper>

                    :

                    <UnClickableArrowWrapper>
                        <img src={up} alt="View previous" style={{ width: '1.2rem' }} />
                    </UnClickableArrowWrapper>
                }

                <div style={{
                    backgroundColor: "#f2f0fc",
                    padding: "0.6rem 0.3rem",
                    // width: '5rem',
                    borderRadius: "5px",
                    border: "2px solid #747378",
                }}>
                    <OverflowImageWrapper ref={RefWrapper}>
                        <ImageContainer ref={componentRef}>
                            {images_arr.map((img_name, index) => (
                                <StyledImg isselected={choosen_img === index} ref={RefSingleImage} onClick={() => { setChoosen_img(index) }} key={index} src={require(`../../${img_name}`)} alt={`Image ${index}`} />
                            )
                            )}
                        </ImageContainer>
                    </OverflowImageWrapper>
                </div>

                {curr_height < totalimgsheight ?

                    <ClickableArrowWrapper onClick={handleNext}>
                        <img src={down} alt="View next" style={{ width: '1.2rem' }} />
                    </ClickableArrowWrapper>

                    :

                    <UnClickableArrowWrapper>
                        <img src={down} alt="View next" style={{ width: '1.2rem' }} />
                    </UnClickableArrowWrapper>
                }
            </Styleddiv >

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>

                <StyledSelected src={require(`../../${images_arr[choosen_img]}`)} alt="Selected" />

                <StyledButtonWrapper>

                    <BuyNow />

                    <AddtoCart />

                </StyledButtonWrapper>
            </div>

        </StyledMainContainer>
    );
}

export default LeftView;