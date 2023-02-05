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
  <div className="colors-sizes">
    <h3 className='color-title'>colors & Sizes</h3>
    <ul className='colors'>
      <li style={{backgroundColor:'#ff0000'}}></li>
      <li style={{backgroundColor:'#000000'}}></li>
      <li style={{backgroundColor:'#000437'}}></li>
      <li style={{backgroundColor:'#11ff11'}}></li>
      <li style={{backgroundColor:'#bbff77'}}></li>
      <li style={{backgroundColor:'#ffc3a0'}}></li>
      <li style={{backgroundColor:'#44252d'}}></li>
      </ul>
      <ul className='sizes'>
      <li>xm</li>
      <li>s</li>
      <li>m</li>
      <li>l</li>
      <li>xl</li>
      </ul>
  </div>
  {/* <div className="seprator"></div> */}

  <span className='price'>$250</span>
  <div className="product-btn">

  
   <div className="wishlist-btn">
    <div>Add to Whishlist</div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="IconChangeColor" height="18" width="18"> <g> <path fill="none" d="M0 0H24V24H0z" id="mainIconPathAttribute"></path> <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2zm-3.566 15.604c.881-.556 1.676-1.109 2.42-1.701C18.335 14.533 20 11.943 20 9c0-2.36-1.537-4-3.5-4-1.076 0-2.24.57-3.086 1.414L12 7.828l-1.414-1.414C9.74 5.57 8.576 5 7.5 5 5.56 5 4 6.656 4 9c0 2.944 1.666 5.533 4.645 7.903.745.592 1.54 1.145 2.421 1.7.299.189.595.37.934.572.339-.202.635-.383.934-.571z" id="mainIconPathAttribute"></path></g></svg>
    </div> 

   <div className="cart">
   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16" id="IconChangeColor"> <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" id="mainIconPathAttribute"></path> </svg><div>Place in cart</div><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-dash-lg" viewBox="0 0 16 16" id="IconChangeColor"> <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" id="mainIconPathAttribute" fill="#000000"></path> </svg>
    </div>
  </div>
</div>





        </div>

    </div>
    </>
  )
}

export default FeatureProducts