import { useContext } from "react";
import { DataContext } from "../../../context/DataProvider";

import styled from 'styled-components'

const StyledImg = styled.img`   
    width: 6rem;
`

const StyledButton = styled.button.withConfig({
    shouldForwardProp: (prop) => prop !== 'nomore'
})`
    border: 2px solid black;
    background-color: #ebe8e8;    
    border-radius: 50%;
    font-size: 1.2rem;
    width: 1.8rem;
    height: 1.8rem;
    font-weight: 700;
    color: #194df7;
    opacity: ${(props) => props.nomore === 'true' ? 0.3 : 1};
    
    &:hover{
        cursor: ${(props) => props.nomore === 'true' ? 'not-allowed' : 'pointer'};
        
        transform: ${(props) => props.nomore === 'true' ? 'none' : "scale(1.05)"};
    }
`

const StyledP = styled.p`
font - size: 1.5rem;
`

const ImageAndQuantity = ({ cart_index }) => {        // cart_id is the id of the current item in the cart.     
    const { setalert, cartproducts, setcartproducts, productsdataarr, imagesarr, cartpricing, setcartpricing } = useContext(DataContext);

    const obj = cartproducts[cart_index];

    const handleClick = (value) => {
        if (value === -1 && obj.quantity === 1) {
            return null;
        }

        else if (value === 1 && obj.quantity === productsdataarr[cart_index].max_quantity) {
            setalert({ message: 'Maximum quantity reached for this product !', colour: '#ffa500', fontcolor: 'black' })
            return null;
        }

        else {
            setcartproducts((prevstate) => {
                const updatedProducts = [...prevstate];

                updatedProducts[cart_index] = {
                    ...updatedProducts[cart_index],
                    quantity: updatedProducts[cart_index].quantity + value
                };

                return updatedProducts;
            });

            const new_mrp = cartpricing.mrp + value * productsdataarr[cart_index].price.mrp;

            const new_discount = cartpricing.discount + value * (productsdataarr[cart_index].price.mrp - productsdataarr[cart_index].price.cost);

            const new_total_amt = new_mrp - new_discount;

            let delivery_fee = 0;

            productsdataarr.map((obj) => {
                if (obj.delivery_charges === 0) {
                    // Continue
                }
                else if (obj.free_delivery_over === null) {
                    delivery_fee += obj.delivery_charges;
                }
                else if (obj.free_delivery_over < new_total_amt) {
                    // Continue
                }
                else {
                    delivery_fee += obj.delivery_charges;
                }
            })

            setcartpricing({
                mrp: new_mrp,
                discount: new_discount,
                delivery_charges: delivery_fee
            });
        }
    }

    return (
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

            <StyledImg src={require(`../../${imagesarr[cart_index]}`)} alt="Product" />

            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', alignItems: 'center' }}>
                <StyledButton nomore={obj.quantity === 1 ? 'true' : 'false'} onClick={() => { handleClick(-1) }}>
                    -
                </StyledButton>

                <StyledP>{obj.quantity}</StyledP>

                <StyledButton nomore={obj.quantity === productsdataarr[cart_index].max_quantity ? 'true' : 'false'} onClick={() => { handleClick(1) }}>
                    +
                </StyledButton>
            </div>

        </div>
    )
}

export default ImageAndQuantity;