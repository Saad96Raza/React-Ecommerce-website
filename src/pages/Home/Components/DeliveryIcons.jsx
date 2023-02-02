import React from 'react'
import freeShipping from '../images/free shipping.png'
import services from '../images/24 hr service.png'
import payment from '../images/easy payment.png'

const DeliveryIcons = () => {
  return (
    <>
    <div className="icon-container">
        <div className="free-shipping">
        <img src={freeShipping} alt="" />
            <h1>FREE SHIPPING</h1>
            <h4>24/7 free shipping</h4>
            
           
        </div>
        <div className="free-shipping">
        <img src={payment} alt="" />
            <h1>easy payment</h1>
            <h4>100% money back - 30 days</h4>
        </div>
        <div className="free-shipping">
        <img src={services} alt="" />
            <h1>24H SUPPORT</h1>
            <h4>24/7 support service</h4>
            
        </div>
    </div>
    </>
  )
}

export default DeliveryIcons