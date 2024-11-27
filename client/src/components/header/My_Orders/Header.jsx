import styled from 'styled-components'

// images
import seller_img from '../images/seller.png'
import star_img from '../images/star.png'

const Styledh2 = styled.h2`
    font-size: 1.3rem;
    font-weight: 600;
    color: black;
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
    width: 1.4rem;

    @media(max-width: 400px){
        width: 1.32rem;
    }
    @media(max-width: 370px){
        width: 1.2rem;
    }
`

const StyledProductRatingDiv = styled.div`
    background-color: #1e8543;
    padding: 0.15rem 0.2rem;
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


const ProductRating = ({ productdetail }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '1rem', alignItems: 'center', margin: '0.3rem 0' }}>


            <StyledProductRatingDiv>
                <p style={{ color: 'white', fontWeight: 600, fontSize: '0.8rem', }}>{productdetail.average_stars}</p>

                <StyledProductStarImg src={star_img} alt="star" />
            </StyledProductRatingDiv>

            <p style={{ color: 'grey', fontSize: '0.9rem', fontWeight: 600, textAlign: 'center' }}>{productdetail.total_ratings} Ratings & {productdetail.total_reviews} Reviews</p>
        </div>
    )
}

const SellerDetail = ({ seller_data }) => {
    return (
        <StyledSellerDiv>

            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '0.4rem' }}>
                <StyledSellerImg src={seller_img} alt="Seller" />

                <p style={{ fontWeight: 600, color: "black" }}>Seller: {seller_data.name}</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '0.4rem' }}>

                <StyledSellerRatingDiv>
                    <p style={{ color: 'white', fontWeight: 600, }}>{seller_data.rating.stars}</p>

                    <StyledSellerStarImg src={star_img} alt="star" />
                </StyledSellerRatingDiv>

                <p style={{ textAlign: 'left', color: 'grey', fontWeight: 600, }}>{seller_data.rating.total} Ratings</p>
            </div>

        </StyledSellerDiv >
    )
}

const ProductHeader = ({ productdata, seller_data }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Styledh2>{productdata.title.longtitle}</Styledh2>
            <ProductRating productdetail={productdata} />
            <SellerDetail seller_data={seller_data} />
        </div>
    )
}

export default ProductHeader;