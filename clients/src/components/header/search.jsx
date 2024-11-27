import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

// image
import search_yellow_img from './images/search_yellow.png';
import search_white_img from './images/search_white.png';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { actionFetchTitles } from './../../redux/actions/productActions'

const ResponsiveSearchBar = styled.div`
    width: 30%;    

    @media(max-width:1000px){
        width: 40%; 
    }

    @media(max-width:700px){
        width: 55%; 
    }

    @media(max-width:600px){
        width: 45%; 
    }

    @media(max-width:480px){
        width: 60%; 
    }

    @media(max-width:370px){
        width: 50%; 
    }

    @media(max-width:340px){
        width: 100%; 
    }
`

const StyledPara = styled.p`
    padding: 0.5rem 1rem 0.5rem 0.5rem;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    font-weight: 600;    

    &:hover {
        background-color: #cbdbf5;
        cursor: pointer;             
    }
`

const StyledMatchedTitlesDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
    box-sizing: border-box;
    position: absolute;
    background-color: white;
    width: 100%;
    top: 2.9rem;
    right: 0rem;
    border-radius: 1px;
    padding: 0rem 0rem;
    z-index: 1002;
    border: 1.5px solid #8d918d;
    max-height: 80vh;    
    overflow-y: auto;
`

const StyledImg = styled.img`
    height: 1.3rem;
    cursor: pointer;
    margin-left: 0.0rem; 

    &:hover{
        cursor: pointer;
        transform: scale(1.1)
    }
`


const SearchBar = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product)
    const { titles } = products


    const navigate = useNavigate();

    const [allproducts, setallproducts] = useState([]);
    const [query, setQuery] = useState('');
    const [outline, setOutline] = useState('none');
    const SearchRef = useRef(null);

    useEffect(() => {
        // Fetch all products long title data   
        dispatch(actionFetchTitles())
        // console.log("==============> titles = ", titles)
        // setallproducts(titles);
    }, [])

    const handleFocus = () => {
        setOutline('2px solid blue');
    };

    const handleBlur = (event) => {
        if (SearchRef.current && SearchRef.current.contains(event.relatedTarget)) {
            return;
        }

        setOutline('none');
    };

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSearch = () => {
        const searchtext = query.trim();
        setQuery(searchtext);

        if (searchtext !== "") {
            navigate(`/search/${searchtext}`)
        }
    }

    return (
        <ResponsiveSearchBar>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 'auto', justifyContent: 'flex-start', gap: '0.7rem', }}>

                <div style={{ width: '90%', position: "relative" }}>
                    <input
                        type="text"
                        value={query}
                        onChange={handleInputChange}
                        placeholder="Search for items, brands and more"
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        style={{
                            padding: '0.8rem 0.4rem 0.8rem 0.4rem',
                            boxSizing: "border-box",
                            fontSize: '1rem',
                            borderRadius: '5px',
                            border: 'none',
                            outline: `${outline}`,
                            textOverflow: 'ellipsis',
                            width: '100%',
                            // height: '1rem',

                        }}
                    />

                    {
                        query && outline !== "none" && titles?.filter(product => product.title.toLowerCase().includes(query.toLowerCase())).length > 0

                        &&

                        <StyledMatchedTitlesDiv ref={SearchRef}>
                            {
                                titles.filter(product => product.title.toLowerCase().includes(query.toLowerCase())).slice(0, 10).map((product, index) => (

                                    <Link onClick={() => { setQuery(product.title); setOutline('none') }} key={index} style={{
                                        textDecoration: 'none', color: 'black', fontSize: '0.95rem', textAlign: 'start',
                                        display: "flex",
                                        flexWrap: "wrap",

                                    }} to={`/product/${product.id}`}>

                                        <StyledPara>
                                            <img src={search_white_img} alt="Search" style={{ width: '1.5rem', height: '1.5rem' }} />

                                            {product.title.length > 30 ? `${product.title.slice(0, 30)}...` : product.title}

                                        </StyledPara>

                                    </Link>

                                ))
                            }
                        </StyledMatchedTitlesDiv>
                    }
                </div>

                <StyledImg onClick={handleSearch} src={search_yellow_img} alt="search icon" />
            </div >


        </ResponsiveSearchBar>


    );
};

export default SearchBar;