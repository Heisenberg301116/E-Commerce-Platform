import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import { useEffect, useState, useRef, useContext } from "react";
import { DataContext } from "../../context/DataProvider";

// images
import spinner_gif from '../header/images/spinner.gif'

// redux
import { useDispatch, useSelector } from 'react-redux';
import { actionFetchProductDetail, actionProductStateReset } from '../../redux/actions/productActions'

// Remove it later
import { bannerData } from '../../constants/demo/banner_data'

const StyledCarousel = styled(Carousel)`
  .react-multiple-carousel__arrow {
    z-index: 1; /* Lower the z-index for the arrows */
  }
`;

const ResponsiveImage = styled.img`
  width: 100%;
  height: 40vh;
  border: 0px solid black;
  box-sizing: border-box;

  @media (max-width: 768px) {
    height: 30vh;   
  }

  @media (max-width: 480px) {
    height: 20vh;
  }
`;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Banner = () => {
  const nav = useNavigate();
  const { setproductdetail } = useContext(DataContext)

  // Redux
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product)
  const { productDetail, isLoading } = product


  useEffect(() => {
    if (productDetail) {
      setproductdetail(productDetail)
      dispatch(actionProductStateReset(['PRODUCT_DETAIL_RESET']))
      nav(`/product/${productDetail._id}`)
    }
  }, [productDetail])

  const MoveToProductPage = (id) => {
    if (isLoading === false) {
      dispatch(actionFetchProductDetail(id));
    }
  }


  return (
    <>
      {isLoading && <img src={spinner_gif} style={{ width: '5rem', height: '5rem', position: 'fixed', top: '5px', left: '50%', zIndex: '6' }} />}

      <StyledCarousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={true}
        renderDotsOutside={false}
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
        keyBoardControl={true}
        style={{ zIndex: 4 }}
      >
        {
          bannerData.map((data, index) => {
            if (data.navigate === "product") {
              return (
                <ResponsiveImage onClick={() => MoveToProductPage(data.product_id)} src={require(`../${data.image}`)} alt="banner" key={data.image} />
              )
            }
            else if (data.navigate === "category") {
              return (
                <Link key={index} to={`category/${data.category}`}>
                  <ResponsiveImage src={require(`../${data.image}`)} alt="banner" key={data.image} />
                </Link>
              )
            }

          })
        }
      </StyledCarousel>
    </>
  )
}

export default Banner;