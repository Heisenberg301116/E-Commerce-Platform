import { useContext } from "react";
import { DataContext } from "../../../context/DataProvider";
import styled from 'styled-components'

// redux
import { useDispatch, useSelector } from 'react-redux';
import { actionAddToCart } from '../../../redux/actions/userActions'

// images
import spinner_gif from '../../header/images/spinner.gif'

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

const AddtoCart = () => {
    // Redux
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user)
    const { userInfo, isLoading } = user

    const { setalert, productdetail } = useContext(DataContext)

    const handleAddtoCart = () => {
        // return;
        if (userInfo === null) {
            setalert({ colour: '#ffa500', message: 'Login to access Cart !', fontcolor: 'black' })
        }
        else {
            dispatch(actionAddToCart(userInfo._id, productdetail._id, 1));
        }
    }


    return (
        <>
            {isLoading && <img src={spinner_gif} style={{ width: '5rem', height: '5rem', position: 'fixed', top: '5px', left: '50%', zIndex: '6' }} />}

            <StyledButton onClick={handleAddtoCart} style={{ backgroundColor: '#0a2ef7' }}>ADD TO CART</StyledButton>
        </>

    )
}

export default AddtoCart;