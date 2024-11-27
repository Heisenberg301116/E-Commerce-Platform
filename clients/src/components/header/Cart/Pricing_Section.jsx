import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../../context/DataProvider";
import styled from 'styled-components'

// Services
import { buyNow } from "../../../service/PaymentAPIs";


const StyledMainDiv = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'stickyTop'
})`  
    position: sticky;      
    top: ${(props) => props.stickyTop + 2}px;
    border: 2px solid #747574;
    border-radius: 4px;
    margin-right: 0.1rem;
    padding: 1rem;
    background-color: #f5f5f5;

    @media(max-width: 950px){
        position: static;
        width: 70vw;
        margin: auto;
    }
`

const Styledh2 = styled.h2`
    font-size: 1.5rem;
    text-align: center;
    margin: 0 0 1.5rem 0;

    // @media(max-width: 300px){
    //     font-size: 1.5rem;
    // }
    // @media(max-width: 400px){
    //     font-size: 1.5rem;
    // }
`

const StyledGridDiv = styled.div`
    display: grid;
    grid-template-columns: 15rem 5rem;    
    gap: 2rem;

    & > :nth-child(odd) {
        justify-self: start;
    }

    & > :nth-child(even) {
        justify-self: end;
    }

    @media(max-width: 950px){
        grid-template-columns:  auto auto;
        gap: 1rem;        
    }
`

const StyledFieldP = styled.p`
    font-size: 1.4rem;    
`

const StyledValueP = styled.p`
    font-size: 1.4rem;
    font-weight: 600;
    color: #474a4d;
`
const StyledButton = styled.button`
    padding: 1rem;
    border-radius: 5px;
    border: none;
    color: white;
    background-color: #055af7;
    font-size: 1rem;
    font-weight: 600;
    width: 9rem;
    margin: 2rem auto 0 auto;
    display:block;
    
    &:hover {
        transform: scale(1.02);
        cursor: pointer; 
    }
`

const Pricing_Section = () => {
    const { cartpricing, userInfo, setalert } = useContext(DataContext);

    const [stickyTop, setStickyTop] = useState(0);

    useEffect(() => {
        const updateStickyTop = () => {
            const header = document.getElementById('header');
            if (header) {
                const headerHeight = header.offsetHeight;
                setStickyTop(headerHeight);
            }
        };

        updateStickyTop();

        window.addEventListener('resize', updateStickyTop);

        return () => {
            window.removeEventListener('resize', updateStickyTop);
        };
    }, []);


    const handleBuy = async () => {
        let data = {
            name: userInfo.name,
            amount: cartpricing.mrp - cartpricing.discount + cartpricing.delivery_charges,
            number: userInfo.phone,
            MID: 'MID' + Date.now(),
            transactionId: 'T' + Date.now()
        }

        let response = await buyNow(data);

        if (!response || response.status !== 200) {
            setalert({ colour: '#f71505', message: `Payment server not responding ! Please try again later` })
            return;
        }

        window.location.href = response.data.data.instrumentResponse.redirectInfo.url
    }


    return (
        <div>
            <StyledMainDiv stickyTop={stickyTop}>

                <Styledh2>PRICE DETAILS</Styledh2>

                <StyledGridDiv>
                    <StyledFieldP>Total MRP:</StyledFieldP>
                    <StyledValueP>₹{cartpricing.mrp.toLocaleString('en-US')}</StyledValueP>

                    <StyledFieldP>Total Discount:</StyledFieldP>
                    <StyledValueP style={{ color: '#f307f7' }}>₹{cartpricing.discount.toLocaleString('en-US')}</StyledValueP>

                    <StyledFieldP>Delivery Charges:</StyledFieldP>
                    <StyledValueP style={{ color: '#f7072b' }}>₹{cartpricing.delivery_charges.toLocaleString('en-US')}</StyledValueP>

                    <StyledFieldP>Total Amount:</StyledFieldP>
                    <StyledValueP style={{ color: 'black' }}>₹{(cartpricing.mrp - cartpricing.discount + cartpricing.delivery_charges).toLocaleString('en-US')}</StyledValueP>
                </StyledGridDiv>

                <StyledButton onClick={handleBuy}>Place Order</StyledButton>
            </StyledMainDiv>
        </div>
    )
}

export default Pricing_Section;