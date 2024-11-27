import styled from "styled-components";

const StyledLi = styled.li`
   font-size: 1rem;

    @media(max-width: 400px){
        font-size: 0.95rem;
    }
    @media(max-width: 370px){
        font-size: 0.92rem;
    }
`


const DisplayList = ({ title, arr }) => {
    return (
        <div style={{ border: '0px solid #b5b7ba', marginBottom: '2rem' }}>

            <h2 style={{ margin: '1rem 0 0 0', fontSize: '1.4rem', fontWeight: 600 }}>{title}</h2>

            <hr style={{ margin: '0.2rem 0 0.8rem 0', border: '1px solid silver' }} />

            <ul style={{ listStylePosition: 'outside', marginLeft: '1.5rem' }}>
                {
                    arr.map((val, index) => (
                        <StyledLi key={`${title}+${index}`}>{val}</StyledLi>
                    ))
                }

            </ul>
        </div>
    )
}

export default DisplayList;