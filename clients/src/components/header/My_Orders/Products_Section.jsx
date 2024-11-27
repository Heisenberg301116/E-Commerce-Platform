import { useContext } from "react";
import { DataContext } from "../../../context/DataProvider";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'

// components
import ImageAndQuantity from "./Image_and_Quantity";
import ProductHeader from "./Header";
import Pricing from "./Pricing";
import Delivery from "./Delivery";
import Feedback from "./Feedback";

const StyledMainDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 1.5rem;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    padding: 1rem;

    @media (max-width: 768px) {
        justify-content: center; /* Center children on smaller screens */
        gap: 1rem;
    }
`;

const ChildDiv = styled.div`
    flex: 0 0 auto;
    width: calc(50% - 1rem); /* Adjust width for smaller screens */
    min-width: 120px;
    cursor: pointer;

    @media (max-width: 768px) {
        width: 100%; /* Full width on very small screens */
    }
`;





const OrderItemComponent = ({ order_index }) => {
    const nav = useNavigate();

    const { myorders, setproductdetail } = useContext(DataContext);
    // console.log("============> myorders = ", myorders)

    const handleNavigate = () => {
        setproductdetail(myorders[order_index].productdata)
        nav(`/product/${myorders[order_index].productdata._id}`)
    }

    return (
        <StyledMainDiv>
            <ChildDiv onClick={handleNavigate}>
                <ImageAndQuantity order_index={order_index} />
            </ChildDiv>

            <ChildDiv onClick={handleNavigate}>
                <ProductHeader productdata={myorders[order_index].productdata} seller_data={myorders[order_index].sellerdata} />
            </ChildDiv>

            <ChildDiv>
                <Pricing price={myorders[order_index].price} delivery_charge={myorders[order_index].delivery_charge} />
            </ChildDiv>

            <ChildDiv>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <Delivery delivery_date={myorders[order_index].delivery_date} status={myorders[order_index].delivered} />
                    <Feedback review={myorders[order_index].review} review_images={myorders[order_index].review_images} pid={myorders[order_index].productdata._id} />
                </div>
            </ChildDiv>
        </StyledMainDiv>

    )
}


const ProductsSection = () => {
    const { myorders } = useContext(DataContext);
    // console.log("============> inside productsection and myorders.length = ", myorders.length)

    if (myorders.length > 0) {
        return (
            <div style={{ margin: '0.1rem' }}>
                {
                    myorders.map((obj, index) => (
                        <div key={index} style={{
                            border: '2px solid #747574', borderBottom: 'none', backgroundColor: 'white',
                        }}>
                            <OrderItemComponent order_index={index} />

                            {index + 1 === myorders.length && <hr style={{ border: '1px solid #747574' }} />}
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default ProductsSection;