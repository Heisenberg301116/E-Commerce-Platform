import styled from 'styled-components'

const StyledDeliveryDiv = styled.div`
    display: flex;
    gap: 0.5rem;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    align-items: center;
`

const StyledRedDiv = styled.div`
    border-radius: 50%;
    background-color: #f7071f;
    width: 0.85rem;
    height: 0.85rem;
`

const StyledGreenDiv = styled.div`   
    border-radius: 50%;
    background-color: #05b305;
    width: 0.85rem;
    height: 0.85rem;
`

const Delivery = ({ delivery_date, status }) => {
    const field = status ? "Delivered on" : "Expected Delivery";

    return (
        <StyledDeliveryDiv>

            {status ?

                <StyledGreenDiv></StyledGreenDiv>

                :

                <StyledRedDiv></StyledRedDiv>

            }

            <p style={{ fontWeight: 600, color: '#505250', lineHeight: '1.2' }}>
                {field}: {new Date(delivery_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>


        </StyledDeliveryDiv >
    )
}

export default Delivery;