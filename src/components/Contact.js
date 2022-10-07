import React, { useState } from 'react';
import styles from './contact.css';
import '../components/animation';




export default function Contact() {
 const [grow, setGrow] = useState(false);

 const handleClick = () => setGrow(!grow);
 
  return (
    <>
    <section>
    <form class='realform'>
    <div className='contact-form'>
            {/* <h1 className='contacth1'>contact</h1> */}
            <div class="col-sm-6">
            <div class="input-block">
                <label for="">First Name</label>
                <input 
                type="text" 
                onClick={handleClick} 
                className={(styles.label, styles.grow)}
                class="form-control"/>
            </div>
            </div>
            <div class="col-sm-6">
            <div class="input-block">
                <label for="">Last Name</label>
                <input type="text" class="form-control"/>
            </div>
            </div>
            <div class="col-sm-12">
            <div class="input-block">
                <label for="">Email</label>
                <input type="text" class="form-control"/>
            </div>
            </div>
            <div class="col-sm-12">
            <div class="input-block">
                <label for="">Message Subject</label>
                <input type="text" class="form-control"/>
            </div>
            </div>
            <div class="col-sm-12">
            <div class="input-block textarea">
                <label for="">Drop your message here</label>
                <textarea rows="3" type="text" class="form-control"></textarea>
            </div>
            </div>
            <div class="col-sm-12">
            <button class="square-button">Send</button>
            </div>
            </div>
    </form>
    </section>
    </>
  )
}
