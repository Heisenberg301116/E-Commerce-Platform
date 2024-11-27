import { useContext, useEffect, useState, useRef } from "react";
import { DataContext } from "../../../context/DataProvider";
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// redux
import { useDispatch, useSelector } from 'react-redux';
import { actionMyOrders, actionUserStateReset } from '../../../redux/actions/userActions'
import { actionFetchProductDetail, actionFetchSellerDetail, actionLowResImgs, actionProductStateReset } from '../../../redux/actions/productActions'
import { actionUserReviewImgs, actionUserReview, actionReviewStateReset } from '../../../redux/actions/reviewActions'

// images
import noorders_img from '../images/no_orders.avif'
import order_img from '../images/order.png'
import spinner_gif from '../images/spinner.gif'

// components
import ProductsSection from "./Products_Section";


const StyledCartImg = styled.img`
    width: 2.15rem; 
`

const StyledNoOrdersImg = styled.img`
    width: 15rem;
    position: relative;
    left: -1.2rem;
`

const StyledButton = styled.button`
    padding: 1rem;
    border-radius: 5px;
    border: none;
    color: white;
    background-color: #055af7;
    font-size: 1rem;
    font-weight: 600;
    width: 9rem;
    
    &:hover {
        transform: scale(1.02);
        cursor: pointer; 
    }
`

const Styledh1 = styled.h1`
    font-size: 2rem;   
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

const MyOrdersPage = () => {
    // Redux
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user)
    const { userInfo, orders, isLoading } = user
    const product = useSelector((state) => state.product)
    const { productDetail, sellerDetail, lowRes } = product
    const review = useSelector((state) => state.review)
    const { user_imgs, user_review } = review

    // state
    // const [skip, setskip] = useState(0);    
    const [currentIndex, setcurrentIndex] = useState(0);
    // const [ordersArray, setordersArray] = useState([]);

    // Ref
    const skipRef = useRef(0);
    const sortmethodRef = useRef('most-recent');

    // Pagination
    const limit = 10;

    // const [sortmethod, setsortmethod] = useState('most-recent');

    const { myorders, setmyorders } = useContext(DataContext);
    // console.log("=============> inside useeffct orders page")

    const handleSortingChange = (event) => {

        dispatch(actionUserStateReset(['MY_ORDERS_RESET']))     // set orders back to null (immediate terminate all loading of orders with current sorting method)
        // setsortmethod(event.target.value);
        sortmethodRef.current = event.target.value;
        setmyorders([])
        setcurrentIndex(0);
        // setskip(0);
        skipRef.current = 0;
        LoadMoreOrders();
    }

    const LoadMoreOrders = () => {
        if (skipRef.current === -1 || isLoading) {        // no more orders or redux is currently loading the previous orders, so wait
            return;
        }
        else {
            dispatch(actionMyOrders(userInfo._id, sortmethodRef.current, skipRef.current, limit));
        }
    }

    useEffect(() => {
        return () => {
            setmyorders([]);        // reset myorders array to null on unmounting
        };
    }, []);


    // ================================================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Fetching orders data 
    useEffect(() => {
        if (orders !== null) {
            if (orders.length === limit) {
                skipRef.current += limit
            }
            else {
                skipRef.current = -1;       // no more orders
            }

            if (orders.length > 0) {
                setcurrentIndex(0);    // start fetching all data for each and every order object in orders         
            }
            else {
                dispatch(actionUserStateReset(['MY_ORDERS_RESET']))     // set orders back to null 
            }
        }
    }, [orders])


    useEffect(() => {
        // console.log("=============> myorders = ", myorders)

        if (orders?.length > 0 && currentIndex < orders.length) {
            const product_id = orders[currentIndex].product_id;
            dispatch(actionFetchProductDetail(product_id));
            dispatch(actionLowResImgs(product_id));
            dispatch(actionUserReviewImgs(product_id, userInfo._id));
            dispatch(actionUserReview(product_id, userInfo._id));
        }
        else if (currentIndex === orders?.length) {
            dispatch(actionUserStateReset(['MY_ORDERS_RESET'])); // Reset orders only after last one
        }

    }, [currentIndex, orders]);


    useEffect(() => {
        if (productDetail) {
            dispatch(actionFetchSellerDetail(productDetail.seller_id));
        }
    }, [productDetail])


    useEffect(() => {
        // console.log("============> productDetail && lowRes && sellerDetail && user_imgs && user_review = ", productDetail, lowRes, sellerDetail, user_imgs, user_review)

        if (productDetail && lowRes && sellerDetail && user_imgs && user_review !== null) {
            // console.log("=============> inside orders_page final use effect and orders = ", orders)

            // console.log("============> final useeffect and lowres = ", lowRes)

            const obj = orders[currentIndex];

            const order_obj = {
                productdata: productDetail,       // fetch productdata for given obj.product_id
                sellerdata: sellerDetail,
                image: lowRes,
                quantity: obj.quantity,
                price: obj.price,
                delivery_charge: obj.delivery_charge,
                delivery_date: obj.delivery_date,
                delivered: obj.delivered,
                review: user_review,      // Fetch (if present) the user review with userid = uid for productid = pid. null if not present
                review_images: user_imgs,
            }

            setmyorders((prevState) => [...prevState, order_obj]);
            dispatch(actionProductStateReset(['LOW_RES_RESET', 'PRODUCT_DETAIL_RESET', 'SELLER_DETAIL_RESET']));
            dispatch(actionReviewStateReset(['USER_REVIEW_RESET', 'USER_IMGS_RESET']));
            setcurrentIndex((prev) => prev + 1);
        }
    }, [orders, sellerDetail, lowRes, productDetail, user_imgs, user_review])
    // ================================================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY; // scroll position from the top of the window
            const scrollHeight = document.documentElement.scrollHeight; // total height of the document
            const clientHeight = window.innerHeight; // height of the visible part of the page

            if (scrollTop + clientHeight >= scrollHeight - 20) {
                LoadMoreOrders(); // Load more orders if scrolled near the bottom
            }
        };

        // Load first 20 orders for the first time on mounting
        LoadMoreOrders();

        window.addEventListener('scroll', handleScroll); // Attach the scroll event listener to the window

        return () => {
            window.removeEventListener('scroll', handleScroll); // Clean up the event listener on unmount
        };
    }, []);

    // console.log("===================> inside orders_page")

    return (
        <>
            <div style={{
                display: 'flex', alignItems: 'center', justifyContent: "center", border: '2px solid black', backgroundColor: '#e3e4e6', margin: '0.1rem 0.1rem', padding: '0.5rem 0', gap: '1rem'
            }}>
                <Styledh1>MY ORDERS</Styledh1>

                <StyledCartImg src={order_img} alt="My Orders" />

                <StyledSelect value={sortmethodRef.current} onChange={handleSortingChange}>
                    <option value="most-recent">Most Recent</option>

                    <option value="least-recent">Least Recent</option>

                    <option value="on-the-way">On the way</option>

                    <option value="delivered">Delivered</option>
                </StyledSelect>
            </div>


            {orders !== null && <img src={spinner_gif} style={{ width: '5rem', height: '5rem', position: 'fixed', top: '5px', left: '50%', zIndex: '6' }} />}

            {
                myorders.length === 0 && skipRef.current === -1 && orders === null &&
                <div style={{ display: 'flex', justifyContent: "center", flexDirection: 'column', alignItems: 'center', margin: '0.1rem', padding: '1.5rem 0', gap: '2rem' }}>

                    <StyledNoOrdersImg src={noorders_img} alt="No Orders to display" />

                    <p style={{ fontWeight: 500, fontSize: '1.5rem' }}>No result found !</p>

                    <Link to="/">
                        <StyledButton>Shop Now</StyledButton>
                    </Link>
                </div>

            }

            {myorders.length > 0 && <ProductsSection />}

        </>
    )
}

export default MyOrdersPage;