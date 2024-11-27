import { useContext } from "react";
import { DataContext } from "../../../context/DataProvider";
import styled from 'styled-components'

// redux
import { useDispatch, useSelector } from 'react-redux';
import { actionAddToMyOrders } from '../../../redux/actions/userActions'

// images
import spinner_gif from '../../header/images/spinner.gif'

// Services
import { buyNow } from "../../../service/PaymentAPIs";

const StyledButton = styled.button`
    padding: 1rem;
    border-radius: 5px;
    border: none;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    width: 9rem;
    
    &:hover {
        transform: scale(1.05);
        cursor: pointer; 
    }

    @media(max-width:1000px){
        width: 8rem;  
        padding: 0.9rem 0;           
    }

    @media(max-width:500px){
        width: 6rem;
        padding: 0.3rem 0.2rem;
        font-size: 0.9rem;
    }

    @media(max-width:320px){
        width: 5rem;
        padding: 0.3rem 0.1rem;
        font-size: 0.8rem;
    }
`


const BuyNow = () => {
    // Redux
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user)
    const { userInfo, isLoading } = user

    const { productdetail, loggedin, setalert } = useContext(DataContext)

    const handleBuyNow = async () => {
        if (userInfo === null) {
            setalert({ colour: '#ffa500', message: 'Please Login to continue buying !', fontcolor: 'black' })
        }
        else {
            // ============================> TO DO: Move user to buy section            

            let data = {
                name: userInfo.name,
                amount: productdetail.price.cost,
                number: userInfo.phone,
                MID: 'MID' + Date.now(),
                transactionId: 'T' + Date.now()
            }

            let response = await buyNow(data);

            // console.log("===========> response = ", response)

            if (!response || response.status !== 200) {
                // console.log("===========> ")

                setalert({ colour: '#f71505', message: `Payment server not responding ! Please try again later` })

                // console.log("===========================> no response or response.status !=200");
                return;
            }
            else {
                // console.log("===============> response at buyNow = ", response)

                const delivery_date = new Date()
                delivery_date.setDate(delivery_date.getDate() + productdetail.delivery_time);
                const isoDeliveryDate = delivery_date.toISOString();
                // console.log("===============> delivery date = ", isoDeliveryDate)

                dispatch(actionAddToMyOrders(userInfo._id, productdetail._id, 1, productdetail.price.cost, productdetail.delivery_charges, isoDeliveryDate, false));

                window.location.href = response.data.data.instrumentResponse.redirectInfo.url
            }
        }
    }

    return (
        <StyledButton onClick={handleBuyNow} style={{ backgroundColor: '#e60b92' }}>BUY NOW</StyledButton>
    )
}

export default BuyNow;