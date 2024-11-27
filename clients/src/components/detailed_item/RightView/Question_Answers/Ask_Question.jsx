import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { DataContext } from "../../../../context/DataProvider";

const PostQuestionContainer = styled.div`
    width: 40vw;
    padding: 20px;
    margin: 20px auto;
    background-color: #f9f9f9;
    border: 1px solid silver;
    border-radius: 8px;

    @media(max-width: 700px){
        width: 50vw;
    }

    @media(max-width: 500px){
        width: 60vw;
    }
`;

const TitleInput = styled.textarea`
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;
    resize: none;
    overflow-wrap: break-word;
    word-wrap: break-word;
    white-space: normal;

    @media(max-width: 500px){
        font-size: 0.9rem;
    }

    @media(max-width: 400px){
        font-size: 0.8rem;
    }
`;


const SubmitButton = styled.button`
    padding: 1rem 1.2rem;
    background-color: #4CAF50;
    color: white;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: block;
    margin: auto;

    &:hover {
        background-color: #45a049;
    }

    @media(max-width: 500px){
        font-size: 0.9rem;
        padding: 0.5rem 0.7rem;
    }

    @media(max-width: 400px){
        font-size: 0.8rem;        
    }
`;

const AskQuestion = () => {
    const { setalert } = useContext(DataContext);
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');

    const handleSubmit = (e) => {
        // ===============================> TO DO: SAVE THE QUESTIONS TO THE DATABASE OF SELLER 
        setalert({ colour: 'green', message: 'Question submitted to the seller !' })
        e.preventDefault();
        setTitle('');
        setDetails('');
    };

    return (
        <PostQuestionContainer>
            <form onSubmit={handleSubmit}>
                <TitleInput
                    type="text"
                    placeholder="Have a Question ? Ask here"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <SubmitButton type="submit">Submit</SubmitButton>
            </form>
        </PostQuestionContainer>
    );
};

export default AskQuestion;