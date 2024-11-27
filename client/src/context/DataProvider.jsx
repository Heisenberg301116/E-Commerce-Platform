import { createContext, useState, useEffect } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
    const getInitialState = () => {
        const storedState = localStorage.getItem("productdetail");
        return storedState ? JSON.parse(storedState) : null;
    };

    const [productdetail, setproductdetail] = useState(getInitialState);

    useEffect(() => {
        localStorage.setItem("productdetail", JSON.stringify(productdetail));
    }, [productdetail]);





    const [loggedin, setloggedin] = useState(false);

    const [signupInfo, setsignupInfo] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
    });

    const [userInfo, setuserInfo] = useState({
        user_id: '',
        name: '',
        email: '',
        password: '',
        phone: '',
        address: '',
    });

    const [loginInfo, setloginInfo] = useState({
        email: '',
        password: '',
    });

    const [islogindialog, setislogindialog] = useState(true);

    const [menuclicked, setmenuclicked] = useState(false);

    const [alert, setalert] = useState({
        colour: '',      // red: #f71505, green: #1cba34
        message: '',
    });


    const [imgmodalInfo, setImgmodalInfo] = useState(null)

    const [allimgsmodalInfo, setallimgsmodalInfo] = useState(null)

    const [showallimagesgrid, setshowallimagesgrid] = useState(false)

    const [currspotimgind, setcurrspotimgind] = useState(null)
    const [currarrimgind, setcurrarrimgind] = useState(null)
    const [userreview, setuserreview] = useState(null)


    const [cartproducts, setcartproducts] = useState(null);
    const [productsdataarr, setproductsdataarr] = useState(null);
    const [sellerarr, setsellerarr] = useState(null);
    const [imagesarr, setimagesarr] = useState(null);

    const [cartpricing, setcartpricing] = useState({
        mrp: 0,
        discount: 0,
        delivery_charges: 0,
    });

    const [myorders, setmyorders] = useState([]);
    const [orderreview, setorderreview] = useState(null);     // review of a particular order in My ORDER section when user clicks edit review or rate the product.
    const [orderreviewimages, setorderreviewimages] = useState([]);

    const [reviews_arr, setreviews_arr] = useState([]);

    // const [uploadedimages, setuploadedimages] = useState([])

    return (
        <>
            <DataContext.Provider value={{ loggedin, setloggedin, signupInfo, setsignupInfo, loginInfo, setloginInfo, islogindialog, setislogindialog, userInfo, setuserInfo, alert, setalert, productdetail, setproductdetail, imgmodalInfo, setImgmodalInfo, showallimagesgrid, setshowallimagesgrid, allimgsmodalInfo, setallimgsmodalInfo, currspotimgind, setcurrspotimgind, currarrimgind, setcurrarrimgind, userreview, setuserreview, cartproducts, setcartproducts, productsdataarr, setproductsdataarr, sellerarr, setsellerarr, imagesarr, setimagesarr, cartpricing, setcartpricing, menuclicked, setmenuclicked, myorders, setmyorders, orderreview, setorderreview, orderreviewimages, setorderreviewimages, reviews_arr, setreviews_arr }}>
                {children}
            </DataContext.Provider>
        </>
    )
}

export default DataProvider;