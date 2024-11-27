import { useState, useRef, useEffect, useContext } from 'react';
import { DataContext } from '../../../context/DataProvider';
import styled from 'styled-components'

// redux
import { useDispatch } from 'react-redux';
import { actionSignup } from '../../../redux/actions/userActions'

// images
import signup_img from '../images/signup.jpg';
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
                value={obj[fieldName]}      //Correctly access the field value
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

const SignupPage = ({ setDialog }) => {
    const dispatch = useDispatch();
    const [isfocusedname, setisfocusedname] = useState(false)
    const [isfocusedemail, setisfocusedemail] = useState(false)
    const [isfocusedphone, setisfocusedphone] = useState(false)
    const [isfocusedpassword, setisfocusedpassword] = useState(false)

    const { signupInfo, setsignupInfo, setloggedin, setuserInfo, setalert, islogindialog, setislogindialog } = useContext(DataContext)

    const containerRef = useRef(null);

    const handleClickOutside = (event) => {
        if (event.target.id === 'login_button_id') {
            return;
        }

        else if (containerRef.current && !containerRef.current.contains(event.target)) {
            setDialog(false);
        }
    };

    const handleSubmitSignup = async () => {
        // Performing Basic Input Validation at the frontend
        const missingFields = [];
        if (!signupInfo.name)
            missingFields.push('name');
        if (!signupInfo.email)
            missingFields.push('email');
        if (!signupInfo.phone)
            missingFields.push('phone');
        if (!signupInfo.password)
            missingFields.push('password');

        if (missingFields.length === 1) {
            setalert({
                colour: '#f71505', message: `Please fill your ${missingFields[0]} !`
            })
            return;
        }
        else if (missingFields.length > 1) {
            setalert({
                colour: '#f71505', message: `Please fill your ${missingFields.join(', ')} !`
            })
            return;
        }
        else {
            dispatch(actionSignup(signupInfo.name, signupInfo.email, signupInfo.phone, signupInfo.password))
        }
    }

    const ToggleAccount = () => {
        setislogindialog(!islogindialog)
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>

            <StyledGridDiv ref={containerRef}>
                <StyledLeftDiv>

                    <p style={{ fontSize: '1.2rem', color: 'black', fontWeight: 500, margin: '0.7rem 1rem', lineHeight: '1.6rem' }}>
                        Looks like you are a new user :)
                    </p>

                    <img src={signup_img} alt="signup" style={{
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

                    <p style={{ textAlign: 'start', fontSize: '2rem', fontWeight: 600, padding: '0', margin: '0.2rem 0 2.5rem 0', color: '#078236' }}>Signup</p>


                    <StyledInput type="text" placeholder="Enter your name" focus={isfocusedname} setfocus={setisfocusedname} obj={signupInfo} fieldName='name' setobj={setsignupInfo} />

                    <StyledInput type="text" placeholder="Enter your email" focus={isfocusedemail} setfocus={setisfocusedemail} obj={signupInfo} fieldName='email' setobj={setsignupInfo} />

                    <StyledInput type="text" placeholder="Enter your phone" focus={isfocusedphone} setfocus={setisfocusedphone} obj={signupInfo} fieldName='phone' setobj={setsignupInfo} />

                    <StyledInput type="text" placeholder="Create password" focus={isfocusedpassword} setfocus={setisfocusedpassword} obj={signupInfo} fieldName='password' setobj={setsignupInfo} />

                    <StyledButton onClick={handleSubmitSignup} >Submit</StyledButton>

                    <StyledP onClick={() => ToggleAccount()}>
                        Already have an account ? Login here
                    </StyledP>
                </div>
            </StyledGridDiv >
        </>
    )
};

export default SignupPage;