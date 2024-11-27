import styled from 'styled-components'

const StyledGridDiv = styled.div`
    display: grid;
    grid-template-columns: auto auto;  
    gap: 0.7rem;   
    align-items: center;
    margin: 0.3rem 0 0.2rem 0;    
    
`

const StyledFieldP = styled.p`
    font-weight: 500;
    font-size: 1.1rem;
    color: #1307f5;
`

const StyledValueP = styled.p`
    font-weight: 500;
    font-size: 1.1rem;
`

const ProductHeader = ({ price, delivery_charge }) => {

    const delivery = delivery_charge === 0 ? 'Free' : '₹' + delivery_charge.toLocaleString('en-US');

    return (
        <StyledGridDiv >

            <StyledFieldP>Cost: </StyledFieldP>

            <StyledValueP>₹{price.toLocaleString('en-US')}</StyledValueP>

            <StyledFieldP>Delivery: </StyledFieldP>

            <StyledValueP>{delivery}</StyledValueP>

            <StyledFieldP>Total: </StyledFieldP>

            <StyledValueP>₹{(price + delivery_charge).toLocaleString('en-US')}</StyledValueP>

        </StyledGridDiv >
    )
}

export default ProductHeader;