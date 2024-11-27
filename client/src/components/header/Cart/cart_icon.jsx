import styled from 'styled-components'
import { Link } from "react-router-dom";

// images
import cart_img from '../images/cart.png';

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

const CartIcon = () => {

    return (
        <StyledDiv>
            <StyledLink to={`/user/cart`}>
                <img
                    src={cart_img}
                    alt="Profile"
                    style={{
                        width: '1.5rem',
                        height: '1.5rem',
                        maxWidth: '100px',
                        // height: 'auto',
                        display: 'block',
                    }}
                />

                <p style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: 'black',
                    textAlign: 'center',
                    margin: '0.5rem 0',
                    lineHeight: '1.2',
                }}>
                    Cart
                </p>
            </StyledLink>
        </StyledDiv>
    );
}

export default CartIcon;