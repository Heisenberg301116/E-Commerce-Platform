import styled from 'styled-components'

// images
import success_img from './header/images/success.png'
import fail_img from './header/images/failure.png'

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
    gap: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 95vw;

    @media(max-width: 600px){
        gap: 1rem;
    }
`

const StyledImg = styled.img`
    width: 20rem;

    @media(max-width: 900px){  
        width: 15rem; 
    }

    @media(max-width: 600px){  
        width: 10rem; 
    }
`

const StyledP = styled.p`
    font-size: 2rem;
    color: red;
    font-weight: 500;
    text-align: center;

    @media(max-width: 600px){
        font-size: 1.6rem;
    }
`

const Success = () => {
    return (
        <StyledDiv>

            <StyledP style={{ color: 'green' }}>Payment Successful !</StyledP>

            <StyledImg src={success_img} alt="Success" />

        </StyledDiv>
    );
}

const Failure = () => {
    return (
        <StyledDiv>

            <StyledP>Payment Failed ! Please try again later</StyledP>

            <StyledImg src={fail_img} alt="Failure" />

        </StyledDiv>
    );
}

export { Success, Failure };