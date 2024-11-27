import logo_img from './images/logo.png';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ResponsiveSlogan = styled.p`
    font-size: 0.9rem;
    line-height: 1rem;
    margin: 0.5rem 1rem;
    font-style: italic;
    font-weight: 600;

    @media(max-width:700px){
        display: none
    }
`

const ResponsiveCompanyName = styled.p`
    font-size: 1.9rem; 
    line-height: 0rem; 
    margin: 1rem 1rem; 
    font-weight: 700; 
    font-style: italic;

    @media(max-width:480px){
        display: none
    }
`

const StyledImg = styled.img`
    width: 4.5rem;
    margin-right: 0.1rem;

    &:hover{
        cursor: pointer;
        transform: scale(1.1);
    }
`


const Logo = () => {
    return (
        <div style={{
            display: "flex",
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0rem',
        }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }} >
                <StyledImg src={logo_img} alt="logo" />
            </Link >

            <div style={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <ResponsiveCompanyName>Nexus</ResponsiveCompanyName>

                <ResponsiveSlogan>Where Affordability meets Reliability</ResponsiveSlogan>
            </div>
        </div >
    );
};

export default Logo;