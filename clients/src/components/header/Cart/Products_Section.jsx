import { useState, useEffect, useContext } from "react";
import { DataContext } from "../../../context/DataProvider";
import styled from 'styled-components'

// components
import ImageAndQuantity from "./Image_and_Quantity";
import ProductHeader from "./Product_Header";

const StyledMainDiv = styled.div`
    display: flex;    
    gap: 1.5rem;
    padding: 1.5rem;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 500px){
        flex-wrap: wrap;
    }
`

const StyledButton = styled.button`
    padding: 1rem;
    border-radius: 5px;
    border: none;
    color: white;
    background-color: #fa0244;
    font-size: 1rem;
    font-weight: 600;
    
    &:hover {
        transform: scale(1.02);
        cursor: pointer; 
    }
`

const CartItemComponent = ({ cart_index }) => {
    const { setalert, cartproducts, setcartproducts, productsdataarr, setproductsdataarr, sellerarr, setsellerarr, imagesarr, setimagesarr, cartpricing, setcartpricing } = useContext(DataContext);

    const handleRemove = () => {
        // Filter out the current object from all the arrays
        const remainingProducts = cartproducts.filter((item, index) => index !== cart_index);
        const remainingProductsData = productsdataarr.filter((item, index) => index !== cart_index);
        const remainingSellerData = sellerarr.filter((item, index) => index !== cart_index);
        const remainingImages = imagesarr.filter((item, index) => index !== cart_index);

        const new_mrp = cartpricing.mrp - cartproducts[cart_index].quantity * productsdataarr[cart_index].price.mrp;
        const new_discount = cartpricing.discount - cartproducts[cart_index].quantity * (productsdataarr[cart_index].price.mrp - productsdataarr[cart_index].price.cost);
        const new_total_amt = new_mrp - new_discount;
        let delivery_fee = 0;

        remainingProductsData.map((obj) => {
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

        setcartproducts(remainingProducts);
        setproductsdataarr(remainingProductsData);
        setsellerarr(remainingSellerData);
        setimagesarr(remainingImages);
        setcartpricing({
            mrp: new_mrp,
            discount: new_discount,
            delivery_charges: delivery_fee
        });

        setalert({ message: 'Product Removed from Cart !', colour: '#1cba34' })
    }


    return (
        <StyledMainDiv>
            <div style={{ width: '20%' }}>
                <ImageAndQuantity cart_index={cart_index} />
            </div>

            <div style={{ width: '65%' }}>
                <ProductHeader productdata={productsdataarr[cart_index]} seller_data={sellerarr[cart_index]} />
            </div>

            <div style={{ width: '15%' }}>
                <StyledButton onClick={handleRemove}>Remove</StyledButton>
            </div>
        </StyledMainDiv>
    )
}


const ProductsSection = () => {
    const { cartproducts } = useContext(DataContext);
    // console.log("=============> cartproducts = ",cartproducts)

    if (cartproducts?.length > 0) {
        return (
            <div style={{}}>
                {
                    cartproducts.map((obj, index) => (
                        <div key={index} style={{
                            border: '2px solid #747574', borderBottom: 'none', backgroundColor: 'white'
                        }}>
                            <CartItemComponent cart_index={index} />

                            {index + 1 === cartproducts.length && <hr style={{ border: '1px solid #747574' }} />}
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default ProductsSection;