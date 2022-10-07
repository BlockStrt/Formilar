import React from 'react';
import '../components/imgcon.css'
import tiger from '../assets/tigr.jpg'


export default function Imgcon() {
  return (
    <div className='contentimg'>
            <img src={tiger} className="tiger" alt='tiger'></img>
        </div>
  )
}
