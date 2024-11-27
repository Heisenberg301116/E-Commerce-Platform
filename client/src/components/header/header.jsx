import { useContext, useEffect } from "react";
import { DataContext } from '../../context/DataProvider'
import styled from 'styled-components'

// images
import spinner_gif from './images/spinner.gif'

// redux
import { useSelector } from 'react-redux';

// Components
import Search from './search';
import Menu from './menu';
import CartIcon from './Cart/cart_icon';
import MyOrderIcon from './My_Orders/my_order_icon';
import Profile from './Profile/profile';
import LoginButton from './Login/Login-button';
import Logo from './logo';

const ResponsiveButtons = styled.div`
    display:flex;
    padding: 0px;
    gap: 3rem;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    @media(max-width:1000px){
        display: none;
    }
`


const Header = () => {
    const { setalert } = useContext(DataContext)

    const user = useSelector((state) => state.user)
    const { userInfo, error, isLoading, message } = user

    useEffect(() => {
        if (error) {
            setalert({ colour: '#f71505', message: `Error: ${error}` });

        }
        else if (message) {
            setalert({ colour: '#1cba34', message: message });
        }
    }, [error, message]);


    // const { loggedin } = useContext(DataContext);

    return (
        <>
            {isLoading && <img src={spinner_gif} style={{ width: '5rem', height: '5rem', position: 'fixed', top: '5px', left: '50%', zIndex: '6' }} />}

            <div id="header" style={{
                zIndex: 5,
                position: 'sticky',
                top: '0',
                display: "flex",
                backgroundColor: '#ebeb1e',
                boxSizing: "border-box",
                border: '0px solid black',
                padding: '0.5rem 1rem',
                margin: '0.1rem',
                alignItems: 'center',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                gap: '1rem',
            }}>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start", // Ensures Menu and Logo are aligned to the left
                    gap: "1rem",
                }}>
                    <Menu />
                    <Logo />
                </div>

                <Search />

                <ResponsiveButtons>
                    {userInfo !== null ?
                        <>
                            <CartIcon />
                            <MyOrderIcon />
                            <Profile />
                        </>

                        :

                        <LoginButton />
                    }
                </ResponsiveButtons>
            </div>
        </>
    );
}

export default Header;