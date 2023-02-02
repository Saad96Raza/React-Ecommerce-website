import React from 'react'
import grid1 from '../images/grid-1.jpg'
import grid3 from '../images/grid-3.jpg'
import grid4 from '../images/grid-4.jpg'

const FeatureGrids = () => {
  return (
    <>
    <div className="feature-grid-container">
        <div className="grid-left" style={{ backgroundImage:`url(${grid1})`, backgroundSize  : 'cover'}}>
            <h5>men collection</h5>
            <h1>best t-shirt</h1>
            
        </div>
       <div className="grid-right">

        <div className="grids">
        <div className="grid-2" style={{backgroundColor:"#000000"}}>
          <h1>sale off</h1>
          <h1>30%</h1>
        </div>
       <div className="grid-3" style={{ backgroundImage:`url(${grid3})`, backgroundSize  : 'cover'}}></div>
        </div>
      
       <div className="grid-4" style={{ backgroundImage:`url(${grid4})`, backgroundSize  : 'cover'}}></div>
        
       </div>
    </div>

  
    </>
  )
}

export default FeatureGrids