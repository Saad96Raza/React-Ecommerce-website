import React,{useState,useRef} from 'react'
import emailjs from "emailjs-com";
import CBg from '../images/Contact-bg.jpg'


const ContactForm = () => {

    const form = useRef(); 

const onContactFormSubmit = (e)=>{

    e.preventDefault();
    emailjs.sendForm('service_vkmqnaz', 'template_bj9yy2t', form.current, 'nrJXbCdVr8cK1BNfo');
}


  return (
    <>






    <div className="container" style={{backgroundImage:`url(${CBg})`}}>

    

    <div className="left-container">

   


    </div>

    <div className="right-container">

    <h1 className='contact-title'>get in touch  <b> with us </b></h1>

<form  ref={form} onSubmit={onContactFormSubmit}>

<input type="text" id="fname" name="name" autoComplete='off' placeholder='Your Name'/>
<input type="email" id="email" name="email" autoComplete='off' placeholder='Your Email'/>
<input type="number" id="number" name="number"  autoComplete='off'placeholder='Your Phone'/>
<input type="text" id="subject" name="subject"  autoComplete='off'placeholder='Subject'/>
<textarea type="text" name="message" id="message"  autoComplete='off'placeholder='Message'></textarea>
<input className='form-btn' type="submit"   value="message us"/>
</form>


        
    </div>

    </div>
    </>
  )
}

export default ContactForm