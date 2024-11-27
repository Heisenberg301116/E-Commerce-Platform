import { useState, useEffect, useRef, useContext } from 'react';
import { DataContext } from '../../../context/DataProvider';
import styled from 'styled-components';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { actionProfileUpdate, actionLogout, actionDeleteProfile } from '../../../redux/actions/userActions'

// images
import my_profile_img from '../images/account.png'
import edit_img from '../images/edit.png'
import cancel_img from '../images/cancel.png'
import no_edit_img from '../images/no_edit.png'
import cross_img from '../images/cross.png';


const StyledCrossImg = styled.img`
    display: block;
    width: 1rem;
    position: absolute;
    right: 0.6rem;
    top: 0.6rem;
    margin-left: auto;

    &:hover{
        cursor: pointer;
        transform: scale(1.1)
    }
`

const StyledEditImg = styled.img`
    margin-left: auto;
    display: block;
    width: 1.6rem;
    &:hover{
        cursor: pointer;
        transform: scale(1.1)
    }
`

const StyledCloseSaveButton = styled.button`
    background-color: ${(props) => props.isSave === true ? "#04943c" : "grey"};  
    color: white;
    font-weight: 600;
    font-size: 1rem;
    border: none;
    padding: 1rem 1.6rem;
    border-radius: 8px;
    cursor: pointer;    
    display: block;
    &:hover{
        cursor: pointer;
        transform: scale(1.05)
    }

    @media(max-width: 400px){
        padding: 0.7rem 0.8rem;        
    }
`

const StyledLogoutDeleteButton = styled.button`
    background-color: ${(props) => props.isLogout === true ? "blue" : "red"};    
    color: white;
    font-weight: 600;
    font-size: 1rem;
    text-align: center;
    // width: 7rem;
    border: none;
    padding: 0.9rem 0.9rem;
    border-radius: 8px;
    cursor: pointer;    
    display: block;
    &:hover{
        cursor: pointer;
        transform: scale(1.05)
    }

    @media(max-width: 400px){
        padding: 0.7rem 0.8rem;
    }
`

const StyledGridDiv = styled.div`
    display: grid;                   
    align-items: center;
    margin: 1rem 0rem;                   
    padding: 0.7rem 0rem 0.7rem 1rem;
    background-color: none;                  
    position: relative;
    grid-template-columns: 5rem 20rem 5rem;
    gap: 1rem;    

    @media(max-width: 900px){
        grid-template-columns: 4rem 10rem 3rem;
        padding: 0.7rem 0rem 0.7rem 0rem;        
    }

    // @media(max-width: 300px){
    //     grid-template-columns: 4rem 5rem 3rem;           
    // }
`


// Creating Components
const StyledColumn1 = ({ title }) => {
    return (
        <p style={{ fontSize: '1rem', fontWeight: '600', textDecoration: 'underline' }}>{title}:</p>
    )
}

const StyledColumn2 = ({ edit, field, userInfo, content, setcontent }) => {

    // Save the cursor position
    const saveSelection = () => {
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            const position = range.startOffset;
            return { range, position };
        }
        return null;
    };

    // Restore the cursor position
    const restoreSelection = (element, { range, position }) => {
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);

        if (element.childNodes.length > 0) {
            const node = element.childNodes[0];
            range.setStart(node, Math.min(position, node.length));
            range.collapse(true);
        }
    };

    const handleChange = (event) => {
        console.log("================> changing content to : ", event.target.innerText);
        const { range, position } = saveSelection(event.target);
        setcontent(event.target.innerText);
        if (range && position != null) {
            setTimeout(() => restoreSelection(event.target, { range, position }), 0);
        }
    };

    return (
        field !== "password"
            ?
            <p id={`p_${field}`}
                contentEditable={edit}
                onInput={handleChange}
                style={{ padding: '0.5rem', fontSize: '1rem', border: edit === true && field !== 'email' ? '2px solid blue' : "none", outline: 'none' }}>
                {field === "email" ? userInfo.email : content}
            </p>
            :
            <p id="p_password"
                contentEditable={edit}
                onInput={handleChange}
                style={{ padding: '0.5rem', fontSize: '1rem', border: edit === true && userInfo.email !== 'raj983567@gmail.com' ? '2px solid blue' : "none", outline: 'none' }}>
                {edit === true ? content : "•".repeat(content.length)}
            </p>
    );
}



const StyledColumn3 = ({ userInfo, edit, setedit, field, setcontent }) => {
    const reset_content = () => {
        setcontent(userInfo[field]);
        setedit(!edit)
    }

    const handlenoedit = () => {
        setedit(true)
        setTimeout(() => {
            setedit(false);
        }, 2000)
    }

    return (
        field === "email" || (field === "password" && userInfo.email === 'raj983567@gmail.com')
            ?
            !edit ?
                <img src={no_edit_img} onClick={handlenoedit} alt="No edit" title={`${field} can't be changed !`} style={{ width: '1rem', cursor: 'pointer', marginLeft: 'auto', opacity: '0.4' }} />

                :

                <p style={{ color: "red", fontSize: '0.8rem', fontWeight: '600', textAlign: 'right', fontStyle: 'italic' }}>{field} can't be changed !</p>

            :

            <StyledEditImg onClick={() => reset_content()} src={!edit ? edit_img : cancel_img} alt="Edit field" title={!edit ? "Edit field" : "Cancel Editing"} />
    )
}


// Creating Main Component
const ProfileDialog = ({ setclickedprofile }) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user)
    const { userInfo } = user

    const [editname, seteditname] = useState(false)
    const [editemail, seteditemail] = useState(false)
    const [editpassword, seteditpassword] = useState(false)
    const [editphone, seteditphone] = useState(false)
    const [editaddress, seteditaddress] = useState(false)

    const { setloginInfo, setsignupInfo, setloggedin, setalert, menuclicked } = useContext(DataContext)

    const [namecontent, setnamecontent] = useState(userInfo.name)
    const [phonecontent, setphonecontent] = useState(userInfo.phone)
    const [passwordcontent, setpasswordcontent] = useState(userInfo.password)
    const [addresscontent, setaddresscontent] = useState(userInfo.address)

    const handleSave = async () => {
        // Performing Basic Input Validation at the frontend
        const missingFields = [];
        if (!namecontent)
            missingFields.push('name');
        if (!passwordcontent)
            missingFields.push('password');
        if (!phonecontent)
            missingFields.push('phone');

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

        const updatedInfo = {
            name: namecontent,
            phone: phonecontent,
            password: passwordcontent,
            address: addresscontent,
            email: userInfo.email
        }

        dispatch(actionProfileUpdate(updatedInfo))

        seteditname(false)
        seteditemail(false)
        seteditpassword(false)
        seteditphone(false)
        seteditaddress(false)
    }



    const containerRef = useRef(null);

    const handleClickOutside = (event) => {
        if (event.target.id === 'div_profile_icon' || event.target.id === 'profile_icon_id' || event.target.id === 'p_profile_icon_id') {
            return;
        }

        else if (containerRef.current && !containerRef.current.contains(event.target)) {
            setclickedprofile(false);
        }
    };

    useEffect(() => {
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

    const handleDeleteAccount = async () => {
        if (userInfo.email === 'raj983567@gmail.com') {
            setalert({
                colour: '#f71505', message: `Can not delete a guest account !!!`
            })
            return;
        }

        setclickedprofile(false);
        const email = userInfo.email;
        dispatch(actionLogout());
        dispatch(actionDeleteProfile(email));

        setloginInfo({ email: '', password: '' });
        setsignupInfo({ email: '', password: '', phone: '', name: '', address: '' })

        // Reload the current page
        // window.location.reload();
    }

    const handleLogout = () => {
        setclickedprofile(false);
        dispatch(actionLogout());

        setloginInfo({ email: '', password: '' });
        setsignupInfo({ email: '', password: '', phone: '', name: '', address: '' })

        // Reload the current page
        window.location.reload();
    }

    return (
        <>
            <div ref={containerRef} style={{
                zIndex: '10000',
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'white',
                border: '2px solid black',
                margin: 'auto auto',
                padding: '0.7rem 0.7rem 0.7rem 0.7rem',
                borderRadius: '9px',
            }}>
                <StyledCrossImg src={cross_img} onClick={() => setclickedprofile(false)} alt="Close" title="Close" />

                <img src={my_profile_img} alt="My profile" style={{ display: 'block', width: '3rem', margin: 'auto auto' }} />

                <p style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: '600', marginTop: '0.3rem' }}>My Account</p>


                <StyledGridDiv>

                    <StyledColumn1 title="Name" />
                    <StyledColumn2 field="name" edit={editname} userInfo={userInfo} content={namecontent} setcontent={setnamecontent} />
                    <StyledColumn3 userInfo={userInfo} field="name" edit={editname} setedit={seteditname} setcontent={setnamecontent} />

                    <StyledColumn1 title="Email" />
                    <StyledColumn2 field="email" edit={editemail} userInfo={userInfo} content={'null'} setcontent={'null'} />
                    <StyledColumn3 userInfo={userInfo} field="email" edit={editemail} setedit={seteditemail} setcontent={'null'} />


                    <StyledColumn1 title="Password" />
                    <StyledColumn2 field="password" edit={editpassword} userInfo={userInfo} content={passwordcontent} setcontent={setpasswordcontent} />
                    <StyledColumn3 userInfo={userInfo} field="password" edit={editpassword} setedit={seteditpassword} setcontent={setpasswordcontent} />

                    <StyledColumn1 title="Phone" />
                    <StyledColumn2 field="phone" edit={editphone} userInfo={userInfo} content={phonecontent} setcontent={setphonecontent} />
                    <StyledColumn3 userInfo={userInfo} field="phone" edit={editphone} setedit={seteditphone} setcontent={setphonecontent} />

                    <StyledColumn1 title="Address" />
                    <StyledColumn2 field="address" edit={editaddress} userInfo={userInfo} content={addresscontent} setcontent={setaddresscontent} />
                    <StyledColumn3 userInfo={userInfo} field="address" edit={editaddress} setedit={seteditaddress} setcontent={setaddresscontent} />

                </StyledGridDiv>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
                    <StyledLogoutDeleteButton isLogout={false} onClick={handleDeleteAccount}>Delete Account</StyledLogoutDeleteButton>

                    {
                        namecontent !== userInfo.name || phonecontent !== userInfo.phone || addresscontent !== userInfo.address || passwordcontent !== userInfo.password

                            ?

                            <StyledCloseSaveButton isSave={true} onClick={handleSave}>Save</StyledCloseSaveButton>

                            :

                            <StyledCloseSaveButton isSave={false} onClick={() => setclickedprofile(false)}>Close</StyledCloseSaveButton>
                    }

                    <StyledLogoutDeleteButton isLogout={true} onClick={handleLogout}>LogOut</StyledLogoutDeleteButton>

                </div>

            </div >
        </>
    )
}

export default ProfileDialog;