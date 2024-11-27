import { useContext, useEffect, useState } from 'react'
import { DataContext } from "../../../context/DataProvider";

// redux
import { useDispatch, useSelector } from 'react-redux';
import { actionFetchSellerDetail, actionProductStateReset } from '../../../redux/actions/productActions'

// components
import Specifications from './Specifications'
import DisplayList from './Display_List'
import AvailableOffers from './Available_Offers'
import Services from './Services'
import styled from 'styled-components'
import ReviewsComponent from './Reviews/Main'
import QAComponent from './Question_Answers/Main'

// images
import seller_img from './images/seller.png'
import star_img from './images/star.png'
import spinner_gif from '../../header/images/spinner.gif'


const Styledh2 = styled.h2`
    margin: 0rem 0 0 0;
    font-size: 1.8rem;
    font-weight: 600;

    @media(max-width: 300px){
        font-size: 1.5rem;
    }
    @media(max-width: 400px){
        font-size: 1.6rem;
    }
`

const StyledP = styled.p`
   font-size: 1rem;

    @media(max-width: 400px){
        font-size: 0.95rem;
    }
    @media(max-width: 370px){
        font-size: 0.92rem;
    }
`

const StyledPricingDiv = styled.div`
    display: flex;
    gap: 0.7rem;
    align-items: center;
    margin: 0.3rem 0 0.2rem 0; 

    @media(max-width: 450px){
        // gap: 0.4rem;
        font-size: 0.95rem;
    }
    @media(max-width: 370px){
        font-size: 0.92rem;
    }
`

const StyledMainPricingDiv = styled.div`
    display: flex;
    gap: 1.4rem;
    align-items: center;
    margin: 0.1rem 0 0.1rem 0;

    @media(max-width: 450px){
        flex-direction: column;
        align-items: start;
        gap: 0;
    }
`

const StyledDeliveryDiv = styled.div`
    display: flex;
    gap: 1rem;
    font-size: 1rem;
    margin-bottom: 0.5rem;

    @media(max-width: 500px){       
        font-size: 0.9rem;    
        display: block;        
    }
    @media(max-width: 400px){       
        font-size: 0.85rem;    
        display: block;   
        margin-bottom: 0.8rem; 
    }
`

const StyledSellerDiv = styled.div`
    display: flex; 
    justify-content: flex-start; 
    align-items: center;    
    margin: 0.5rem 0 1rem 0;
    flex-wrap: wrap;
    font-size: 0.8rem;
    gap: 1rem;
    

    @media(max-width: 400px){
        gap: 0.7rem;
    }
    @media(max-width: 370px){
        gap: 0.3rem;
    }
`

const StyledSellerImg = styled.img`
    width: 1.5rem;

    @media(max-width: 400px){
        width: 1.42rem;
    }
    @media(max-width: 370px){
        width: 1.3rem;
    }
`

const StyledProductRatingDiv = styled.div`
    background-color: #1e8543;
    padding: 0.15rem 0.3rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    // font-size: 0.77rem;

 
    @media(max-width: 400px){
        padding: 0.08rem 0.23rem 0.1rem 0.23rem;
        font-size: 0.7rem;        
    }
`
const StyledProductStarImg = styled.img`
    height: 0.65rem; 
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


const StyledSellerRatingDiv = styled.div`
    background-color: #8112c9;
    padding: 0.06rem 0.25rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 0.15rem;
    font-size: 0.77rem;

    @media(max-width: 500px){
        padding: 0.1rem 0.22rem;
        font-size: 0.75rem;
    }
    @media(max-width: 370px){
        padding: 0.08rem 0.23rem 0.1rem 0.23rem;
        font-size: 0.7rem;
        
    }
`

const StyledSellerStarImg = styled.img`
    height: 0.55rem; 
    background-color: #8112c9;

    @media(max-width: 600px){
        height: 0.58rem; 
    }
    @media(max-width: 500px){
        height: 0.55rem; 
    }
    @media(max-width: 370px){
        height: 0.5rem; 
    }
`

const ProductRating = () => {
    const { productdetail } = useContext(DataContext)

    return (
        <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '1rem', alignItems: 'center', margin: '0.3rem 0' }}>


            <StyledProductRatingDiv>
                <p style={{ color: 'white', fontWeight: 600, fontSize: '0.9rem', }}>{productdetail.average_stars}</p>

                <StyledProductStarImg src={star_img} alt="star" />
            </StyledProductRatingDiv>

            <p style={{ color: 'grey', fontSize: '0.99rem', fontWeight: 600, textAlign: 'center' }}>{productdetail.total_ratings} Ratings & {productdetail.total_reviews} Reviews</p>
        </div>
    )
}

const ProductPricing = () => {
    const { productdetail } = useContext(DataContext)

    return (

        <StyledMainPricingDiv>
            <StyledPricingDiv >
                <p style={{ fontSize: '1.7rem', fontWeight: 600 }}>₹{productdetail.price.cost}</p>

                <p style={{ fontSize: '1.2rem', fontWeight: 600, textDecoration: 'line-through', color: 'grey' }}>₹{productdetail.price.mrp}</p>

                <p style={{ fontSize: '1rem', fontWeight: 600, color: 'green' }}>{productdetail.price.discount} off</p>
            </StyledPricingDiv >

            {
                productdetail.quantity <= 10 ?
                    <p style={{ display: 'block', fontSize: '1rem', fontWeight: 600, color: 'red', margin: '0rem 0' }}>(Hurry, only {productdetail.quantity} unit left !)</p>

                    :

                    null
            }
        </StyledMainPricingDiv>
    )
}



const DeliveryCharges = () => {
    const { productdetail } = useContext(DataContext)

    const expected_date = new Date(new Date().getTime() + `${productdetail.delivery_time}` * 24 * 60 * 60 * 1000)

    return (
        <StyledDeliveryDiv>
            <p style={{ fontWeight: 600, color: 'blue' }}>
                {productdetail.delivery_charges === 0 ? 'Free Delivery !' : `Delivery Charges: ₹${productdetail.delivery_charges}`}
            </p>


            {
                productdetail.free_delivery_over !== null &&
                <p style={{ fontWeight: 600, color: 'green' }}>
                    (Free delivery for orders above ₹{productdetail.free_delivery_over})
                </p>
            }


            <p style={{ fontWeight: 600, color: 'grey', }}>
                (Expected Delivery: {expected_date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })})
            </p>
        </StyledDeliveryDiv >
    )
}



const SellerDetail = () => {
    const { productdetail } = useContext(DataContext)

    // Redux
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product)
    const { sellerDetail, isLoading } = product

    const [sellerdata, setsellerdata] = useState(null);

    useEffect(() => {
        if (productdetail) {
            dispatch(actionFetchSellerDetail(productdetail.seller_id))
        }
    }, [productdetail])


    useEffect(() => {
        if (sellerDetail) {
            setsellerdata(sellerDetail);
            dispatch(actionProductStateReset(['SELLER_DETAIL_RESET']))
        }
    }, [sellerDetail])


    return (
        <>
            {isLoading && <img src={spinner_gif} style={{ width: '5rem', height: '5rem', position: 'fixed', top: '5px', left: '50%', zIndex: '6' }} />}

            {sellerdata && <StyledSellerDiv>

                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '0.4rem' }}>
                    <StyledSellerImg src={seller_img} alt="Seller" />

                    <p style={{ fontWeight: 600 }}>Seller: {sellerdata.name}</p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '0.4rem' }}>

                    <StyledSellerRatingDiv>
                        <p style={{ color: 'white', fontWeight: 600, }}>{sellerdata.rating.stars}</p>

                        <StyledSellerStarImg src={star_img} alt="star" />
                    </StyledSellerRatingDiv>

                    <p style={{ textAlign: 'left', color: 'grey', fontWeight: 600, }}>{sellerdata.rating.total} Ratings</p>
                </div>

            </StyledSellerDiv >}
        </>
    )
}


const RightView = () => {
    const { productdetail } = useContext(DataContext)

    return (
        <div style={{ padding: '0.5rem 1rem 0.5rem 1rem' }}>
            <Styledh2>{productdetail.title.longtitle}</Styledh2>

            <ProductRating />

            <ProductPricing />


            <DeliveryCharges />

            <SellerDetail />

            <Services />

            <AvailableOffers />

            <div>
                <h2 style={{ margin: '1rem 0 0 0', fontSize: '1.4rem', fontWeight: 600 }}>Description</h2>
                <hr style={{ margin: '0.2rem 0 0.8rem 0', border: '1px solid silver' }} />
                <StyledP>{productdetail.description}</StyledP>
            </div>

            <DisplayList title='Highlights' arr={productdetail.highlights} />

            <Specifications specs={productdetail.Specifications} />

            <ReviewsComponent />

            <QAComponent />
        </div >
    )
}

export default RightView;