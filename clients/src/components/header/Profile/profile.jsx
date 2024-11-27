import { useState } from 'react';
import styled from 'styled-components'

// redux
import { useSelector, } from 'react-redux';

// Images
import profile_img from '../images/profile.png';

// Components
import ProfileDialog from './profile-dialog';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0rem;
    &:hover {
        transform: scale(1.03);
        cursor: pointer;
    }
`


const Profile = () => {
    const user = useSelector((state) => state.user)     // user was the key mapping to the userReducer in your root reducer in store.js
    const { userInfo } = user

    const [clickedprofile, setclickedprofile] = useState(false);

    const toggleProfile = () => {
        setclickedprofile(!clickedprofile)
    }

    return (
        <>
            <StyledDiv id="div_profile_icon_id" onClick={toggleProfile}>
                <img id="profile_icon_id"
                    src={profile_img}
                    alt="Profile"
                    style={{
                        width: '1.5rem',
                        height: '1.5rem',
                        maxWidth: '100px',
                        // height: 'auto',
                        display: 'block',
                    }}
                />

                <p id="p_profile_icon_id" style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: 'black',
                    textAlign: 'center',
                    margin: '0.5rem 0',
                    lineHeight: '1.2',
                }}>
                    {
                        userInfo?.name.split(' ')[0]
                    }
                </p>
            </StyledDiv>

            {
                clickedprofile ?
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Makes everything else appear dull
                        zIndex: 5,
                    }}>

                        <ProfileDialog setclickedprofile={setclickedprofile} />

                    </div>

                    :

                    null
            }
        </>
    );
}

export default Profile;