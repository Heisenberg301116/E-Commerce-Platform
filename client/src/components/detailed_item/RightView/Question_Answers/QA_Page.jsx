import { useState, useContext, useEffect } from 'react'
import { useParams, Link, useNavigate } from "react-router-dom";
import { DataContext } from "../../../../context/DataProvider";
import styled from 'styled-components';

// components
import QASection from './QA_Section'
import AskQuestion from './Ask_Question'

// images
import spinner_gif from '../../../header/images/spinner.gif'

// redux
import { useDispatch, useSelector } from 'react-redux';
import { actionFetchQuestions, actionQuestionStateReset } from '../../../../redux/actions/questionActions'


const StyledMainDiv = styled.div`   
    margin-bottom: 0.5rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledSelect = styled.select`
    padding: 0 0 0 0.1rem;
    height: 2.5rem;
    font-size: 1rem;
    border: 2px solid silver;
    border-radius: 5px;
    background-color: white;
    color: #333;
    outline: none;
    cursor: pointer;    

    &:focus {
        border-color: #007BFF;
    }

    &:hover {
        border-color: #007BFF;
    }

    option {
        background: #fff;
        color: #333;
        padding: 10rem;
    }
`;

const Styledh2 = styled.h2`
    margin: 1rem 0;
    font-size: 1.8rem;
    text-align: center;    
    
    @media(max-width: 400px){
        font-size: 1.5rem;
    }
    @media(max-width: 300px){
        font-size: 1.4rem;
    }
`

const QASectionWrapperDiv = styled.div`
    width: 80vw;
    border: 2px solid silver;
    border-bottom: none;

    @media(max-width: 800px){
        width: auto;
    }
`

const StyledLink = styled(Link)`
    color: ${(props) => props.curr_page === "true" ? 'white' : 'blue'};
    background-color: ${(props) => props.curr_page === "true" ? 'blue' : 'none'};
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 500;
    width: 2rem;
    height: 2rem;
    text-align: center;
    line-height: 2rem;
    border-radius: 50%;

    &:hover {
        color: ${(props) => props.curr_page === "true" ? 'white' : 'red'};
    }
`;


const QAPage = () => {
    const nav = useNavigate();

    // Redux
    const dispatch = useDispatch();
    const question = useSelector((state) => state.question)
    const { questions, isLoading } = question

    const { id, page: pageString } = useParams();
    const page = parseInt(pageString, 10);

    const [sortmethod, setsortmethod] = useState('most-helpful');
    const [currentQuestions, setcurrentQuestions] = useState([]);
    const [totalPages, settotalPages] = useState(null);

    const { productdetail } = useContext(DataContext)


    // Pagination
    const limit = 5;
    const totnavpages = 3;  // total next or previous pages to display at the bottom in the pages navbar


    useEffect(() => {
        // console.log("=================> very first")
        const total_pages = Math.ceil(productdetail.total_questions / limit);
        settotalPages(total_pages);
    }, [])


    useEffect(() => {
        // console.log("================> inside useEffect of 1")
        const skip = (page - 1) * limit;
        if (skip > productdetail.total_questions) {
            return;
        }

        dispatch(actionFetchQuestions(productdetail._id, skip, limit, sortmethod))
    }, [page, sortmethod]);


    useEffect(() => {
        if (questions) {
            // console.log("================> inside useEffect of 2 and questions = ", questions)
            setcurrentQuestions(questions)
            window.scrollTo(0, 0);
            dispatch(actionQuestionStateReset(['QUESTIONS_RESET']))
        }
    }, [questions])


    const handleSortingChange = (event) => {
        setsortmethod(event.target.value);
        setcurrentQuestions([]);
        nav(`/product/${productdetail._id}/questions/1`)
    }


    return (
        <>
            {isLoading && <img src={spinner_gif} style={{ width: '5rem', height: '5rem', position: 'fixed', top: '5px', left: '50%', zIndex: '6' }} />}

            <div style={{ padding: '0 0.1rem 0 0.1rem' }}>

                <StyledMainDiv>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
                        <Styledh2>Questions and Answers</Styledh2>

                        <StyledSelect value={sortmethod} onChange={handleSortingChange}>
                            <option value="most-helpful">Most Helpful</option>
                            <option value="most-recent">Most Recent</option>
                            <option value="least-recent">Least Recent</option>
                        </StyledSelect>
                    </div>

                    <AskQuestion />

                    <QASectionWrapperDiv>
                        {
                            currentQuestions.map((obj, index) => (

                                <QASection key={obj._id} obj={obj} />

                            ))
                        }
                    </QASectionWrapperDiv>

                    <nav style={{ display: 'flex', fontSize: '1.2rem', margin: '0.5rem 0', gap: '1.5rem', justifyContent: 'center' }}>

                        {/* {page - totnavpages > 1 &&
                        <>
                            <StyledLink to={`/product/${id}/questions/1`}>1</StyledLink>

                            ......
                        </>
                    } */}

                        {Array.from({ length: totnavpages }, (_, index) => totnavpages - index - 1)  // Calculate reverse index directly
                            .map((reverseIndex) => {
                                if (page - reverseIndex - 1 <= 0) {
                                    return null;
                                }
                                else {
                                    // tot_displayed++;
                                    return (
                                        <StyledLink key={reverseIndex} to={`/product/${productdetail._id}/questions/${page - reverseIndex - 1}`}>
                                            {page - reverseIndex - 1}
                                        </StyledLink>
                                    );
                                }
                            })}


                        <StyledLink curr_page="true" to={`/product/${productdetail._id}/questions/${page}`}>{page}</StyledLink>


                        {Array.from({ length: totnavpages }, (_, index) => {
                            if (page + index + 1 > totalPages) {
                                return null;
                            }
                            else {
                                return (
                                    <StyledLink key={index} to={`/product/${productdetail._id}/questions/${page + index + 1}`}>
                                        {page + index + 1}
                                    </StyledLink>
                                );
                            }
                        })}

                        {/* {page + totnavpages < totalPages &&
                        <>
                            ......
                            <StyledLink to={`/product/${id}/questions/${totalPages}`}>{totalPages}</StyledLink>
                        </>
                    } */}

                    </nav>

                </StyledMainDiv >
            </div>
        </>
    )
}

export default QAPage;