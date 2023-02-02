import React from 'react'
import Header from '../Home/Components/Header'
import HomeSlider from '../Home/Components/HomeSlider'
import FeatureGrids from '../Home/Components/FeatureGrids'
import Footer from '../Home/Components/Footer'
import DeliveryIcons from '../Home/Components/DeliveryIcons'
import FeatureProducts from './Components/FeatureProducts'
import './css/style.css'
import './css/header.css'
import './css/slider.css'
import './css/feature-grids.css'
import './css/deliver-icons.css'
import './css/footer.css'
import './css/feature-products.css'

const Home = () => {
  return (
    <>
    <Header/>
    <HomeSlider/>
    <FeatureGrids/>
    <FeatureProducts/>
    <DeliveryIcons/>
    <Footer/>
    </>
  )
}

export default Home