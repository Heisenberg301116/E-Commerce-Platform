import { useRef, useEffect } from "react";

// images
import back_img from './images/back.png'

// Function to render any JSON text data in react
const RecurJsonData = ({ json_data, left_margin, bottom_margin }) => {
    if (typeof json_data === 'string' || typeof json_data === 'boolean' || (typeof json_data === 'number' && !isNaN(json_data))) {
        return (
            <p style={{ display: 'inline', fontSize: '1rem', fontWeight: 400 }}>{json_data}</p>
        )
    }

    else if (Array.isArray(json_data)) {
        return (
            json_data.length <= 1 ?

                json_data.map((val) => (
                    <RecurJsonData json_data={val} left_margin={left_margin} bottom_margin={bottom_margin - 0.2} />
                ))

                :

                <ul style={{ marginLeft: `${left_margin}rem`, marginBottom: `${bottom_margin}rem` }}>
                    {json_data.map((val, index) => (
                        <li key={index} style={{ fontSize: '1rem', fontWeight: 500, marginBottom: `${bottom_margin}rem` }}>
                            <RecurJsonData json_data={val} left_margin={left_margin} bottom_margin={bottom_margin - 0.2} />
                        </li>

                    ))}
                </ul>
        )
    }

    else {      // => JSON
        return (
            Object.keys(json_data).length <= 1 ?

                Object.entries(json_data).map(([key, value]) => (
                    <>
                        <p style={{ display: 'inline', fontWeight: 500, marginRight: '0.2rem' }}>{key}: </p>

                        <RecurJsonData json_data={value} left_margin={left_margin + 0.4} bottom_margin={bottom_margin - 0.2} />
                    </>
                ))

                :

                <ul style={{ listStylePosition: 'outside', marginLeft: `${left_margin}rem`, marginBottom: `${bottom_margin}rem` }}>
                    {Object.entries(json_data).map(([key, value], index) => (
                        <li key={index} style={{ fontSize: '1rem', fontWeight: 500, marginBottom: `${bottom_margin}rem` }}>
                            <p style={{ display: 'inline', fontWeight: 500, marginRight: '0.2rem' }}>{key}: </p>
                            <RecurJsonData json_data={value} left_margin={left_margin + 0.4} bottom_margin={bottom_margin - 0.2} />
                        </li>
                    ))}
                </ul>
        )
    }
};


const TermsAndConditions = ({ showalloffers, setshowalloffers, jsondata, setjsondata }) => {

    const RefContainer = useRef(null);



    useEffect(() => {
        if (jsondata !== null || showalloffers === true) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [jsondata, showalloffers]);




    const handleClick = () => {
        setjsondata(null)
    }


    const CloseTermsandDetailedOffers = (event) => {
        if (!RefContainer.current?.contains(event.target)) {
            setjsondata(null)
            setshowalloffers(false)
        }
    }

    useEffect(() => {
        const StopEventPropagation = (event) => {
            event.stopPropagation();
        }

        RefContainer.current?.addEventListener("mousedown", StopEventPropagation)

        return () => {
            RefContainer.current?.removeEventListener("mousedown", StopEventPropagation)
        }
    }, [RefContainer])



    return (
        jsondata !== null ?
            <div onClick={(event) => { CloseTermsandDetailedOffers(event) }}
                style={{
                    position: 'fixed',
                    zIndex: 5,
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: `${showalloffers === true ? 'rgba(0, 0, 0, 0)' : 'rgba(0, 0, 0, 0.3)'}`,
                }}>

                <div id="Terms_Conditions_Component" ref={RefContainer}
                    style={{
                        backgroundColor: 'white',
                        border: '5px double #525151',

                        position: 'absolute',
                        top: '0',
                        right: '0',
                    }}>

                    <div style={{ position: 'absolute', top: '0rem', left: '0rem', backgroundColor: 'white', width: '100%' }}>
                        <div onClick={handleClick} style={{ backgroundColor: 'silver', border: '2px solid #5d5e5e', borderRadius: '5px', marginTop: '0.3rem', marginLeft: '0.3rem', padding: '0.2rem', cursor: 'pointer', display: 'inline-block' }}>
                            <img src={back_img} alt="Go Back" style={{ width: '1rem', marginRight: '0.5rem' }} />

                            <p style={{ display: 'inline', fontWeight: 500, fontSize: '1rem' }}>Go Back</p>
                        </div>

                    </div>

                    <div style={{
                        padding: '2rem 1rem',
                        width: '50vw',
                        height: '98.6vh',
                        overflowY: 'auto',
                        overflowX: 'auto',
                        boxSizing: 'border-box',
                    }}>
                        <p style={{ textAlign: 'center', fontSize: '1.7rem', fontWeight: 700, marginBottom: '1.2rem', color: '#eb1a1a', textDecoration: 'underline' }}>TERMS AND CONDITIONS</p>

                        <RecurJsonData json_data={jsondata} left_margin={1.5} bottom_margin={1.5} />
                    </div>
                </div>
            </div >

            :

            null
    )
}

export default TermsAndConditions;