import Carousel from "react-multi-carousel";
import Countdown from 'react-countdown'
import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import { Link, useNavigate } from 'react-router-dom';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { actionProductSlide, actionProductSlideReset } from '../../redux/actions/productActions'

// images
import spinner_gif from '../header/images/spinner.gif'
import time_left from './images/time_left.png'


const StyledCarousel = styled(Carousel)`
  .react-multiple-carousel__arrow {
    z-index: 1; /* Lower the z-index for the arrows */
  }
`;

const StyledButton = styled.button`
    background-color: blue;
    color: white;
    font-weight: 600;
    border-radius: 4px;
    cursor: pointer;    
    padding: 0.3rem;
    height: 2rem;
    &:hover{
        cursor: pointer;
        transform: scale(1.07)
    }
`

const StyledDiv = styled.div`
    text-align: center;
    margin-top: 2rem;
    &:hover{
        cursor: pointer;
        transform: scale(1.07)
    }
`

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Products_Slide = ({ tagline }) => {
    const nav = useNavigate();

    const { setproductdetail } = useContext(DataContext)

    const MoveToProductPage = (product) => {
        // console.log("===============> product = ", product)
        setproductdetail(product)
        nav(`/product/${product._id}`)
    }

    // Redux
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product)
    const { slide_prdts, isLoading } = product

    // state
    const [taglineProducts, settaglineProducts] = useState([]);
    // const [tem1, settem1] = useState(true);



    useEffect(() => {
        // console.log("================> inside product slide")
        dispatch(actionProductSlide(tagline, 0, 8, 'most-bought'));
    }, [])


    useEffect(() => {

        if (slide_prdts[tagline]) {
            // console.log("=============> inside")

            // settem1(false);
            settaglineProducts(slide_prdts[tagline]);
            // settaglineProducts((prev) => [...prev, ...slide_prdts[tagline]]);
            dispatch(actionProductSlideReset(tagline))
        }
        else {
            // console.log("=============> outside = ", slide_prdts)
        }
    }, [slide_prdts[tagline]])


    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            // To be completed
            // return <div>Done, ab baad mei aana</div>
            return null;
        }
        else {
            return <div style={{ color: 'red', fontWeight: '600' }}>{hours}hr {minutes}min {seconds}sec Left</div>
        }
    }

    const now = new Date();
    const endOfDay = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        23, 59, 59, 999
    );
    const timeUntilEndOfDay = endOfDay - new Date();

    return (
        <>
            {isLoading ?

                <img src={spinner_gif} style={{ width: '5rem', height: '5rem', position: 'fixed', top: '5px', left: '50%', zIndex: '6' }} />

                :

                <div style={{ backgroundColor: 'white', marginBottom: '0.5rem' }}>
                    <hr style={{ border: "1px solid #ccc", margin: "1rem 0.1rem 0.5rem 0.1rem" }} />

                    <div style={{ padding: '0rem', display: 'flex', margin: '0rem 0rem 0rem 0rem', }}>

                        <div style={{ marginLeft: 'auto' }}>
                            <p style={{ fontSize: '1.7rem', fontWeight: '600', padding: '0', textDecoration: "none", textUnderlineOffset: '0.5rem' }}>{tagline}
                            </p>

                            {tagline === "Deal of the Day" &&
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '0.4rem' }}>
                                    <img src={time_left} alt='timer' style={{ width: '1.5rem', margin: '0 0.5rem 0 0' }} />

                                    <Countdown date={Date.now() + timeUntilEndOfDay} renderer={renderer} />
                                </div>
                            }
                        </div>


                        <Link to={`tagline/${tagline}`} style={{ textDecoration: 'none', color: 'white', margin: "0.3rem 0.5rem 0 auto" }}>
                            <StyledButton>
                                View all
                            </StyledButton>
                        </Link>


                    </div>

                    <StyledCarousel
                        responsive={responsive}
                        dotListClass="custom-dot-list-style"
                        swipeable={true}       // Enable swipeable functionality
                        draggable={true}       // Enable draggable functionality
                        showDots={false}
                        // renderDotsOutside={true}
                        centerMode={true}
                        slidesToSlide={1}
                        autoPlay={false}
                        autoPlaySpeed={3000}
                        infinite={false}
                        keyBoardControl={true}
                    >
                        {taglineProducts.map((item, index) => (

                            <StyledDiv key={index} onClick={() => MoveToProductPage(item)}>
                                <img src={require(`../${item.lowRes}`)} alt="Product" style={{ width: '4rem' }} />

                                <p style={{ fontWeight: '600', color: 'black' }}>{item.title.shorttitle}</p>

                                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.2rem' }}>
                                    <p style={{ color: 'grey', textDecoration: 'line-through', fontSize: '1rem' }}>₹{item.price.mrp}</p>

                                    <p style={{ fontWeight: '600', color: 'black', fontSize: '1rem' }}>&nbsp;₹{item.price.cost}</p>
                                </div>
                                <p style={{ color: 'green' }}>{item.price.discount} off</p>
                            </StyledDiv>

                        ))}
                    </ StyledCarousel>
                </div >
            }
        </>
    )
}

export default Products_Slide;