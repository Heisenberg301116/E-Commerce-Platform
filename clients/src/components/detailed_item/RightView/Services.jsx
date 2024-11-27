import { useContext } from "react";
import { DataContext } from "../../../context/DataProvider";

//Images
import cash_on_delivery_img from './images/cash-on-delivery.png'
import warranty_img from './images/warranty.png'
import return_img from './images/return.png'
import replacement_img from './images/replacement.png'
import styled from "styled-components";

const StyledMainDiv = styled.div`
    display: flex;
    border: 1px solid black;
    border-radius: 5px;
    padding: 0.7rem;
    background-color: #86fccf;
    margin-bottom: 1rem;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    @media(max-width: 450px){
        flex-direction: column;
        align-items: start;
    }
`

const StyledDiv = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    opacity: opaque;
    max-width: 12rem;
`

const StyledP = styled.p`
    display: inline;
    font-weight: 500;
    color: black;
    font-size: 0.9rem;

    @media(max-width: 500px){
        font-size: 0.85rem;
    }
    @media(max-width: 400px){
        font-size: 0.80rem;
    }
    @media(max-width: 370px){
        font-size: 0.75rem;
    }
`

const StyledImg = styled.img`
    width: 2rem;
    margin-right: 0.1rem;

    @media(max-width: 500px){
        width: 1.7rem;
    }
    @media(max-width: 400px){
        width: 1.5rem;
    }
    @media(max-width: 370px){
        width: 1.4rem;
    }
`


const ServiceComponent = ({ image_icon, field, text }) => {
    let opaque;

    if (field === undefined) {
        opaque = 0.4;
    }
    else {
        opaque = 1;
    }

    return (
        <StyledDiv>
            <StyledImg src={image_icon} alt="Cash on delivery" />

            <StyledP>{text}</StyledP>
        </StyledDiv>
    )
}



const Services = () => {
    const { productdetail } = useContext(DataContext)

    return (
        <StyledMainDiv>

            <ServiceComponent image_icon={warranty_img} field={productdetail.services.Warranty} text={productdetail.services.Warranty === undefined ? 'No Warranty Coverage' : `${productdetail.services.Warranty} Warranty`} />

            <ServiceComponent image_icon={return_img} field={productdetail.services.Return} text={productdetail.services.Return === undefined ? 'Non Returnable Item' : `Returnable within ${productdetail.services.Return} of delivery`} />

            <ServiceComponent image_icon={replacement_img} field={productdetail.services.Replacement} text={productdetail.services.Replacement === undefined ? 'Non Replaceable Item' : `Replaceable within ${productdetail.services.Replacement} of delivery`} />

            <ServiceComponent image_icon={cash_on_delivery_img} field={productdetail.services.Cash_On_Delivery} text={productdetail.services.Cash_On_Delivery === undefined ? 'Cash on delivery not available' : 'Cash on delivery available'} />

        </StyledMainDiv>
    )
}

export default Services;