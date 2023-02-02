import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y,Parallax ,Mousewheel,Zoom ,Autoplay   } from 'swiper';
import bg1 from '../images/bg1.jpg';
import bg2 from '../images/bg2.png';
import bg3 from '../images/bg3.jpg';
import bg4 from '../images/bg4.jpg';



const HomeSlider = () => {



  return (
    <>
    
  <div className="container">

  <Swiper
  
   modules={[Navigation, Pagination, Scrollbar, A11y,Parallax ,Mousewheel,Zoom ,Autoplay  ]}
   spaceBetween={0}
   slidesPerView={1}
   autoplay= {{delay: 3000}}
   navigation
   pagination={{ clickable: true }}
   parallax={true}
   scrollbar={{ draggable: true }}
   zoom={{ maxRatio: 100 }}
   mousewheel={false}
   loop={true}
   speed= {1500}
  
    >
    <SwiperSlide>

      <div className='slide-1' data-swiper-parallax-scale="1.2" data-swiper-parallax="100%"  style={{ backgroundImage:`url(${bg1})`,backgroundSize: 'cover' }}>
     
     <h1 className='slide-title' data-swiper-parallax="-100%">modern design trends</h1>

     <button className='slide-ctx'data-swiper-parallax="-50%"   >view collection</button>
     </div>

      </SwiperSlide>

      <SwiperSlide>

      <div className='slide-2'    data-swiper-parallax-scale="1.2" data-swiper-parallax="100%" style={{ backgroundImage:`url(${bg2})`,backgroundSize: 'cover' }}>
     
     <h1 className='slide-title'data-swiper-parallax="-100%" >modern design trends</h1>

     <button  className='slide-ctx' data-swiper-parallax="-50%">view collection</button>
     </div>

      </SwiperSlide>

      <SwiperSlide>


      <div className='slide-3' data-swiper-parallax-scale="1.2" data-swiper-parallax="100%"  style={{ backgroundImage:`url(${bg3})`,backgroundSize: 'cover' }}>
     
     <h1 className='slide-title' data-swiper-parallax="-100%">modern design trends</h1>

     <button className='slide-ctx' data-swiper-parallax="-50%">view collection</button>
     </div>

      </SwiperSlide>

      <SwiperSlide>


      <div className='slide-4' data-swiper-parallax-scale="1.2" data-swiper-parallax="100%"  style={{ backgroundImage:`url(${bg4})`,backgroundSize: 'cover' }}>
     
     <h1 className='slide-title' data-swiper-parallax="-100%">modern design trends</h1>

     <button className='slide-ctx' data-swiper-parallax="-50%">view collection</button>
     </div>


      </SwiperSlide>
      ...
    </Swiper>

  </div>


    </>
  )
}

export default HomeSlider