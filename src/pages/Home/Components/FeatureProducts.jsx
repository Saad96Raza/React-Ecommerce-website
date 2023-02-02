import React,{useState,useEffect} from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Parallax ,Mousewheel,Zoom ,Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import axios from 'axios';

import productImage from '../images/product-3.jpg'
const FeatureProducts = () => {

  const [product ,setProducts] = useState([]);

const getData = ()=>{

  axios.get('https://api.unsplash.com/search/photos?query=minimal-fasion-apprel&client_id=fThr-1nkKrjxdbhiZr8-Gh56HDaXQy0T9NRD_1IiGhU')
 .then((response)=>{
 setProducts(response.data.results);
 
 })
 
}

  
  useEffect(()=>{

    getData();
  },[])

  return (
    <>



    
    <div className="container-2">

        <h1 className='feature-title'>FEATURED <strong>PRODUCTS </strong></h1>

        <div className="feature-product-slider">





<div className="product-card">
  <img src={productImage} alt="" />
  <span className='price'>$250</span>
  <div className="product-btn">

  
   <div className="wishlist-btn">
    <div>Add to Whishlist</div><i className="fa-duotone fa-camera-retro" ></i>
    </div> 

   <div className="cart"> 
    <div>Place in cart</div>
    </div>
  </div>
</div>





        </div>

    </div>
    </>
  )
}

export default FeatureProducts