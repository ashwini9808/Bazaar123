import React from 'react';
import Bgimg from '../../assets/illustration-of-online-shopping-with-new-normal-health-protocol-with-mobile-apps-virtual-mobile-store-can-be-used-for-website-web-mobile-apps-flyer-background-element-banner-template-free-vector.jpg';

function HeroSection() {
  return (
    <div className=' animate-zoomInOut  bg-gradient-to-r from-slate-200 to-slate-400' >
        <img src={Bgimg} alt='BG Image' className='w-[100%] h-[420px] animate-wiggl -5' />
    </div>
  )
}

export default HeroSection