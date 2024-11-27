import { useContext, useState, useRef, useEffect } from "react";
import { DataContext } from '../../context/DataProvider'
import styled from 'styled-components'

// redux
import { useSelector } from 'react-redux';

// Images
import menu_img from './images/menu.png';
import cancel_img from './images/cancel.png';

// Components
import Cart from './Cart/cart_icon';
import MyOrderIcon from './My_Orders/my_order_icon';
import Profile from './Profile/profile';
import LoginButton from './Login/Login-button';

const ResponsiveMenuIcon = styled.div`
    display: none;

    @media(max-width:1000px){
        display: flex;
        flexDirection: column;
    }

    &:hover{
        cursor:pointer;
        transform: scale(1.1);
    }
`

const ResponsiveDrawer = styled.div`
    background-color: #fafafa;
    height: 100vh;
    width: 15vw; 
    position: fixed;
    left: 0;
    top: 0.05rem;
    z-index: 1001;
    border: 2px solid black;
    border-left: none;
    justify-content: start;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 2rem;

    @media(max-width:1000px){
        width: 25vw; 
    }

    @media(max-width:600px){
        width: 25vw; 
    }

    @media(max-width:400px){
        width: 35vw; 
    }
`

const Menu = () => {
    const user = useSelector((state) => state.user)     // user was the key mapping to the userReducer in your root reducer in store.js
    const { userInfo } = user

    const { menuclicked, setmenuclicked, setalert } = useContext(DataContext);
    const containerRef = useRef(null)

    useEffect(() => {
        if (containerRef.current) {
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [menuclicked])


    useEffect(() => {
        const handleClickOutside = (event) => {
            // console.log("==================> Clicked Outside !!!")
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setmenuclicked(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <>
            <ResponsiveMenuIcon>
                <img onClick={() => { setmenuclicked(!menuclicked) }} src={menu_img} alt="Menu" style={{ width: '1.5rem' }} />
            </ResponsiveMenuIcon>

            {menuclicked === true ?
                <>
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Makes everything else appear dull
                        zIndex: 5,
                    }}>
                        <ResponsiveDrawer ref={containerRef}>
                            <img onClick={() => { setmenuclicked(false) }} src={cancel_img} alt="Close" style={{ cursor: 'pointer', width: '1.4rem', position: 'absolute', right: '0.3rem', top: '0.2rem' }} />

                            {userInfo !== null ?
                                <>
                                    <MyOrderIcon menu={true} />

                                    <hr style={{ border: "1px solid #8d918d", width: '99%' }} />

                                    <Cart menu={true} />

                                    <hr style={{ border: "1px solid #8d918d", width: '99%' }} />
                                </>

                                :

                                null
                            }

                            {userInfo !== null ? <Profile menu={true} /> : <LoginButton />}

                        </ResponsiveDrawer>
                    </div>
                </>

                :

                null
            }


        </>
    )
}

export default Menu;