import styled from 'styled-components'
import { Link } from 'react-router-dom';

// Importing images
import topOffers from './images/navbar/top_offers.jfif';
import grocery from './images/navbar/grocery.jfif';
import smartphones from './images/navbar/smartphones.jfif';
import fashion from './images/navbar/fashion.jfif';
import electronics from './images/navbar/electronics.jfif';
import appliances from './images/navbar/appliances.jfif';
import travel from './images/navbar/travel.jfif';
import beauty from './images/navbar/beauty.jfif';

const navData = [
    { image: topOffers, text: 'Top Offers' },
    { image: grocery, text: 'Groceries' },
    { image: smartphones, text: 'Smartphones' },
    { image: fashion, text: 'Fashion' },
    { image: electronics, text: 'Electronics' },
    { image: appliances, text: 'Appliances' },
    { image: travel, text: 'Travel' },
    { image: beauty, text: 'Beauty' },
];

const StyledDiv = styled.div`
    text-align: center;
    &:hover{
        cursor: pointer;
        transform: scale(1.02)
    }
`


const Navbar = () => {
    // console.log("===============> rednerding navbar")
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            padding: "1rem",
            flexWrap: 'wrap',
            gap: '2rem',
            backgroundColor: '#dcddde',
        }}>
            {
                navData.map(data => (
                    <StyledDiv key={data.text}>
                        <Link style={{ textDecoration: 'none' }} to={`category/${encodeURIComponent(data.text)}`}>
                            <img src={data.image} alt={data.text} style={{ width: "5rem", height: '5rem', border: "1px solid black" }} />
                            <p style={{ fontSize: '1rem', fontWeight: 400, color: 'black' }}>{data.text}</p>
                        </Link>
                    </StyledDiv>
                ))
            }
        </div >
    )
};
export default Navbar;