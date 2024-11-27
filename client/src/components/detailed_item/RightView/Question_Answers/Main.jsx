import styled from 'styled-components'
import { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { DataContext } from "../../../../context/DataProvider";

// redux
import { useDispatch, useSelector } from 'react-redux';
import { actionFetchQuestions, actionQuestionStateReset } from '../../../../redux/actions/questionActions'

// images
import spinner_gif from '../../../header/images/spinner.gif'


// components
import QASection from './QA_Section'


const Styledh2 = styled.h2`
    padding: 0 0 1rem 0;
    font-size: 1.6rem;
    text-align: center;
    border-bottom: 2px solid silver;

    
    @media(max-width: 400px){
        font-size: 1.5rem;
    }
    @media(max-width: 300px){
        font-size: 1.4rem;
    }
`

const StyledButton = styled.button`
    text-align: center;
    font-size: 1.1rem;
    color: blue;
    font-weight: 500;
    display: block;
    margin: auto;
    border: 2px solid black;
    border-radius: 5px;
    padding: 0.43rem 0.5rem;
    background-color: blue;
    color: white;

    &:hover{
        cursor: pointer;
        transform: scale(1.02)
    }
`

const MainQAContent = () => {
    // Redux
    const dispatch = useDispatch();
    const question = useSelector((state) => state.question)
    const { questions, isLoading } = question

    const { productdetail } = useContext(DataContext)

    const [ques, setques] = useState(null);

    useEffect(() => {
        // console.log("==============> inside useEffect of Main")

        dispatch(actionFetchQuestions(productdetail._id, 0, 2, 'most-helpful'))
    }, [])

    useEffect(() => {
        if (questions) {
            // console.log("==============> inside useEffect of questions and questions = ", questions)
            setques(questions)
            dispatch(actionQuestionStateReset(['QUESTIONS_RESET']))
        }
    }, [questions])

    return (
        <div>
            {isLoading && <img src={spinner_gif} style={{ width: '5rem', height: '5rem', position: 'fixed', top: '5px', left: '50%', zIndex: '6' }} />}

            <div style={{ maxHeight: '28rem', overflow: 'hidden', marginBottom: '1rem' }}>
                {
                    ques && ques.map((obj, index) => (
                        <QASection key={obj._id} obj={obj} />
                    ))
                }
            </div>

            {
                productdetail.total_questions > 2
                    ?

                    <div style={{ marginTop: '0rem' }}>
                        {/* <hr style={{ border: '1px solid #b5b7ba', marginBottom: '0.9rem' }} /> */}

                        <Link to={`/product/${productdetail._id}/questions/1`} style={{ textDecoration: 'none' }}>
                            <StyledButton>
                                See all
                            </StyledButton>
                        </Link>
                    </div>

                    :

                    null
            }

        </div >
    )
}


const QAComponent = () => {
    return (
        <div style={{ border: '2px solid #b5b7ba', marginTop: '2.5rem', padding: '1rem 0rem' }}>

            <Styledh2>Questions and Answers</Styledh2>

            <MainQAContent />

        </div >
    )
}

export default QAComponent;