// Use MONGOdb to fetch Available Offers

// Remove this import later:
import { available_offers, terms_and_conditions } from '../../../constants/demo/available_offers'

import { useContext, useState, useRef } from 'react';
import { DataContext } from '../../../context/DataProvider';
import styled from 'styled-components'

// components
import TermsAndConditions from './TermsAndConditions';
import DetailedCategoryOffers from './DetailedOffers'

// images
import down_img from './images/down.png'

const StyledViewMore = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.3rem;
    margin-top: 0.5rem;
    
    &:hover {
        cursor: pointer;
        transform: scale(1.02)
    };

    @media(max-width: 500px){
        margin-top: 0.3rem;
    }

    @media(max-width: 400px){
        margin-top: 0.2rem;
    }
`

const StyledOffersDiv = styled.div`
    flex: 1 1 0;
    background-color: #ebeef0;
    border-radius: 7px;
    padding: 0.5rem 0.5rem;
    border: 0px solid black;
    font-size: 0.92rem;

    @media(max-width: 500px){
        flex: 0 0 150px;
        font-size: 0.85rem;
    }

    @media(max-width: 400px){
        flex: 0 0 100px;
        font-size: 0.8rem;
    }
`

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


const DisplayOffersList = ({ category, category_offers_arr, category_index }) => {
    const [jsondata, setjsondata] = useState(null);
    const [showalloffers, setshowalloffers] = useState(false);

    const handleTermsConditions = (category_offer_index) => {
        const terms_category_obj = terms_and_conditions[category_index];
        const terms_category_array = (Object.values(terms_category_obj))[0];
        const curr_terms_data = terms_category_array[category_offer_index];
        setjsondata(curr_terms_data)
    }

    const handleViewMore = () => {
        setshowalloffers(true)
    }


    return (
        <>
            <h4 style={{ textAlign: 'center', margin: '0.1rem 0 1rem 0' }}>{category}</h4>

            <div style={{ border: '0px solid #b5b7ba', padding: '0 0 0.8rem 1.3rem' }}>

                <ul style={{ listStylePosition: 'outside', }}>
                    {
                        category_offers_arr.slice(0, 1).map((category_offer, category_offer_index) => (
                            <li key={`${category}+ ${category_offer_index}`} style={{}}>
                                {category_offer}
                                <StyledTermsP
                                    onClick={() => handleTermsConditions(category_offer_index)}
                                >
                                    T&C
                                </StyledTermsP>
                            </li>
                        ))
                    }
                    {category_offers_arr.length > 1 ?
                        <StyledViewMore>
                            <img src={down_img} alt="Expand" style={{ width: '0.8rem', marginTop: '4.5px' }} />

                            <p onClick={handleViewMore} style={{ fontWeight: 500, color: 'red', cursor: 'pointer' }}>View {category_offers_arr.length - 1} more offers</p>
                        </StyledViewMore>
                        :
                        null
                    }
                </ul>
            </div >

            {
                showalloffers ?
                    <DetailedCategoryOffers category={category} category_offers_arr={category_offers_arr} category_index={category_index} showalloffers={showalloffers} setshowalloffers={setshowalloffers} setjsondata={setjsondata} />
                    :
                    null
            }

            <TermsAndConditions showalloffers={showalloffers} setshowalloffers={setshowalloffers} jsondata={jsondata} setjsondata={setjsondata} />
        </>
    )
}



const AvailableOffers = () => {

    return (
        <>
            <h2 style={{ margin: '1rem 0 0 0', fontSize: '1.4rem', fontWeight: 600 }}>Available Offers</h2>
            <hr style={{ margin: '0.2rem 0 1rem 0', border: '1px solid silver' }} />

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-evenly', alignItems: 'stretch', flexWrap: 'wrap' }}>
                {
                    available_offers.map((item, index) => (     // 'item' is JSON object with key = offer category and values = array of offers under that category
                        <StyledOffersDiv key={index}>
                            <DisplayOffersList key={index} category={Object.keys(item)[0]} category_offers_arr={Object.values(item)[0]} category_index={index} />
                        </StyledOffersDiv>
                    ))
                }
            </div >

        </>
    )
}

export default AvailableOffers;