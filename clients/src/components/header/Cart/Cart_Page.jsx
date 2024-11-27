import { useContext, useEffect, useState, useRef } from "react";
import { DataContext } from "../../../context/DataProvider";
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// redux
import { useDispatch, useSelector } from 'react-redux';
import { actionFetchProductDetail, actionFetchSellerDetail, actionLowResImgs, actionProductStateReset } from '../../../redux/actions/productActions'
import { actionUpdateCart } from '../../../redux/actions/userActions'

// images
import emptycart_img from '../images/empty-cart.png'
import cart_img from '../images/cart.png'
import spinner_gif from '../images/spinner.gif'

// components
import ProductsSection from "./Products_Section";
import PricingSection from "./Pricing_Section"


const StyledMainDiv = styled.div`
    display: flex;    
    margin-top: 0.2rem;
    padding: 0rem 0.1rem 1rem 0.1rem;    
    justify-content: space-around;
    gap: 1rem;   

    @media(max-width: 950px){
        flex-direction: column;
        gap: 1.5rem;
    }
`

const StyledCartImg = styled.img`
    width: 2.15rem; 
`

const StyledEmptyCartImg = styled.img`
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

const CartHeader = () => {
    return (
        <div style={{
            display: 'flex', alignItems: 'center', justifyContent: "center", border: '2px solid black', backgroundColor: '#e3e4e6', margin: '0.1rem 0.1rem', padding: '0.5rem 0', gap: '1rem'
        }}>
            <Styledh1>MY CART </Styledh1>
            <StyledCartImg src={cart_img} alt="My Cart" />
        </div>
    )
}

const EmptyCartComponent = () => {
    return (
        <>
            <CartHeader />

            <div style={{ display: 'flex', justifyContent: "center", flexDirection: 'column', alignItems: 'center', margin: '0.1rem', padding: '1.5rem 0', gap: '2rem' }}>

                <StyledEmptyCartImg src={emptycart_img} alt="Empty cart" />

                <p style={{ fontWeight: 500, fontSize: '1.5rem' }}>Your Cart is empty !</p>

                <Link to="/">
                    <StyledButton>Shop Now</StyledButton>
                </Link>
            </div>
        </>
    )
}

const CartPage = () => {
    // Redux
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user)
    const { userInfo } = user
    const product = useSelector((state) => state.product)
    const { productDetail, sellerDetail, lowRes } = product


    const { cartproducts, setcartproducts, setproductsdataarr, productsdataarr, setsellerarr, sellerarr, setimagesarr, imagesarr, setcartpricing } = useContext(DataContext);

    const cartRef = useRef(cartproducts);

    useEffect(() => {
        cartRef.current = cartproducts;
    }, [cartproducts]);

    const [currentIndex, setCurrentIndex] = useState(0);

    // Reset arrays if the cart changes
    useEffect(() => {
        setsellerarr([]);
        setproductsdataarr([]);
        setimagesarr([]);
        setCurrentIndex(0);
        setcartproducts(userInfo.cart || []);
    }, [userInfo.cart]);


    useEffect(() => {
        if (userInfo.cart && currentIndex < userInfo.cart.length) {
            const productId = userInfo.cart[currentIndex].product_id;
            dispatch(actionFetchProductDetail(productId));
            dispatch(actionLowResImgs(productId));
        }
    }, [currentIndex, userInfo.cart]);


    useEffect(() => {
        if (productDetail) {
            dispatch(actionFetchSellerDetail(productDetail.seller_id));
        }
    }, [productDetail])



    useEffect(() => {
        if (productDetail && lowRes && sellerDetail) {
            setimagesarr(prevImages => [...prevImages, lowRes]);
            setsellerarr((prev) => [...prev, sellerDetail]);
            setproductsdataarr(prevProducts => [...prevProducts, productDetail]);

            dispatch(actionProductStateReset(['LOW_RES_RESET', 'PRODUCT_DETAIL_RESET', 'SELLER_DETAIL_RESET']));       // V Imp for Redux State Synchronization

            setCurrentIndex((prev) => prev + 1);
        }
    }, [sellerDetail, lowRes, productDetail])


    // Initialize Cart Pricing
    useEffect(() => {
        if (currentIndex === userInfo.cart.length) {
            let delivery_fee = 0;
            let mrp = 0;
            let discount = 0;

            productsdataarr.map((obj, index) => {
                const quantity = (cartproducts[index]).quantity
                mrp = mrp + (obj.price.mrp) * quantity;
                discount = discount + (obj.price.mrp - obj.price.cost) * quantity
            })


            productsdataarr.forEach((obj) => {
                if (obj.delivery_charges === 0) {
                    // No delivery charge
                    return;
                }
                else if (obj.free_delivery_over === null) {
                    delivery_fee += obj.delivery_charges;
                }
                else if (obj.free_delivery_over >= mrp - discount) {
                    delivery_fee += obj.delivery_charges;
                }
            });

            setcartpricing({
                mrp: mrp,
                discount: discount,
                delivery_charges: delivery_fee
            });
        }
    }, [currentIndex])


    useEffect(() => {
        return () => {
            const latestCart = cartRef.current;
            if (userInfo.cart?.length > 0 && latestCart !== null && latestCart !== userInfo.cart) {
                dispatch(actionUpdateCart(userInfo._id, latestCart))
            }
            setcartproducts(null);
        };

    }, []);



    if (userInfo.cart === null || userInfo.cart.length === 0) {
        return (
            <EmptyCartComponent />
        )
    }

    else {
        return (
            <>
                <CartHeader />
                {
                    (!cartproducts || currentIndex < cartproducts.length) && <img src={spinner_gif} style={{ width: '5rem', height: '5rem', position: 'fixed', top: '5px', left: '50%', zIndex: '6' }} />
                }

                {
                    productsdataarr?.length === cartproducts?.length && sellerarr?.length === cartproducts?.length &&
                    imagesarr?.length === cartproducts?.length &&

                    <StyledMainDiv>
                        <ProductsSection />
                        <PricingSection />
                    </StyledMainDiv>

                }
            </>
        )
    }
}

export default CartPage;