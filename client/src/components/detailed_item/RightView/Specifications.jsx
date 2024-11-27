import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components'

// images
import down_img from './images/down.png'

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

const Styledh3 = styled.h3`
    text-transform: uppercase;
    margin: 0.5rem 0 1.3rem 0;
    font-size: 1.3rem;
    text-align: center;

    @media(max-width: 400px){
        font-size: 1.1rem;
    }
    @media(max-width: 300px){
        font-size: 1.07rem;
    }
`

const StyledDivGrid = styled.div`
    display: grid;
    grid-template-columns: 24% 70%;
    gap: 0.5rem;
    margin: 0.3rem;
    padding: 0 0.5rem 0.6rem 0.5rem;

    @media(max-width: 400px){
        grid-template-columns: 30% 64%;
    }
    @media(max-width: 370px){
        grid-template-columns: 34% 60%;
    }
`

const StyledStrong = styled.strong`
   font-size: 1rem;

    @media(max-width: 400px){
        font-size: 0.9rem;
    }
    @media(max-width: 370px){
        font-size: 0.85rem;
    }
`

const StyledP = styled.p`
   font-size: 1rem;

    @media(max-width: 400px){
        font-size: 0.9rem;
    }
    @media(max-width: 370px){
        font-size: 0.85rem;
    }
`

const StyledContent = styled.div`
    height: ${(props) => props.overflow === 'hidden' ? "250px" : "auto"};
    overflow: ${(props) => props.overflow};

    @media(max - width: 400px) {

    }
    @media(max - width: 370px) {

    }
`

const StyledViewMore = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.35rem;
    font-size: 1.05rem;
    margin-top: 0.0rem;
    padding: 0.4rem 0.4rem;
    
    &:hover {
        cursor: pointer;
        transform: scale(1.02)
    };

    @media(max-width: 500px){
        margin-top: 0.3rem;
    }

    @media(max-width: 400px){
        margin-top: 0.2rem;
        font-size: 0.9rem;
    }
`

const StyledImg = styled.img`
    width: 0.6rem;
    height: 1rem;
    margin-top: 2px;
    transform: ${(props) => props.overflow === 'visible' ? 'rotate(180deg)' : 'none'};

    @media(max-width: 450px){
        margin-top: 2.5px;
    }
`

const Specifications = ({ specs }) => {
    // Convert the object entries to an array to map through
    const entries = Object.entries(specs);
    const lastIndex = entries.length - 1; // Index of the last element

    const [overflow, setoverflow] = useState('visible')
    const [useexpandcollaspe, setuseexpandcollaspe] = useState(false)

    const RefContainer = useRef(null)

    useEffect(() => {
        if (RefContainer.current) {
            if (RefContainer.current.scrollHeight > 500) {
                setoverflow('hidden');
                setuseexpandcollaspe(true);
            }
        }
    }, [])

    const toggleOverflow = () => {
        if (RefContainer.current) {
            const { scrollTop } = document.documentElement;

            if (overflow === 'hidden') {
                // Restore scroll position after updating overflow          
                requestAnimationFrame(() => {
                    document.documentElement.scrollTop = scrollTop;
                });

                setoverflow('visible')
            }
            else {
                window.scrollTo({
                    top: scrollTop - RefContainer.current.scrollHeight + 250,
                    behavior: 'smooth', // This enables smooth scrolling animation
                });

                setoverflow('hidden')
            }
        }
    };

    return (
        <div style={{ border: '2px solid #b5b7ba', opacity: (overflow === 'visible' || !useexpandcollaspe) ? 1 : 0.6 }}>

            <Styledh2>Product Specifications</Styledh2>
            <hr style={{ border: '1px solid #b5b7ba', margin: '1rem 0 0.5rem 0' }} />

            {
                <StyledContent ref={RefContainer} overflow={overflow}>
                    {entries.map(([category, details], index) => (
                        <div key={category} style={{ padding: '0rem 0rem', boxSizing: 'border-box' }}>
                            <Styledh3>{category}</Styledh3>

                            <StyledDivGrid>
                                {Object.entries(details).map(([key, value]) => (
                                    <React.Fragment key={key}>
                                        <StyledStrong>{key}:</StyledStrong>

                                        <StyledP>{value}</StyledP>
                                    </React.Fragment>
                                ))}
                            </StyledDivGrid>

                            {/* Don't display line for last category */}
                            {index < lastIndex && (
                                <hr style={{ border: '1px solid #b5b7ba', margin: '0.8rem 0' }} />
                            )}
                        </div>
                    ))}
                </StyledContent>
            }

            {
                overflow === 'hidden' && useexpandcollaspe ?
                    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', marginBottom: '0rem' }}>

                        {/* <hr style={{ border: '1px solid #b5b7ba', margin: '5px 0' }} /> */}

                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <StyledViewMore onClick={toggleOverflow}>
                                <p style={{ fontWeight: 500, color: 'red', cursor: 'pointer', textAlign: 'center' }}>
                                    Expand
                                </p>

                                <StyledImg overflow={overflow} src={down_img} alt="Expand" />
                            </StyledViewMore>
                        </div>

                    </div >

                    :

                    overflow === 'visible' && useexpandcollaspe ?

                        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', marginBottom: '0rem' }}>

                            {/* <hr style={{ border: '1px solid #b5b7ba', margin: '1px 0' }} /> */}

                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <StyledViewMore onClick={toggleOverflow}>
                                    <p style={{ fontWeight: 500, color: 'red', cursor: 'pointer', textAlign: 'center' }}>
                                        Collapse
                                    </p>

                                    <StyledImg overflow={overflow} src={down_img} alt="Expand" />
                                </StyledViewMore>
                            </div>

                        </div >

                        :

                        null
            }
        </div >
    );
}

export default Specifications;