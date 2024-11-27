import { useEffect, useRef } from "react";
import { terms_and_conditions } from '../../../constants/demo/available_offers'
import styled from 'styled-components'

// images
import cancel_img from './images/cancel.png'


const StyledTermsP = styled.p`
    color: blue;
    display: inline-block;
    margin-left: 0.4rem;
    font-weight: 600; 

    &:hover{
        cursor:pointer;
        transform: scale(1.07);
    }
`

const DisplayOffersList = ({ category, category_offers_arr, category_index, setjsondata }) => {

    const handleTermsConditions = (category_index, category_offer_index) => {
        const terms_category_obj = terms_and_conditions[category_index];
        const terms_category_array = (Object.values(terms_category_obj))[0];
        const curr_terms_data = terms_category_array[category_offer_index];
        setjsondata(curr_terms_data)

    }

    return (
        <>
            <div style={{ border: '0px solid #b5b7ba', marginBottom: '2rem', backgroundColor: '' }}>

                <h3 style={{ textAlign: ' center', margin: '0.2rem 0 1rem 0', fontSize: '1.8rem' }}>{category}</h3>

                <ol style={{ listStylePosition: 'outside', marginLeft: '1.5rem', }}>
                    {
                        category_offers_arr.map((category_offer, category_offer_index) => (
                            <li key={`${category}+ ${category_offer_index}`} style={{ marginBottom: '0.7rem' }}>
                                {category_offer}
                                <StyledTermsP onClick={() => handleTermsConditions(category_index, category_offer_index)}>
                                    T&C
                                </StyledTermsP>

                            </li>
                        ))
                    }
                </ol>
            </div>

            {/* <TermsAndConditions showalloffers={showalloffers} setshowalloffers={setshowalloffers} /> */}
        </>
    )
}


const DetailedCategoryOffers = ({ category, category_offers_arr, category_index, showalloffers, setshowalloffers, setjsondata }) => {
    const RefContainer = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {

            const terms_component = document.getElementById('Terms_Conditions_Component');

            if (RefContainer.current && !RefContainer.current.contains(event.target) && (terms_component === null || !terms_component.contains(event.target))) {
                setshowalloffers(false);
            }
            else {
                return;
            }
        }

        const StopEventPropagation = (event) => {
            event.stopPropagation();
        }

        document.addEventListener("mousedown", handleClickOutside)
        RefContainer.current?.addEventListener("mousedown", StopEventPropagation)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
            RefContainer.current?.removeEventListener("mousedown", StopEventPropagation)
        }
    }, [RefContainer])


    useEffect(() => {
        if (showalloffers) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [showalloffers]);


    return (
        <div
            style={{
                position: 'fixed',
                zIndex: 5,
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
            }}>
            <div ref={RefContainer} style={{
                padding: '0.2rem 1rem',
                backgroundColor: 'white',
                border: '5px double #525151',
                position: 'fixed',
                width: '50vw',
                height: '100vh',
                boxSizing: 'border-box',
                overflowY: 'auto',
                overflowX: 'auto',
                top: '0',
                right: '0',
            }}>
                <img onClick={() => { setshowalloffers(false) }} src={cancel_img} alt="Close" style={{ width: '1.5rem', position: 'absolute', top: '0.3rem', left: '0.3rem', cursor: 'pointer' }} />

                <DisplayOffersList category={category} category_offers_arr={category_offers_arr} category_index={category_index} showalloffers={showalloffers} setshowalloffers={setshowalloffers} setjsondata={setjsondata} />
            </div>
        </div>
    )
}

export default DetailedCategoryOffers;