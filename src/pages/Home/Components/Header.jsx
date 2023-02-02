import React from 'react'
import logo from '../images/logo.png';
const Header = () => {
  return (
    <>
    <header>
      <div className="logo" style={{ backgroundImage:`url(${logo})`,backgroundSize: 'contain',backgroundRepeat:'no-repeat'}}></div>
      <div className="nav">
        <ul>
          <li>Home<span>&#10010;</span></li>
          <li>men's<span>&#10010;</span></li>
          <li>women collection<span>&#10010;</span></li>
          <li>Shop<span>&#10010;</span></li>
          <li>About<span>&#10010;</span></li>
          <li>Contact<span>&#10010;</span></li>
        </ul>
      </div>
      <div className="nav-icons">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="20" width="20"><rect width="256" height="256" fill="none"></rect><circle cx="116" cy="116" r="84" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></circle><line x1="175.4" y1="175.4" x2="224" y2="224" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line></svg>      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" id="mainIconPathAttribute" strokeWidth="0" stroke="#ff0000"></path> </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" id="mainIconPathAttribute"></path> </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="IconChangeColor" height="20" width="20"> <g> <path fill="none" d="M0 0H24V24H0z" id="mainIconPathAttribute"></path> <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2zm-3.566 15.604c.881-.556 1.676-1.109 2.42-1.701C18.335 14.533 20 11.943 20 9c0-2.36-1.537-4-3.5-4-1.076 0-2.24.57-3.086 1.414L12 7.828l-1.414-1.414C9.74 5.57 8.576 5 7.5 5 5.56 5 4 6.656 4 9c0 2.944 1.666 5.533 4.645 7.903.745.592 1.54 1.145 2.421 1.7.299.189.595.37.934.572.339-.202.635-.383.934-.571z" id="mainIconPathAttribute"></path> </g> </svg>
 
           </div>
    </header>
    
    </>
  )
}

export default Header