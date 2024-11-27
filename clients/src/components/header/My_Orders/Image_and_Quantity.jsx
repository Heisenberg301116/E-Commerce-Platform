import { useContext } from "react";
import { DataContext } from "../../../context/DataProvider";

import styled from 'styled-components'

const StyledImg = styled.img`   
    width: 6rem;
`

const StyledP = styled.p`
    font-size: 1rem;
    font-weight: 500;
    color: black;
`

const ImageAndQuantity = ({ order_index }) => {        // cart_id is the id of the current item in the cart.     
    const { myorders } = useContext(DataContext);

    const obj = myorders[order_index];

    return (
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

            <StyledImg src={require(`../../${obj.image}`)} alt="Product" />

            <StyledP>Quantity: {obj.quantity}</StyledP>

        </div>
    )
}

export default ImageAndQuantity;