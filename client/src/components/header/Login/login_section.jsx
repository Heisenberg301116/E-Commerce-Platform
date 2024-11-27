import { useState, useRef, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { DataContext } from '../../../context/DataProvider';
import styled from 'styled-components'

// redux
import { useDispatch } from 'react-redux';
import { actionLogin } from '../../../redux/actions/userActions'

// images
import login_img from '../images/login.png';
import cross_img from '../images/cross.png';
import delete_img from '../images/delete.png';


const StyledGridDiv = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
    display: grid;
    grid-template-columns: 50% 50%;
    background-color: white;
    gap: 2rem;
    border: 2px solid black;
    padding: 0rem 1rem 0.2rem 1rem;
    border-radius: 7px;
    justify-content: center;
    align-items: center;

    @media(max-width: 800px){
        grid-template-columns: 55vw;
    }

    @media(max-width: 400px){
        grid-template-columns: 75vw;
    }
`

const StyledLeftDiv = styled.div`
    grid-column: 1;
    align-self: start;
    padding: 0.1rem;

    @media(max-width: 800px){
        display: none;
    }
`

const StyledP = styled.p`
    text-align: center;
    font-size: 14px;
    color: red;
    font-weight: 600;    

    &:hover{
        cursor: pointer;
        transform: scale(1.02)
    }
`

const StyledCrossImg = styled.img`
    display: block;
    width: 1rem;
    position: absolute;
    right: 0.6rem;
    top: 0.6rem;

    &:hover{
        cursor: pointer;
        transform: scale(1.1)
    }
`

const StyledDeleteImg = styled.img`
    display: block;
    width: 1rem;
    height: 1.3rem;
    margin-left: 1rem;
    

    &:hover{
        cursor: pointer;
        transform: scale(1.1)
    }
`

const StyledButton = styled.button`    
    height: 2.6rem;
    width: 11rem;
    color: white;
    font-weight: 600;
    font-size: 1rem;
    margin: 2.5rem auto 2rem auto;
    display: block;
    background-color: #181cf5;
    border: none;
    border-radius: 10px;

    &:hover{
        cursor: pointer;
        transform: scale(1.03);
    }
`

const StyledInput = ({ type, placeholder, focus, setfocus, obj, fieldName, setobj }) => {
    return (
        <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <input
                type={type}
                value={obj[fieldName]}
                placeholder={placeholder}
                onFocus={() => setfocus(true)}
                onBlur={() => setfocus(false)}
                onChange={(event) => { setobj({ ...obj, [fieldName]: event.target.value }) }}
                style={{
                    display: 'block',
                    height: '2rem',
                    width: '100%',
                    outline: 'none',
                    padding: '0rem',
                    border: 'none',
                    fontSize: '1rem',
                    borderBottom: focus ? '2px solid red' : '0.5px solid black',
                }}
            />

            <StyledDeleteImg onClick={() => setobj({ ...obj, [fieldName]: '' })} title="Clear field" src={delete_img} alt={"clear text"} />
        </div>
    )
}

const LoginPage = ({ setDialog }) => {
    const nav = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const [isfocusedemail, setisfocusedemail] = useState(false)
    const [isfocusedpassword, setisfocusedpassword] = useState(false)

    const { loginInfo, setloginInfo, setalert, islogindialog, setislogindialog, menuclicked } = useContext(DataContext)

    const containerRef = useRef(null);

    const ToggleAccount = () => {
        setislogindialog(!islogindialog)
    }

    const handleSubmitLogin = async () => {
        // Performing Basic Input Validation at the frontend
        const missingFields = [];
        if (!loginInfo.email)
            missingFields.push('email');
        if (!loginInfo.password)
            missingFields.push('password');

        if (missingFields.length === 1) {
            setalert({
                colour: '#f71505', message: `Enter your ${missingFields[0]} !`
            })
            return;
        }
        else if (missingFields.length > 1) {
            setalert({
                colour: '#f71505', message: `Enter your ${missingFields.join(', ')} !`
            })
            return;
        }
        else {
            dispatch(actionLogin(loginInfo.email, loginInfo.password))

            // Reload the current page
            // window.location.reload();            

            // nav(`${location.pathname}`, { replace: true }); // Redirect to the same route
        }
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target.id === 'login_button_id') {
                return;
            }

            else if (containerRef.current && !containerRef.current.contains(event.target)) {
                setDialog(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            if (menuclicked === false) {
                document.body.style.overflow = 'auto';
            }
        }
    }, [])

    return (
        <>
            <StyledGridDiv ref={containerRef}>
                <StyledLeftDiv>
                    <p style={{ fontSize: '1.2rem', color: 'black', fontWeight: 500, margin: '0.7rem 1rem', lineHeight: '1.6rem' }}>
                        Login to get access to Orders, Cart and much more !
                    </p>

                    <img src={login_img} alt="signup" style={{
                        width: "25vw",
                        height: "45vh",
                        padding: '0 1rem',
                        boxSizing: 'border-box',
                    }} />
                </StyledLeftDiv>




                <div style={{
                    padding: '0rem 1rem 1rem 1rem',
                }}>

                    <StyledCrossImg onClick={() => { setDialog(false) }} src={cross_img} alt="Close" title="Close" />

                    <p style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '600', padding: '0', margin: '0.2rem 0 1rem 0', color: "#078236" }}>Login</p>

                    <p style={{ fontSize: '1rem', fontWeight: '500', margin: '0rem 0 1.5rem 0', color: "#fa0cab" }}>(To login as a guest user, use the following credentials: Email: 'abc' and Password: 'abc')</p>

                    <StyledInput type="text" placeholder="Enter your email" focus={isfocusedemail} setfocus={setisfocusedemail} obj={loginInfo} fieldName='email' setobj={setloginInfo} />

                    <StyledInput type="text" placeholder="Enter password" focus={isfocusedpassword} setfocus={setisfocusedpassword} obj={loginInfo} fieldName='password' setobj={setloginInfo} />

                    <StyledButton onClick={handleSubmitLogin}>Login</StyledButton>

                    <StyledP onClick={() => ToggleAccount()}>
                        New to Nexus ? Create account here.
                    </StyledP>

                </div>
            </StyledGridDiv >
        </>
    )
};

export default LoginPage;