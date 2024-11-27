import { useState, useContext, useEffect } from 'react';
import { DataContext } from '../../../context/DataProvider';
import styled from 'styled-components'

// redux
import { useDispatch, useSelector, } from 'react-redux';
import { actionLogin } from '../../../redux/actions/userActions'

// components
import LoginPage from './login_section'
import SignupPage from './signup_section'

const StyledButton = styled.button`
    padding: 0.8rem 1rem;
    border: none;
    background-color: #181cf5;
    color: white;
    font-weight: 600;
    font-size: 1rem;
    border-radius: 10px;

    &:hover{
        cursor: pointer;
        transform: scale(1.03);
    }
`

const LoginButton = () => {    
    const user = useSelector((state) => state.user)
    
    const { islogindialog, setalert } = useContext(DataContext)

    const [clickedbutton, setclickedbutton] = useState(false);

    const toggleDialog = () => {
        setclickedbutton(!clickedbutton)
    }

    return (
        <>
            <StyledButton id="login_button_id" onClick={toggleDialog}>
                Login
            </StyledButton>

            {
                clickedbutton ?
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Makes everything else appear dull
                        zIndex: 5,
                    }}>
                        {
                            islogindialog ? <LoginPage setDialog={setclickedbutton} />

                                :

                                <SignupPage setDialog={setclickedbutton} />
                        }
                    </div>

                    :

                    null
            }
        </>
    );
}

export default LoginButton;