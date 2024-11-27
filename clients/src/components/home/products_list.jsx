import { useEffect, useState, useRef, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";
import styled from 'styled-components'

// redux
import { useDispatch, useSelector } from 'react-redux';
import { actionCategoryProducts, actionTaglineProducts, actionSearchProducts, actionProductStateReset } from '../../redux/actions/productActions'

// images
import spinner_gif from '../header/images/spinner.gif'

// images
import star_img from './images/star.png'
import no_result_img from './images/no-results.png'

const Styledh2 = styled.h2`
    margin: 0.8rem 0;
    font-size: 1.8rem;
    text-align: center;

    
    @media(max-width: 400px){
        font-size: 1.5rem;
    }
    @media(max-width: 300px){
        font-size: 1.4rem;
    }
`
const StyledSelect = styled.select`
    padding: 0 0 0 0.1rem;
    height: 2.5rem;
    font-size: 1rem;
    border: 2px solid silver;
    border-radius: 5px;
    background-color: white;
    color: #333;
    outline: none;
    cursor: pointer;    

    &:focus {
        border-color: #007BFF;
    }

    &:hover {
        border-color: #007BFF;
    }

    option {
        background: #fff;
        color: #333;
        padding: 10rem;
    }
`;

const Styledh3 = styled.h3`   
    font-weight: 600;
    font-size: 1.4rem;
    color: black;

    @media(max-width: 300px){
        font-size: 1.1rem;
    }
    @media(max-width: 400px){
        font-size: 1.2rem;
    }
`

const StyledPricingDiv = styled.div`
    display: flex;
    gap: 0.7rem;
    align-items: center;

    @media(max-width: 450px){
        gap: 0.4rem;
        font-size: 0.95rem;
    }
    @media(max-width: 370px){
        font-size: 0.92rem;
    }
`

const StyledProductRatingDiv = styled.div`
    background-color: #1e8543;
    padding: 0.15rem 0.3rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    // font-size: 0.77rem;

 
    @media(max-width: 400px){
        padding: 0.08rem 0.23rem 0.1rem 0.23rem;
        font-size: 0.7rem;        
    }
`
const StyledProductStarImg = styled.img`
    height: 0.65rem; 
    background-color: #1e8543;

    @media(max-width: 600px){
        height: 0.65rem; 
    }
    @media(max-width: 500px){
        height: 0.6rem; 
    }
    @media(max-width: 370px){
        height: 0.6rem; 
    }
`

const StyledImg = styled.img`
    width: 10rem;
    margin-bottom: 0.5rem;
`

const StyledGridDiv = styled.div`
    display: grid;    
    border-left: 2px solid silver;   
    grid-template-columns: auto auto auto auto;
    
    @media(max-width: 1200px){
        grid-template-columns: auto auto auto;       
    }

    @media(max-width: 750px){
        grid-template-columns: auto auto;
    }

    @media(max-width: 500px){
        grid-template-columns: auto;
    }
`


const ProductRating = ({ productdetail }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '1rem', alignItems: 'center' }}>


            <StyledProductRatingDiv>
                <p style={{ color: 'white', fontWeight: 600, fontSize: '0.9rem', }}>{productdetail.average_stars}</p>

                <StyledProductStarImg src={star_img} alt="star" />
            </StyledProductRatingDiv>

            <p style={{ color: 'grey', fontSize: '0.99rem', fontWeight: 600, textAlign: 'center' }}>{productdetail.total_ratings} Ratings & {productdetail.total_reviews} Reviews</p>
        </div>
    )
}

const ProductPricing = ({ productdetail }) => {

    return (
        <StyledPricingDiv >
            <p style={{ fontSize: '1.4rem', fontWeight: 600, color: 'black' }}>₹{productdetail.price.cost}</p>

            <p style={{ fontSize: '1.1rem', fontWeight: 600, textDecoration: 'line-through', color: 'grey' }}>₹{productdetail.price.mrp}</p>

            <p style={{ fontSize: '1rem', fontWeight: 600, color: 'green' }}>{productdetail.price.discount} off</p>
        </StyledPricingDiv >
    )
}



const DeliveryCharges = ({ productdetail }) => {
    const expected_date = new Date(new Date().getTime() + `${productdetail.delivery_time}` * 24 * 60 * 60 * 1000)

    return (
        <>
            <p style={{ fontWeight: 600, color: 'blue' }}>
                {productdetail.delivery_charges === 0 ? 'Free Delivery !' : `Delivery Charges: ₹${productdetail.delivery_charges}`}
            </p>

            {
                productdetail.free_delivery_over !== null &&
                <p style={{ fontWeight: 600, color: '#f702ca' }}>
                    (Free delivery for orders above ₹{productdetail.free_delivery_over})
                </p>
            }
        </ >
    )
}

const SingleProductComponent = ({ obj }) => {
    const nav = useNavigate();

    const { setproductdetail } = useContext(DataContext)

    const MoveToProductPage = (product) => {
        // console.log("===============> product = ", product)
        setproductdetail(product)
        nav(`/product/${product._id}`)
    }

    return (
        <div onClick={() => MoveToProductPage(obj)} style={{ borderBottom: '2px solid silver', borderRight: '2px solid silver', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '0.35rem', padding: '1rem' }}>
            <StyledImg src={require(`../${obj.lowRes}`)} alt="Product" />

            <Styledh3>{obj.title.shorttitle}</Styledh3>

            <ProductRating productdetail={obj} />

            <ProductPricing productdetail={obj} />

            <DeliveryCharges productdetail={obj} />
        </div>
    )
}

const ProductsList = () => {
    // Redux
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product)
    const { tagline, categories, search, isLoading } = product

    // state    
    const [productsarr, setproductsarr] = useState([]);
    const [sortmethod, setsortmethod] = useState('most-bought');

    // Ref
    const skipRef = useRef(0);

    // Pagination
    const limit = 10;

    // URL parameters
    const { category } = useParams();
    const { tag } = useParams();
    const { query } = useParams();

    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    const LoadMoreProducts = () => {
        // console.log("===========> calling loadproducts function and skipRef.current = ", skipRef.current)
        if (skipRef.current === -1) {
            return;
        }
        if (category && !categories) {
            dispatch(actionCategoryProducts(category, skipRef.current, limit, sortmethod));
        }
        else if (tag && !tagline) {
            dispatch(actionTaglineProducts(tag, skipRef.current, limit, sortmethod));
        }
        else if (query && !search) {
            // console.log("=========> query = ", query)
            dispatch(actionSearchProducts(query, skipRef.current, limit, sortmethod));
        }
    }

    useEffect(() => {
        // console.log("================> inside 1st useEffect")
        skipRef.current = 0;
        setproductsarr([])
        LoadMoreProducts();
    }, [sortmethod, query])


    useEffect(() => {
        // console.log("================> inside 2nd useEffect")
        if (tagline) {
            if (tagline.length < limit) {
                skipRef.current = -1;
            }
            else {
                skipRef.current += limit;
            }
            setproductsarr((prevState) => [...prevState, ...tagline]);
            dispatch(actionProductStateReset(['TAGLINE_RESET']))
        }
        else if (categories) {
            // console.log("=========> categories= ", categories)
            if (categories.length < limit) {
                skipRef.current = -1;
            }
            else {
                skipRef.current += limit;
            }
            setproductsarr((prevState) => [...prevState, ...categories]);
            dispatch(actionProductStateReset(['CATEGORY_RESET']))
        }
        else if (search) {
            // console.log("=============> search = ", search)
            if (search.length < limit) {
                skipRef.current = -1;
            }
            else {
                skipRef.current += limit;
            }
            setproductsarr((prevState) => [...prevState, ...search]);
            dispatch(actionProductStateReset(['QUERY_RESET']))
        }
    }, [tagline, categories, search])

    /////////////////////////////////////////////////////////////////////////////////////////////////////////

    useEffect(() => {
        const handleScroll = () => {
            if (skipRef.current === -1) {
                // console.log("===========> skipping further processing")
                return; // Skip further processing
            }

            const scrollTop = window.scrollY; // scroll position from the top of the window

            if (scrollTop === 0) {
                return;
            }

            const scrollHeight = document.documentElement.scrollHeight; // total height of the document
            const clientHeight = window.innerHeight; // height of the visible part of the page

            // console.log("=============> scrolltpo = ", scrollTop, " and scrollHeight = ", scrollHeight)

            if (scrollTop + clientHeight >= scrollHeight - 20) {
                // console.log("===========> scroll ative")
                LoadMoreProducts(); // Load more products if scrolled near the bottom
            }
        };

        window.addEventListener('scroll', handleScroll); // Attach the scroll event listener to the window

        return () => {
            window.removeEventListener('scroll', handleScroll); // Clean up the event listener on unmount
        };
    }, []);


    const handleSortingChange = (event) => {
        setsortmethod(event.target.value);
    }

    return (
        <>
            {isLoading && <img src={spinner_gif} style={{ width: '5rem', height: '5rem', position: 'fixed', top: '5px', left: '50%', zIndex: '6' }} />}

            {
                productsarr.length === 0 && skipRef.current === -1 ?

                    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                        <img src={no_result_img} alt="Not found anything" style={{ width: '20vw' }} />

                        <p style={{ fontSize: '1.8rem', fontWeight: 500 }}>Sorry, no result found !</p>

                        <p style={{ fontSize: '1.6rem', color: 'grey', fontWeight: 500 }}>Try searching for something else</p>
                    </div>

                    :

                    <div style={{ margin: "0.1rem" }}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', border: '2px solid silver' }}>
                            <Styledh2>{category ? category : tag}</Styledh2>

                            {query !== undefined && <Styledh3 style={{ margin: '0.8rem' }}>Search result for: "{query}"</Styledh3>}

                            <StyledSelect value={sortmethod} onChange={handleSortingChange}>
                                <option value="lowest-price">Price: Low to High</option>
                                <option value="highest-price">Price: High to Low</option>
                                <option value="lowest-delivery-charges">Delivery Charges: Low to High</option>
                                <option value="top-rated">Top Rated</option>
                                <option value="most-rated">Most Rated</option>
                                <option value="most-reviewed">Most Reviewed</option>
                                <option value="most-bought">Most Sold</option>
                            </StyledSelect>
                        </div>

                        <StyledGridDiv>
                            {
                                productsarr.map((obj, index) => (
                                    <SingleProductComponent key={index} obj={obj} />
                                ))
                            }
                        </StyledGridDiv>
                    </div>
            }
        </>
    )
}

export default ProductsList;