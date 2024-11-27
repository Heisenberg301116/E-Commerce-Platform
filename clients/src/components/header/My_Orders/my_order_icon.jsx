import styled from 'styled-components'
import { Link } from "react-router-dom";

// Images
import order_img from '../images/order.png';

const StyledImg = styled.img`
    width: 1.9rem;
    height: 1.6rem;
    display: block;
    margin: auto;
`

const StyledP = styled.p`
    font-size: 1rem;
    font-weight: 600;
    color: black;
    text-align: center;
    margin: 0.5rem 0;
    line-height: 1.2;
`

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0rem;
    &:hover {
        transform: scale(1.03);
        cursor: pointer;
    }
`

const StyledLink = styled(Link)`        
    text-decoration: none;
`;

const MyOrderIcon = () => {
    return (
        <StyledDiv>
            <StyledLink to={`/user/my-orders`}>
                <StyledImg
                    src={order_img}
                    alt="Profile"
                />

                <StyledP>
                    My Orders
                </StyledP>
            </StyledLink>
        </StyledDiv>
    );
}

export default MyOrderIcon;