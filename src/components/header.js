import React, {useState} from 'react'
import './header.css'
import emailIcon from '../assets/email-svgrepo.svg';
import location from '../assets/location-svgrepo.svg';
import phone from'../assets/money-svgrepo.svg';
import world from '../assets/user-svgrepo.svg';


export default function Header() {


const [count, setCount] =useState(0);



  return (
    <header>
        <div>
        <h1>Contact Form #<span>{count}</span></h1>
        </div>
        {/* here we need to make the figcaption smaller into */}
        <div class="inner-header">
            <figure>
            <img class='emialwidth' alt='' src={emailIcon}></img>
            <figcaption class="caption"> Adress: 198 West 21th Street, Suuite 721 New York NY 10016</figcaption>
            </figure>
            <figure>
            <img class='emialwidth' alt='' src={location}></img>
            <figcaption class="caption"> Phone: + 1235 2355 98</figcaption>
            </figure>
            <figure>
            <img class='emialwidth' alt='' src={phone}></img>
            <figcaption class="caption"> Email: info@yoursite.com</figcaption>
            </figure>
            <figure>
            <img class='emialwidth' alt='' src={world}></img>
            <figcaption class="caption"> Website: yoursite.com</figcaption>
            </figure>
        </div>
        <div class='button-conttainer'>
           
            <button class='button' onClick={() => setCount(count + 1)}>Clikk rq</button>
        </div>

        </header>
       
  )
}
