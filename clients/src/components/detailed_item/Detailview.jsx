import { useEffect, useContext, useState } from "react";
import { DataContext } from "../../context/DataProvider";
import styled from 'styled-components'

// redux
import { useDispatch, useSelector } from 'react-redux';
import { actionHighResImgs, actionProductStateReset } from '../../redux/actions/productActions'

// images
import spinner_gif from '../header/images/spinner.gif'

// components
import LeftView from "./LeftView/LeftView";
import RightView from "./RightView/RightView";


const StyledDiv = styled.div`
    background-color: '';    
    box-sizing: border-box;
    display: flex;
    margin: 0.1rem 0.1rem;
    padding: 0;
    gap: 2rem;
    justify-content: center;    

    @media (max-width: 950px) {
        flex-direction: column;
        align-items: center;
    }
`

const StyledLeftDiv = styled.div`
    position: sticky;
    top: 15%;

    @media (max-width: 950px) {
        position: static;
        margin-top: 2rem;
    }
`

const DetailView = () => {
    // Redux
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product)
    const { highRes, isLoading } = product

    const { productdetail } = useContext(DataContext)
    const [highresarr, sethighresarr] = useState(null);

    useEffect(() => {
        if (highRes) {
            sethighresarr(highRes);
            // console.log("============> highres = ", highRes)
            dispatch(actionProductStateReset(['HIGH_RES_RESET']))
        }
    }, [highRes]);

    useEffect(() => {
        dispatch(actionHighResImgs(productdetail._id));
    }, []);


    return (
        <>
            {isLoading && <img src={spinner_gif} style={{ width: '5rem', height: '5rem', position: 'fixed', top: '5px', left: '50%', zIndex: '6' }} />}

            {
                highresarr &&
                <StyledDiv>
                    <div>
                        <StyledLeftDiv>
                            <LeftView images_arr={highresarr} />
                        </StyledLeftDiv>
                    </div>

                    <RightView />
                </StyledDiv >

            }
        </>
    )
}

export default DetailView;