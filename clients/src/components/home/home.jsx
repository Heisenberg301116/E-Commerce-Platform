// Importing components
import Navbar from './navbar'
import Banner from './banner'
import Products_Slide from './products-slide';


const Home = () => {
    return (
        <div style={{
            margin: '0.1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.1rem'
        }}>
            <Navbar />
            <Banner />
            <Products_Slide tagline='Deal of the Day' />

            <Products_Slide tagline='Trending Offers' />

            <Products_Slide tagline="Season's Top Picks" />

            <Products_Slide tagline='Top Deals on Accessories' />
        </div>
    )
};

export default Home;